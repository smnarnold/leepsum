class LoremIpsum {
    constructor() {
        //-- Properties
        //--------------------------------------------------------------
        this.dom = {
            nbr: document.querySelector('input[name="nbr"]'),
            type: document.querySelectorAll('input[name="type"]'),
            btn: document.querySelector('.js-generate'),
            content: document.querySelector('.js-content')
        };

        this.settings = {
            nbr: this.dom.nbr.value,
            type: "Paragraphs",
            nbrWords: 60,
            avgWords: 24.460,
            stdWords: 5.080
        };

        this.words = [
            "innovation", "big data", "statu quo", "convergence", "milléniaux", "influenceurs", "croissance organique", "incubateur", "chef de file", "multidisciplinaire", "plus de 400 artisans", "sur Exactlee", "feuilles de temps", "méthodologie agile", "le studio", "si c’est pas dans Jira", "rock star", "sur un channel Slack", "demande à Mom", "#CommeUnRêve", "Toé t’es un", "au grooming", "slack moi", "sur Freshlee", "monde moderne", "expérientielle", "image de marque", "un nouveau branding", "nouvelle campagne", "statu quo", "C2 Montréal", "aux Boomerangs", "summer friday", "avec Sitecore", "responsive", "menu végétarien", "dans le guide de l’artisan", "dans Dropbox", "à Sid Lee Land", "une évaluation 360",  "Related contents", "l’expérience usager", "approche créative", "bière et chips", "offsite", "en prod", "en QA", "mon café", "plus transparent", "milléniaux", "MVP", "synergie", "viral", "positionnement", "croissance organique", "retour sur investissement", "influenceur", "des solutions avant-gardistes", "possibilités innovantes", "sans silos", "partout dans le monde", "collaborative", "unique", "bold", "bâtisseur de marques", "en équipe", "médias sociaux", "transformateur de marque", "on refuse le statu quo", "l’économie de l’expérience", "folklore", "repousser les limites", "squad", "tribu", "restructuration", "repositionne", "très innovant", "airs ouvertes", "maquettes aux murs", "un super beau mandat", "comment mieux travailler ensemble", "faire des ponts", "pas acheté le nom de domaine", "renouveler l’hébergement", "un bel accomplissement", "la mère à Dan", "un newbie", "un technologue", "un rédacteur", "une analyste", "un directeur artistique", "une stratège", "un directeur conseil", "une productrice", "un réalisateur", "un gestionnaire de communauté", "un monteur", "un motion designer", "un designer UI", "un designer", "une journaliste", "un développeur", "un chargé de projets", "un ninja full-stack",  "un créateur d’idées", "un ,membre des talents", "un membre du studio", "dans la Jetson", "dans la Netscape", "dans la French laundry", "dans la salle Virgina Wolf", "la douche", "au bistro",  "au 8 queen", "au cacatrième", "au Pasta Pas l’choix", "aux sèches",  "au Pub Vic", "aux Soeurs grises", "à Montréal", "dans la salle verte", "à Jouvance", "sur les médias sociaux", "au offsite", "au Morons awards", "au Rockons awards", "au party d’été", "au daylee", "au party de Noel", "dans le meeting", "au kick off", "vendredi 5h", "lundi matin", "lors de la collation de 3h", "pendant le déjeuner"
        ];

        this.data = {
            persons: [
                "la mère à Dan", "un newbie", "un influenceur", "un technologue", "un rédacteur", "une analyste", "un directeur artistique", "une stratège", "un directeur conseil", "une productrice", "un réalisateur", "un gestionnaire de communauté", "un monteur", "un motion designer", "un designer UI", "un designer", "une journaliste", "un développeur", "un chargé de projets", "un ninja full-stack", "un créateur d’idées", "un membre des talents", "un membre du studio"
            ],
            adjectives: [
                "viral", "expérientielle", "MVP", "vrai", "engagé", "responsive", "transparent", "organique", "sans silos", "collaborative", "unique", "bold", "incroyable"
            ],
            qualifiers: [
                "agent de changement", "sénior", "junior", "leader dans son domaine"
            ],
            actions: [
                "a effacé", "a révolutionné", "a repoussé les limites de", "a gagné", "a révolutionné l’histoire du", "a refusé", "a engagé"
            ],
            places: [
                "dans la Jetson", "dans la Netscape", "dans la French laundry", "dans la salle Virgina Wolf", "dans la douche", "au bistro",  "au 8 queen", "au cacatrième", "au Pasta Pas l’choix", "aux sèches",  "au Pub Vic", "aux Soeurs grises", "à Sid Lee Land", "à Montréal", "dans la salle verte", "à Jouvance", "sur les médias sociaux", "au offsite", "aux Boomerangs", "sur les médias sociaux", "au Morons awards", "au Rockons awards", "au party d’été", "au daylee", "au party de Noël", "dans le meeting", "au kick off", "sur Exactlee", "sur Slack", "sur Freshlee", "en prod", "en QA"
            ],
            times: [
                "vendredi 5h", "lundi matin", "lors de la collation de 3h", "pendant le déjeuner", "l’autre jour", "pendant un summer friday"
            ],
            subjects: [
                "la machine à café", "l'entreprise", "Sid Lee", "Dropbox", "la croissance", "du folklore", "des solutions avant-gardistes", "le retour sur investissement", "un monde moderne", "le meeting", "une vidéo", "sa feuille de temps", "Jira", "la méthodologie agile", "l'image de marque", "le branding", "la campagne publicitaire", "le statu quo", "la transparence", "le menu végétarien", "le guide de l’artisan", "une évaluation 360", "l’expérience usager", "son approche créative", "les milléniaux", "un MVP", "son positionnement"
            ],
            transitions: [
                "cependant,", "néanmoins,", "tandis que", "pour sa part,", " toutefois,"
            ],
            enders: [
                "#CommeUnRêve", "#NOT", ". Says no one ever", ""
            ],
            structures: [
                ["*transitions", "*times", "places", ", ", "persons", "*qualifiers", "actions", "subjects", "*adjectives", "*enders", ". "],
                ["*transitions", "places", ", ", "persons", "*qualifiers", "actions", "subjects", "*adjectives", "*enders", ". "],
                ["*transitions", "persons", "qualifiers", ", ", "places", "actions", "subjects", "*adjectives", "*enders", ". "]
            ]
        }

        this.replacements = [
            [" ,", ","],
            [" de le", " du"],
            [" du un", " d'un"],
            [" du une", " d'une"],
            [" du la", " de la"],
            [" du le", " du"],
            [" de un", " d'un"],
            [" de une", " d'une"],
            [" que au", "qu'au"],
            [" que aux", "qu'aux"]
        ]
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.dom.btn.addEventListener('click', () => this.setup());
        this.dom.nbr.addEventListener('change', () => this.settings.nbr = this.dom.nbr.value);
        Array.prototype.forEach.call(this.dom.type, radio => {
           radio.addEventListener('change', () => this.settings.type = radio.value);
        });
    }

    setup() {
        this.genP();
        let res = '';
        
        for (let i=0; i<this.settings.nbr; i++) {
            res += this[`generate${this.settings.type}`]();
        }

        this.dom.content.innerHTML = res;
    }

    genP() {
        let sentencesNbr = Math.floor( Math.random() * 6) + 2; // 2 - 8 phrases
        let paragraph = '';

        for(let x=0; x<sentencesNbr; x++) {
            let hasTransition = Math.round( Math.random() );
            let sentence = this.capitalize( this.genS() );
            paragraph += sentence;
        }
        
        paragraph = this.fixLigation( paragraph );

        console.log(paragraph);
    }

    genS() {
        let structure = this.data.structures[ Math.floor(Math.random() * this.data.structures.length) ];
        let sentence = '';

        for(let x=0; x<structure.length; x++) {
            let sep = ' ';
            let section = structure[x];

            if( section.charAt(0) === '*') {
                if( Math.random() * 4 < 1 ) {
                    section = section.slice(1);
                } else {
                    continue;
                }
            }
            
            let category = this.data[ section ];
            let literal = typeof category === "undefined";

            if(x === structure.length-2) {
                sep = '';
            }

            if(literal) {
                sentence += section;
            } else {
                sentence += category[ Math.floor(Math.random() * category.length) ] + sep;
            }
        }
        return sentence;
    }

    fixLigation(str) {
        for(let x=0; x<this.replacements.length; x++) {
            str = str.replace(new RegExp(this.replacements[x][0], 'g'), this.replacements[x][1]);
        }

        return str;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    generateParagraphs() {
        let sentencesNbr = Math.floor( Math.random() * 6) + 2; // 2 - 8 phrases
        let sentences = '';

        for(let i=0; i<sentencesNbr; i++) {
            let sentence = this.generateSentences();
            sentences += `${sentence} `;
        }

        return `<p>${sentences}</p>`;
    }

    generateWords() {
        let res = '';
        for (let i=0; i<this.settings.nbr; i++) {
            let word = this.generate();
            res += `${word}`;
        }
        this.dom.content.innerHTML = res;
    }

    generateLists() {
        let sentence = this.generateSentences();
        return `<li>${sentence}</li>`;
    }

    generateSentences() {
        let words = [];
        let wordsNbr = Math.floor( Math.random() * 8) + 12; // 8-20 words
        let index = 0;

        for (let i = 0; i < wordsNbr; i++) {
            let pos = Math.floor( Math.random() * this.words.length );
            let word = this.words[pos];
            let l = word.split(' ').length;

            if(l > 0) 
                i += l-1;
            
            if (index > 0 && words[index - 1] === word)
                index -= 1;
            else
                words[index] = word;

            index++;
        }

        let commasNbr = Math.floor( Math.random() * 3); // 0-3 ","

        if(commasNbr > 0) {
            for (let i=0; i <commasNbr; i++) {
                let avg = Math.floor(words.length / commasNbr);
                let pos = Math.floor( Math.random() * (avg - 1));

                if (pos > 0 && pos < avg - 1) {
                    words.splice(pos + avg * i, 0, ',');
                }
            }
        }

        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1); /* Majuscule sur la première lettre. */
        words[words.length - 1] += '. '; /* Point à la fin d'une phrase. */
        let sentence = words.join(' ');
        sentence = sentence.replace(/ , /g, ', '); /* Ajustement des virgules*/
    
        return sentence;
    }
}

var sidleepsum = new LoremIpsum();
sidleepsum.init();
