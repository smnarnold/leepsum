class LoremIpsum {
    constructor() {
        //-- Properties
        //--------------------------------------------------------------
        this.dom = {
            nbr: document.querySelector('input[name="nbr"]'),
            type: document.querySelectorAll('input[name="type"]'),
            btn: document.querySelector('.js-generate'),
            content: document.querySelector('.js-content'),
            footer: document.querySelector('.js-footer')
        };

        this.settings = {
            nbr: this.dom.nbr.value,
            type: "Paragraphs"
        };

        this.usedDictionnary = {}

        this.words = [
            "innovation", "big data", "statu quo", "convergence", "milléniaux", "influenceurs", "croissance organique", "incubateur", "chef de file", "multidisciplinaire", "plus de 400 artisans", "sur Exactlee", "feuilles de temps", "méthodologie agile", "le studio", "si c’est pas dans Jira", "rock star", "sur un channel Slack", "demande à Mom", "#CommeUnRêve", "Toé t’es un", "au grooming", "slack moi", "sur Freshlee", "monde moderne", "expérientielle", "image de marque", "un nouveau branding", "nouvelle campagne", "statu quo", "C2 Montréal", "aux Boomerangs", "summer friday", "avec Sitecore", "responsive", "menu végétarien", "dans le guide de l’artisan", "dans Dropbox", "à Sid Lee Land", "une évaluation 360",  "Related contents", "l’expérience usager", "approche créative", "bière et chips", "offsite", "en prod", "en QA", "mon café", "plus transparent", "milléniaux", "MVP", "synergie", "viral", "positionnement", "croissance organique", "retour sur investissement", "influenceur", "des solutions avant-gardistes", "possibilités innovantes", "sans silos", "partout dans le monde", "collaborative", "unique", "bold", "bâtisseur de marques", "en équipe", "médias sociaux", "transformateur de marque", "on refuse le statu quo", "l’économie de l’expérience", "folklore", "repousser les limites", "squad", "tribu", "restructuration", "repositionne", "très innovant", "airs ouvertes", "maquettes aux murs", "un super beau mandat", "comment mieux travailler ensemble", "faire des ponts", "pas acheté le nom de domaine", "renouveler l’hébergement", "un bel accomplissement", "la mère à Dan", "un newbie", "un technologue", "un rédacteur", "une analyste", "un directeur artistique", "une stratège", "un directeur conseil", "une productrice", "un réalisateur", "un gestionnaire de communauté", "un monteur", "un motion designer", "un designer UI", "un designer", "une journaliste", "un développeur", "un chargé de projets", "un ninja full-stack",  "un créateur d’idées", "un ,membre des talents", "un membre du studio", "dans la Jetson", "dans la Netscape", "dans la French laundry", "dans la salle Virgina Wolf", "la douche", "au bistro",  "au 8 queen", "au cacatrième", "au Pasta Pas l’choix", "aux sèches",  "au Pub Vic", "aux Soeurs grises", "à Montréal", "dans la salle verte", "à Jouvance", "sur les médias sociaux", "au offsite", "au Morons awards", "au Rockons awards", "au party d’été", "au daylee", "au party de Noel", "dans le meeting", "au kick off", "vendredi 5h", "lundi matin", "lors de la collation de 3h", "pendant le déjeuner"
        ];

        this.dictionary = {
            structures: [
                ["*transitions", "?contexts", ",", "?protagonists", "?actions", "?subjects", "*enders", "."],
                ["*transitions", "?protagonists", "?contexts", "?actions", "?subjects", "*enders", "."]
            ],
            transitions: [
                "malheureusement, ou heureusement,", "heureusement,", "malheureusement,", "cependant,", "néanmoins,", "tandis que", "pour sa part,", " toutefois,", "pour la première fois de l’histoire,", "mais aussi", "sur cette note,", "pendant ce temps"
            ],
            enders: [
                "#CommeUnRêve", "Yeah, Yeah", "#ProudlyWastingTimeAndMoney", "<strong>#BeBold</strong>", "#DIYorDIE"
            ],
            contexts: {
                options: ['places', 'times', ['places', 'times'], ['times', 'places']],
                sep: ' '
            },
            times: {
                structure: ['item'],
                m: {
                    single: {
                        item: {
                            required: 1,
                            values: ["vendredi 5h", "lundi matin", "lors de la collation de 3h", "pendant le déjeuner", "l’autre jour", "pendant un summer friday", "à la fin des années 90", "pendant trois jours", "aujourd’hui", "quelques années plus tard"]
                        }
                    }
                },
                f: {
                    single: {
                        item: {
                            required: 1,
                            values: ["vendredi 5h", "lundi matin", "lors de la collation de 3h", "pendant le déjeuner", "l’autre jour", "pendant un summer friday", "à la fin des années 90", "pendant trois jours", "aujourd’hui", "quelques années plus tard"]
                        }
                    }
                }
            },
            places: {
                structure: ['item'],
                m: {
                    single: {
                        item: {
                            required: 1,
                            values: ["au bistro", "au 8 Queen", "au <em>caca</em>trième", "au Pasta Pas l’choix", "aux sèches", "au scrum", "au Pub Vic", "en Asie", "aux Soeurs grises", "à Sid Lee Land", "à Montréal", "à Jouvance", "sur les médias sociaux", "au offsite", "aux Boomerangs", "sur les médias sociaux", "aux Morons awards", "aux Rockons awards", "au party d’été", "au daylee", "au party de Noël", "dans un meeting", "au <em>kick off</em>", "sur Exactlee", "sur Slack", "sur Freshlee", "en prod", "en QA"]
                        }
                    }
                },
                f: {
                    single: {
                        item: {
                            required: 1,
                            values: ["à la réception", "dans la Jetson", "dans la Netscape", "dans la French laundry","dans la salle Virgina Wolf", 'dans la <em>"douche"</em>', "dans la salle verte", "sur l'autoroute de l'information", "sur les intertubes", 'sur les <em>"zinternets"</em>', "sur feu QuickLee"]
                        }
                    }
                }
            },
            actions: {
                structure: ['item'],
                m: {
                    single: {
                        item: {
                            required: 1,
                            values: ["a fait", "a recherché", "a offert", "a jeté un coup d’œil à", "a fait tout ce qu’il fallait pour rendre", "n'a pas peur de", "a mené à terme", "a imaginé", "a conçu", "a acquis", "est sorti", "a effacé", "a révolutionné", "a repoussé les limites de", "a gagné", "a révolutionné l’histoire du", "a refusé", "a engagé", "a propulsé", "a métamorphosé", "y voyait", "a senti", "a commencé à devenir", "a fait rayonner", "a créé", "est allez rencontrer", "a rencontré", "est revenu de", "a optimisé", "s’est fait remarquer par", "a <em>“pitché”</em>", "a changé", "a bâtit ", "a rejoint"]
                        }
                    },
                    plural: {
                        item: {
                            required: 1,
                            values: ["ont fait", "ont recherchés", "ont offert", "ont jetés un coup d’œil à", "ont fait tout ce qu’il fallait pour rendre", "n'ont pas peur de", "ont menés à terme", "ont imaginés", "ont conçus", "ont acquis", "sont sortis", "ont effacés", "ont révolutionnés", "ont repoussés les limites de", "ont gagnés", "ont révolutionnés l’histoire du", "ont refusés", "ont engagés", "ont propulsés", "ont métamorphosés", "y voyaient", "ont sentis", "ont commencés à devenir", "ont fait rayonner", "ont créés", "sont allez rencontrer", "ont rencontrés", "sont revenus de", "ont optimisés", "se sont fait remarquer par", "ont <em>“pitchés”</em>", "ont changés", "ont bâtit ", "ont rejoint"]
                        }
                    }
                },
                f: {
                    single: {
                        item: {
                            required: 1,
                            values: ["a fait", "a recherchée", "a offerte", "a jetée un coup d’œil à", "a fait tout ce qu’il fallait pour rendre", "n'a pas peur de", "a menée à terme", "a imaginée", "a conçue", "a acquis", "est sortie", "a effacée", "a révolutionnée", "a repoussée les limites de", "a gagnée", "a révolutionnée l’histoire du", "a refusée", "a engagée", "a propulsée", "a métamorphosée", "y voyait", "a sentie", "a commencée à devenir", "a fait rayonner", "a créé", "est allez rencontrer", "a rencontrée", "est revenue de", "a optimisée", "s’est fait remarquer par", "a <em>“pitchée”</em>", "a changée", "a bâtit ", "a rejoint"]
                        }
                    },
                    plural: {
                        item: {
                            required: 1,
                            values: ["ont fait", "ont recherchées", "ont offertes", "ont jetée un coup d’œil à", "ont fait tout ce qu’il fallait pour rendre", "n'ont pas peur de", "ont menées à terme", "ont imaginées", "ont conçues", "ont acquis", "ont sorties", "ont effacées", "omt révolutionnées", "ont repoussées les limites de", "ont gagnées", "ont révolutionnées l’histoire du", "ont refusées", "ont engagées", "ont propulsées", "ont métamorphosées", "y voyaient", "ont sentient", "ont commencées à devenir", "ont fait rayonner", "ont créés", "sont allez rencontrer", "ont rencontrées", "sont revenues de", "ont optimisées", "se sont fait remarquer par", "ont <em>“pitchées”</em>", "ont changées", "ont bâtit ", "ont rejoint"]
                        }
                    }
                },
            },
            protagonists: {
                options: ['persons', 'persons', 'roles', 'roles', ['persons', 'persons'], ['roles', 'persons']],
                sep: [' et ', ' & ', ' assisté de ', " avec l'aide de "]
            },
            persons: {
                structure: ['prefix', 'item'],
                m: {
                    single: {
                        prefix: {
                            required: 0.25,
                            values: ["l'excellent", "le grand", "l'incontournable", "l'incomparable"]
                        },
                        item: {
                            required: 1,
                            values: ["Jean-Francois Bouchard", "Philippe Meunier", "Martin Gauthier", "Techno-Phil", "Simon Arnold", "Andrew Moore", "Guillaume Raymond", "Brian McIntyre", "Louis Jutras", "Hugo Voisine", "Nicolas Trudel", "Jonathan Brûlé", "Frederic Landry", "Patrick Freedom Mayer", "Nicolas Huget Latour", "Yannick Meunier", "David Emmanuel Gadoury", "Maxime Daoust", "Daniel Petitclerc", "René-Charles Arseneau", "Vincent Ramsay", "Francis Ardouin Rodriguez", "Tommy Vincent Mathieu", "Pierre-Paul Samson", "Pierre Lambert", "Éric Briand", "Jonathan Pinard", "Vincent Paradis", "Marc-A. Monette", "Bo Tellier", "Arthur Loiselle", "Guillaume Cardell", "Christian Quenneville", "Yanick Bédard", "François Forget", "Daniel Fortier", "Vincent Hamel", "Marc Lalande", "Alex Pilon"]
                        }
                    }
                },
                f: {
                    single: {
                        prefix: {
                            required: 0.25,
                            values: ["l'excellente", "la grande", "la magnifique", "l'incomparable", "la remarquable"]
                        },
                        item: {
                            required: 1,
                            values: ["Mylène St-Pierre", "Ariane Audet-Ménard", "Thithu Vu", "Caroline Royer", 'Cynthia <em>"Mom"</em> Baillargeon', "Marie-France St-Pierre", "Chloé Brossard", "Stephanie Villani", "Émilie Thibault", "Anne-Marie Champoux", "Maïly Huynh Lapointe", "Mélissa Gilbert", "Marie-Claude Lafleur", "Sarah Lussier", "Karen Gaudreau", "Lee Sanderson", "Vanessa Daly", "Marie-Elaine Benoit", "Anne-Marie Castonguay"]
                        }
                    }
                }
            },
            roles: {
                structure: ['determining', 'prefix', 'item', 'specialisation', 'suffix'],
                m: {
                    single: {
                        determining: {
                            required: 1,
                            values: ['un']
                        },
                        prefix: {
                            required: 0.25,
                            values: ["guru", "prophète", "ambassadeur", "ninja", "évangeliste", "lead", "newbie", "motion"]
                        },
                        item: {
                            required: 1,
                            values: ["directeur", "producteur", "réalisateur", "chargé de projets", "influenceur", "technologue", "rédacteur", "analyste", "stratège", "gestionnaire", "monteur", "designer", "developpeur", "journaliste", "concepteur-rédacteur", "coordonateur", "artisan", "infographiste", "vidéaste", "scrum master"]
                        },
                        specialisation: {
                            required: 0.4,
                            values: ["artistique", "conseil", "technique", "UI", "UX", "offline", "de communauté", "de vidéos", "full-stack", "front-end", "back-end", "au contenu", "système", "de stratégie", "de produit", "des relations publiques"]
                        },
                        suffix: {
                            required: 0.35,
                            values: ["agent de changement", "sénior", "junior", '<em>"kickass"</em>', "trop geek", "multidisciplinaire", "difficile à étiqueter", "moderne", "leader dans son domaine", "marquant", "de l'époque", "novateur", "avant-gardistes", "audacieux", "persévérants", "curieux", "hors pair", "attentionné"]
                        }
                    }
                },
                f: {
                    single: {
                        determining: {
                            required: 1,
                            values: ['une'],
                        },
                        prefix: {
                            required: 0.25,
                            values: ["vraie licorne de", "guru", "prophète", "ambassadrice", "ninja", "évangeliste", "newbie"],
                        },
                        item: {
                            required: 1,
                            values: ["directrice", "productrice", "réalisatrice", "chargée de projets"],
                        },
                        specialisation: {
                            required: 0.4,
                            values: ["artistique", "conseil", "technique", "UI", "de communauté", "de vidéos", "full-stack"],
                        },
                        suffix: {
                            required: 0.35,
                            values: ["agente de changement", "sénior", "junior", "aguérie", "trop geek", "marquante"]
                        }
                    }
                }
            },
            subjects: {
                structure: ['prefix', 'item', 'suffix'],
                m: {
                    single: {
                        prefix: {
                            required: 0.25,
                            default: 'le',
                            values: ["ce genre de", "le deuxième", "le seul", "notre", "notre premier", "son", "un grand", "un nouveau"]
                        },
                        item: {
                            required: 1,
                            values: ["Cirque du Soleil", "Dropbox", "Jira", "MVP", "Sid Lee", "Sid Lee University", "atelier", "avantage", "branding", "bureau", "carton", "changement", "client", "collectif", "compte Adidas", "compte Vidéotron", "compte Banque Nationale", "compétiteur", "consommateur", "contenu", "contrat", "cours des choses", "design", "domaine", "défis", "engagement", "folklore", "guide", "mandat", "marché", "marketing", "meeting", "menu", "monde", "monde de possibilités", "point de contact", "positionnement", "retour", "réseau", "sentiers battus", "site mobile", "statu quo", "virage", "volet", "voyage", "échec", "éventail de services", "événement"]
                        },
                        suffix: {
                            required: 0.5,
                            values: ["américain", "au monde", "canadien", "commandité", "d'aujourd’hui", "de Sid Lee", "de cœur", "de détail", "de l’artisan", "international", "moderne", "numérique", "pertinent", "plus fort", "plus vaste", "possible", "professionnel", "profond", "quotidien", "usager", "végétarien", "de 6 mois 400 mille"]
                        }
                    },
                    plural: {
                        prefix: {
                            required: 0.25,
                            default: 'les',
                            values: ["les seuls", "nos", "nos premiers", "ses", "de grands", "des nouveaux"]
                        },
                        item: {
                            required: 1,
                            values: ["ateliers", "avantages", "bureaux", "changements", "clients", "collectifs", "compétiteurs", "consommateurs", "contenus", "designs", "domaines", "défis", "engagements", "mandats", "marchés", "meetings", "menus", "mondes", "points de contact", "réseaux", "réussites", "sentiers battus", "sites mobiles", "virages", "voyages", "échecs", "événements"]
                        },
                        suffix: {
                            required: 0.5,
                            values: ["américains", "au monde", "canadiens", "commandités", "d'aujourd’hui", "de Sid Lee", "de détail", "de l’artisan", "internationaux", "modernes", "numériques", "pertinents", "plus fort", "plus vaste", "possibles", "professionnels", "profonds", "quotidien", "usager", "végétariens"]
                        }
                    }
                },
                f: {
                    single: {
                        prefix: {
                            required: 0.25,
                            default: 'la',
                            values: ["la seule", "notre première", "sa", "une nouvelle", "une zesty de"]
                        },
                        item: {
                            required: 1,
                            values: ["agence", "analyse", "approche", "aptitude", "architecture", "aventure", "bulle", "campagne publicitaire", "capsule vidéo", "chose", "collation", "compagnie", "croissance", "culture", "donne", "entreprise", "expérience", "feuille de temps", "force", "histoire", "idée", "image", "industrie", "innovation", "interactivité", "machine à café", "modernisation", "méthodologie", "oeuvre", "opportunité", "plateforme", "porte", "publicité", "reflexion", "réputation", "scène", "solution", "transparence", "vidéo", "vision", "évaluation"]
                        },
                        suffix: {
                            required: 0.5,
                            values: ["360", "agile", "américaine", "avant-gardiste", "canadienne", "complète", "créative", "de marque", "d’amitié", "d’entrée", "extrême", "folle", "hors pair", "internationale", "internet", "progressiste", "simple", "stratégique", "sur investissement", "valorisante", "à l’échelle mondiale"]
                        }
                    },
                    plural: {
                        prefix: {
                            required: 0.25,
                            default: 'les',
                            values: ["les seules", "nos premières", "ses", "ses nouvelles", "des zesty de"]
                        },
                        item: {
                            required: 1,
                            values: ["agences", "analyses", "approches", "aptitudes", "architectures", "aventures", "bulles", "campagnes publicitaire", "choses", "collations", "compagnies", "croissances", "cultures", "entreprises", "expériences", "feuilles de temps", "forces", "histoires", "idées", "images", "industries", "innovations", "interactivités", "machines à café", "modernisations", "méthodologies", "oeuvres", "opportunités", "plateformes", "portes", "publicités", "reflexions", "réputations", "solutions", "vidéos", "visions", "évaluations"]
                        },
                        suffix: {
                            required: 0.5,
                            values: ["360", "agiles", "américaines", "avant-gardistes", "canadiennes", "complètes", "créatives", "de marques", "d’amitié", "d’entrée", "extrêmes", "folles", "hors pairs", "internationales", "internet", "progressistes", "simples", "stratégiques", "valorisantes", "à l’échelle mondiale"]
                        }
                    }
                }
            }
        }

        this.replacements = [
            [" ,", ","],
            [" à les ", " aux "],
            [" à le ", " au "],
            [" le a", " l'a"],
            [" le e", " l'e"],
            [" le é", " l'é"],
            [" le h", " l'h"],
            [" le i", " l'i"],
            [" le o", " l'o"],
            [" le u", " l'u"],
            [" le y", " l'y"],
            [" la a", " l'a"],
            [" la e", " l'e"],
            [" la é", " l'é"],
            [" la h", " l'h"],
            [" la i", " l'i"],
            [" la o", " l'o"],
            [" la u", " l'u"],
            [" la y", " l'y"],
            [" du un", " d'un"],
            [" du une ", " d'une "],
            [" du la", " de la"],
            [" du l'", " de l'"],
            [" du le ", " du "],
            [" du les ", " des "],
            [" du du ", " du "],
            [" du des ", " des "],
            [" du sa ", " de sa "],
            [" de a", " d'a"],
            [" de A", " d'A"],
            [" de h", " d'h"],
            [" de i", " d'i"],
            [" de o", " d'o"],
            [" de u", " d'u"],
            [" de y", " d'y"],
            [" de les ", " des "],
            [" de des ", " des "],
            [" de du ", " du "],
            [" du un", " d'un"],
            [" que au", " qu'au"],
            [" que un", " qu'un"],
            [" que une", " qu'une"],
            [" que aux", " qu'aux"],
            [" sa e", " son e"],
            [" sa é", " son é"],
            [" sa h", " son h"],
            [" sa i", " son i"],
            [" sa o", " son o"],
            [" sa u", " son u"],
            [" sa y", " son y"],
            [" que à", " qu'à"],
            [" par du ", " par un "]
        ]
    }

    //-- Methods
    //--------------------------------------------------------------
    init() {
        this.bindEvents();
        this.setup();
    }

    bindEvents() {
        this.dom.btn.addEventListener('click', () => this.setup());
        this.dom.nbr.addEventListener('change', () => this.settings.nbr = this.dom.nbr.value);
        Array.prototype.forEach.call(this.dom.type, radio => {
           radio.addEventListener('change', () => this.settings.type = radio.value);
        });
    }

    setup() {
        let sidleepsum = '';
        
        for (let i=0; i<this.settings.nbr; i++) {
            sidleepsum += this.fixLigation( this[`generate${this.settings.type}`]() );
        }

        let resume = this.getResume(sidleepsum);
        this.dom.content.innerHTML = `<article class="article">${sidleepsum}</article>`;
        this.dom.footer.innerHTML = `<p><strong>${resume}</strong></p>`;
    }

    generateParagraphs() {
        let sentencesNbr = Math.floor( Math.random() * 6) + 2; // 2 - 8 phrases
        let paragraphArr = [];

        for(let x=0; x<sentencesNbr; x++) {
            let hasTransition = Math.round( Math.random() );
            let sentence = this.generateSentences();
            paragraphArr.push( sentence );
        }

        return `<p>${paragraphArr.join(" ")}</p>`;
    }

    generateSentences() {
        let structure = this.dictionary.structures[ Math.floor(Math.random() * this.dictionary.structures.length) ];
        let protagonist = {
            gender: '',
            number: ''
        };

        let sentenceArr = [];

        for(let x=0; x<structure.length; x++) {
            let type = structure[x];
            let firstChar = type.charAt(0);

            if(firstChar === '*') {
                if( Math.random() * 6 < 1 ) {
                    type = type.slice(1);
                } else {
                    continue;
                }
            } else if(firstChar === '?') {
                let obj = '';

                if( type.slice(1) === 'actions' ) {
                    obj = this.getSection( type.slice(1), protagonist);
                } else {
                    obj = this.getSection( type.slice(1) );
                }

                if( type.slice(1) === 'protagonists' ) {
                    protagonist = {
                        gender: obj.gender,
                        number: obj.number
                    };
                }
                sentenceArr.push( obj.text );
                continue;
            } 
            
            let category = this.dictionary[ type ];
            let literal = typeof category === "undefined";

            if(literal) {
                sentenceArr.push( type );
            } else {
                sentenceArr.push( this.getRandomWord( type ) );
            }
        }

        return this.capitalize( sentenceArr.join(' ') );
    }

    getSection( originalType, preset = {} ) {
        let typeObj = this.dictionary[originalType];
        let obj = '';

        if( typeObj.hasOwnProperty('options') ) {
            let type = this.getArrRandomValue( typeObj.options );

            if(typeof type === 'string') {
                obj = this.getPartial(type, preset);
            } else if(typeof type === 'object') {
                let partialsArr = [];

                for(let x=0; x<type.length; x++) {
                    partialsArr.push( this.getPartial(type[x], preset) );
                }

                obj = this.mergePartials(partialsArr, originalType, typeObj);
            }
        } else {
            obj = this.getPartial(originalType, preset);
        }

        return obj;
    }

    getPartial( type = 'persons', preset = {}) {
        if(typeof preset.gender === 'undefined')
            preset.gender = Math.random() >= 0.5 ? 'm' : 'f';

        let textArr = [];
        let typeObj = this.dictionary[type];
        let sub = Object.keys( typeObj[ preset.gender ] );
        let subPos = Math.floor( sub.length * Math.random() );

        if(typeof preset.number === 'undefined')
            preset.number = sub[subPos];

        let obj = typeObj[ preset.gender ][ preset.number ];

        for(let x=0; x<this.dictionary[type].structure.length; x++) {
            let category = this.dictionary[type].structure[x];

            if(obj[category]['required'] >= Math.random()) {
                textArr.push( this.getArrRandomValue( obj[category]['values'] ) );
            } else if(typeof obj[category]['default'] !== 'undefined') {
                textArr.push( obj[category]['default'] );
            }
        }

        console.log(textArr.join(' '));

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

    getArrRandomValue( arr ) {
        return arr[Math.floor( arr.length * Math.random() )];
    }

    getRandomWord( typeOfWord ) {
        let wordIndex = Math.floor( Math.random() * this.dictionary[ typeOfWord ].length );

        if(!typeof this.usedDictionnary[ typeOfWord ] !== 'undefined')
            this.usedDictionnary[ typeOfWord ] = []; 

        if( this.usedDictionnary[ typeOfWord ].indexOf( wordIndex ) === -1 ) { // if the word isn't in the array of used words.
            this.usedDictionnary[ typeOfWord ].push( wordIndex );

            if( this.usedDictionnary[ typeOfWord ].length > 4 )  // make sure the same word dosn't get repeated too quickly
                this.usedDictionnary[ typeOfWord ].shift();

            return this.dictionary[ typeOfWord ][ wordIndex ];
        } else 
            return this.getRandomWord( typeOfWord );
    }

    fixLigation( str ) {
        for(let x=0; x<this.replacements.length; x++) {
            str = str.replace(new RegExp(this.replacements[x][0], 'g'), this.replacements[x][1]);
        }

        return str;
    }

    capitalize( str ) {
        return str.charAt(0).toUpperCase() + str.slice(1);
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

    getResume( text ) {
        let resume = `${this.settings.nbr} ${this.settings.type}`;
        
        if(this.settings.type !== 'Words') {
            let wordsNbr = text.split(' ').length;
            resume += `, ${wordsNbr} mots`;
        }

        let charactersNbr = text.replace(/[^A-Z]/gi, '').length;
        resume += `, ${charactersNbr} caractères de <a href="sidleepsum.smnarnold.com">Sid Lee<em>psum</em></a> généré`;

        return resume;
    }
}

var sidleepsum = new LoremIpsum();
sidleepsum.init();
