import data from '../json/data';
import ligatures from '../json/ligatures';

class LoremIpsum {
    constructor() {
        this.dom = {
            form: document.querySelector('form'),
            nbr: document.querySelector('input[name="nbr"]'),
            type: document.querySelectorAll('input[name="type"]'),
            btn: document.querySelector('.js-generate'),
            content: document.querySelector('.js-content'),
            footer: document.querySelector('.js-footer')
        };

        this.settings = {
            url: "http://sidlipsum.smnarnold.com",
            nbr: this.dom.nbr.value,
            type: "Paragraphs"
        };

        this.wordsArr = data.times.m.single.item.values.concat(
            data.places.m.single.item.values, 
            data.places.f.single.item.values, 
            data.persons.m.single.item.values, 
            data.persons.f.single.item.values,
            data.roles.m.single.item.values, 
            data.roles.f.single.item.values,
            data.roles.m.single.specialisation.values, 
            data.roles.f.single.specialisation.values,
        );
    }

    /**
     * Methods
     */
    init() {
        this.bindEvents();
        this.setup(); 
    }

    bindEvents() {
        this.dom.form.addEventListener('submit', e => {
            e.preventDefault();
            this.setup();
        });
        this.dom.nbr.addEventListener('change', () => this.settings.nbr = this.dom.nbr.value);
        Array.prototype.forEach.call(this.dom.type, radio => radio.addEventListener('change', () => this.settings.type = radio.value));
    }

    setup() {
        let content = '';
        this.usedDictionnary = [];
        
        for (let i=0; i<this.settings.nbr; i++) {
            content += this.getLoremIpsum( this.settings.type );
        }

        content = this.fixLigatures( content );

        this.updateResume( content );
        this.dom.content.innerHTML = `<article class="article">${content}</article>`;
    }

    getLoremIpsum( type ) {
        let content;

        switch ( type ) {
            case 'Sentences':
                content = this.generateSentences() + " ";
                break;
            case 'Words':
                let item = this.getArrRandomValue( this.wordsArr );
                content = this.getArrRandomValue( item.split(" ") ) + " ";
                break;
            case 'Lists':
                content = this.generateLists();
                break;
            default:
                content = this.generateParagraphs();
        }

        return this.fixLigatures( content );
    }

    generateParagraphs() {
        let sentencesNbr = this.randomFromInterval(2, 8);
        let paragraphArr = [];

        for(let x=0; x<sentencesNbr; x++) {
            let hasTransition = Math.round( Math.random() );
            let sentence = this.generateSentences();
            paragraphArr.push( sentence );
        }

        return `<p>${paragraphArr.join(" ")}</p>`;
    }

    generateSentences() {
        let structure = data.structures[ Math.floor(Math.random() * data.structures.length) ];
        let protagonist = {
            gender: '',
            number: ''
        };

        let sentenceArr = [];

        for(let x=0; x<structure.length; x++) {
            let type = structure[x];
            let firstChar = type.charAt(0);

            if(firstChar === '*') {
                if( Math.random() * 6 < 1 )
                    type = type.slice(1);
                else
                    continue;
            } else if(firstChar === '?') {
                let obj = '';

                if( type.slice(1) === 'actions' )
                    obj = this.getSection( type.slice(1), protagonist);
                else
                    obj = this.getSection( type.slice(1) );

                if( type.slice(1) === 'protagonists' ) {
                    protagonist = {
                        gender: obj.gender,
                        number: obj.number
                    };
                }
                sentenceArr.push( obj.text );
                continue;
            } 
            
            let category = data[ type ];
            let literal = typeof category === "undefined";

            if(literal)
                sentenceArr.push( type );
            else
                sentenceArr.push( this.getRandomWord( type ) );
        }

        return this.capitalize( sentenceArr.join(' ') );
    }

    generateLists() {
        let sentence = this.generateSentences();
        return `<li>${sentence}</li>`;
    }

    getSection( originalType, preset = {} ) {
        let typeObj = data[originalType];
        let obj = '';

        if( typeObj.hasOwnProperty('options') ) {
            let type = this.getArrRandomValue( typeObj.options );

            if(typeof type === 'string')
                obj = this.getPartial(type, preset);
            else if(typeof type === 'object') {
                let partialsArr = [];

                for(let x=0; x<type.length; x++) {
                    partialsArr.push( this.getPartial(type[x], preset) );
                }

                obj = this.mergePartials(partialsArr, originalType, typeObj);
            }
        } else
            obj = this.getPartial(originalType, preset);

        return obj;
    }

    getPartial( type = 'persons', preset = {}) {
        if(typeof preset.gender === 'undefined')
            preset.gender = Math.random() >= 0.5 ? 'm' : 'f';

        let textArr = [];
        let typeObj = data[type];
        let sub = Object.keys( typeObj[ preset.gender ] );
        let subPos = Math.floor( sub.length * Math.random() );

        if(typeof preset.number === 'undefined')
            preset.number = sub[subPos];

        let obj = typeObj[ preset.gender ][ preset.number ];

        for(let x=0; x<data[type].structure.length; x++) {
            let category = data[type].structure[x];

            if(obj[category]['required'] >= Math.random())
                textArr.push( this.getArrRandomNoRepeat( obj[category]['values'] ) );
            else if(typeof obj[category]['default'] !== 'undefined')
                textArr.push( obj[category]['default'] );
        }

        return { type: type, text: textArr.join(' '), gender: preset.gender, number: preset.number };
    }

    mergePartials(arr, type, typeObj) {
        let obj = arr[0];

        for(let x=1; x<arr.length; x++) {
            if( arr[x].gender !== obj.gender )
                obj.gender = 'm';

            obj.text += this.getArrRandomValue( typeObj.sep ) + arr[x].text;
        }

        obj.type = type;
        obj.number = 'plural';

        return obj;
    }

    randomFromInterval(min=0, max=10) {
        return Math.floor( Math.random() * (max-min+1) + min );
    }

    getArrRandomValue( arr ) {
        return arr[Math.floor( arr.length * Math.random() )];
    }

    getArrRandomNoRepeat( arr ) {
        let word = arr[Math.floor( arr.length * Math.random() )];

        if( this.usedDictionnary.indexOf( word ) === -1 ) {
            if( word.length > 3)
                this.usedDictionnary.push( word );
            return arr[Math.floor( arr.length * Math.random() )];
        } else
            return this.getArrRandomValue( arr );
    }

    getRandomWord( typeOfWord ) {
        let wordIndex = Math.floor( Math.random() * data[ typeOfWord ].length );

        if(!typeof this.usedDictionnary[ typeOfWord ] !== 'undefined')
            this.usedDictionnary[ typeOfWord ] = []; 

        if( this.usedDictionnary[ typeOfWord ].indexOf( wordIndex ) === -1 ) { // if the word isn't in the array of used words.
            this.usedDictionnary[ typeOfWord ].push( wordIndex );

            if( this.usedDictionnary[ typeOfWord ].length > 4 )  // make sure the same word dosn't get repeated too quickly
                this.usedDictionnary[ typeOfWord ].shift();

            return data[ typeOfWord ][ wordIndex ];
        } else 
            return this.getRandomWord( typeOfWord );
    }

    fixLigatures( str ) {
        for(let x=0; x<ligatures.length; x++) {
            str = str.replace(new RegExp(ligatures[x][0], 'g'), ligatures[x][1]);
        }

        return str;
    }

    capitalize( str ) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    updateResume( text ) {
        let translations = {
            Paragraphs: `${this.settings.nbr} paragraphes`,
            Sentences: `${this.settings.nbr} phrases`,
            Words: `${this.settings.nbr} mots`,
            Lists: `Une liste à ${this.settings.nbr} points`
        };

        let resume = translations[ this.settings.type ];
        
        if(this.settings.type !== 'Words') {
            let wordsNbr = text.split(' ').length;
            resume += `, ${wordsNbr} mots`;
        }

        let charactersNbr = text.replace(/[^A-Z]/gi, '').length;
        resume += `, ${charactersNbr} caractères de <a href="${this.settings.url}">Lee<em>psum</em></a> généré`;

        this.dom.footer.innerHTML = `<p><strong>${resume}</strong></p>`;
    }
}

var leepsum = new LoremIpsum();
leepsum.init();
