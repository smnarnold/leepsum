/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/data */ "./src/json/data.json");
var _json_data__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/data */ "./src/json/data.json", 1);
/* harmony import */ var _json_ligatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/ligatures */ "./src/json/ligatures.json");
var _json_ligatures__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/ligatures */ "./src/json/ligatures.json", 1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var LoremIpsum =
/*#__PURE__*/
function () {
  function LoremIpsum() {
    _classCallCheck(this, LoremIpsum);

    this.dom = {
      form: document.querySelector('form'),
      nbr: document.querySelector('input[name="nbr"]'),
      type: document.querySelectorAll('input[name="type"]'),
      btn: document.querySelector('.js-generate'),
      content: document.querySelector('.js-content'),
      footer: document.querySelector('.js-footer')
    };
    this.settings = {
      url: 'http://sidlipsum.smnarnold.com',
      nbr: this.dom.nbr.value,
      type: 'Paragraphs'
    };
    this.wordsArr = _json_data__WEBPACK_IMPORTED_MODULE_0__.times.m.single.item.values.concat(_json_data__WEBPACK_IMPORTED_MODULE_0__.places.m.single.item.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.places.f.single.item.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.persons.m.single.item.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.persons.f.single.item.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.roles.m.single.item.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.roles.f.single.item.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.roles.m.single.specialisation.values, _json_data__WEBPACK_IMPORTED_MODULE_0__.roles.f.single.specialisation.values);
  }
  /**
   * Methods
   */


  _createClass(LoremIpsum, [{
    key: "init",
    value: function init() {
      this.bindEvents();
      this.setup();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.dom.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this.setup();
      });
      this.dom.nbr.addEventListener('change', function () {
        return _this.settings.nbr = _this.dom.nbr.value;
      });
      Array.prototype.forEach.call(this.dom.type, function (radio) {
        return radio.addEventListener('change', function () {
          return _this.settings.type = radio.value;
        });
      });
    }
  }, {
    key: "setup",
    value: function setup() {
      var content = '';
      this.usedDictionnary = [];

      for (var i = 0; i < this.settings.nbr; i++) {
        content += this.getLoremIpsum(this.settings.type);
      }

      content = this.fixLigatures(content);
      this.updateResume(content);
      this.dom.content.innerHTML = "<article class=\"article\">".concat(content, "</article>");
    }
  }, {
    key: "getLoremIpsum",
    value: function getLoremIpsum(type) {
      var content;

      switch (type) {
        case 'Sentences':
          content = this.generateSentences() + ' ';
          break;

        case 'Words':
          var item = this.getArrRandomValue(this.wordsArr);
          content = this.getArrRandomValue(item.split(' ')) + ' ';
          break;

        case 'Lists':
          content = this.generateLists();
          break;

        default:
          content = this.generateParagraphs();
      }

      return this.fixLigatures(content);
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs() {
      var sentencesNbr = this.randomFromInterval(2, 8);
      var paragraphArr = [];

      for (var x = 0; x < sentencesNbr; x++) {
        var hasTransition = Math.round(Math.random());
        var sentence = this.generateSentences();
        paragraphArr.push(sentence);
      }

      return "<p>".concat(paragraphArr.join(' '), "</p>");
    }
  }, {
    key: "generateSentences",
    value: function generateSentences() {
      var structure = _json_data__WEBPACK_IMPORTED_MODULE_0__.structures[Math.floor(Math.random() * _json_data__WEBPACK_IMPORTED_MODULE_0__.structures.length)];
      var protagonist = {
        gender: '',
        number: ''
      };
      var sentenceArr = [];

      for (var x = 0; x < structure.length; x++) {
        var type = structure[x];
        var firstChar = type.charAt(0);

        if (firstChar === '*') {
          if (Math.random() * 6 < 1) type = type.slice(1);else continue;
        } else if (firstChar === '?') {
          var obj = '';
          if (type.slice(1) === 'actions') obj = this.getSection(type.slice(1), protagonist);else obj = this.getSection(type.slice(1));

          if (type.slice(1) === 'protagonists') {
            protagonist = {
              gender: obj.gender,
              number: obj.number
            };
          }

          sentenceArr.push(obj.text);
          continue;
        }

        var category = _json_data__WEBPACK_IMPORTED_MODULE_0__[type];
        var literal = typeof category === 'undefined';
        if (literal) sentenceArr.push(type);else sentenceArr.push(this.getRandomWord(type));
      }

      return this.capitalize(sentenceArr.join(' '));
    }
  }, {
    key: "generateLists",
    value: function generateLists() {
      var sentence = this.generateSentences();
      return "<li>".concat(sentence, "</li>");
    }
  }, {
    key: "getSection",
    value: function getSection(originalType) {
      var preset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var typeObj = _json_data__WEBPACK_IMPORTED_MODULE_0__[originalType];
      var obj = '';

      if (typeObj.hasOwnProperty('options')) {
        var type = this.getArrRandomValue(typeObj.options);
        if (typeof type === 'string') obj = this.getPartial(type, preset);else if (_typeof(type) === 'object') {
          var partialsArr = [];

          for (var x = 0; x < type.length; x++) {
            partialsArr.push(this.getPartial(type[x], preset));
          }

          obj = this.mergePartials(partialsArr, originalType, typeObj);
        }
      } else obj = this.getPartial(originalType, preset);

      return obj;
    }
  }, {
    key: "getPartial",
    value: function getPartial() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'persons';
      var preset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (typeof preset.gender === 'undefined') preset.gender = Math.random() >= 0.5 ? 'm' : 'f';
      var textArr = [];
      var typeObj = _json_data__WEBPACK_IMPORTED_MODULE_0__[type];
      var sub = Object.keys(typeObj[preset.gender]);
      var subPos = Math.floor(sub.length * Math.random());
      if (typeof preset.number === 'undefined') preset.number = sub[subPos];
      var obj = typeObj[preset.gender][preset.number];

      for (var x = 0; x < _json_data__WEBPACK_IMPORTED_MODULE_0__[type].structure.length; x++) {
        var category = _json_data__WEBPACK_IMPORTED_MODULE_0__[type].structure[x];
        if (obj[category]['required'] >= Math.random()) textArr.push(this.getArrRandomNoRepeat(obj[category]['values']));else if (typeof obj[category]['default'] !== 'undefined') textArr.push(obj[category]['default']);
      }

      return {
        type: type,
        text: textArr.join(' '),
        gender: preset.gender,
        number: preset.number
      };
    }
  }, {
    key: "mergePartials",
    value: function mergePartials(arr, type, typeObj) {
      var obj = arr[0];

      for (var x = 1; x < arr.length; x++) {
        if (arr[x].gender !== obj.gender) obj.gender = 'm';
        obj.text += this.getArrRandomValue(typeObj.sep) + arr[x].text;
      }

      obj.type = type;
      obj.number = 'plural';
      return obj;
    }
  }, {
    key: "randomFromInterval",
    value: function randomFromInterval() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }, {
    key: "getArrRandomValue",
    value: function getArrRandomValue(arr) {
      return arr[Math.floor(arr.length * Math.random())];
    }
  }, {
    key: "getArrRandomNoRepeat",
    value: function getArrRandomNoRepeat(arr) {
      var word = arr[Math.floor(arr.length * Math.random())];

      if (this.usedDictionnary.indexOf(word) === -1) {
        if (word.length > 3) this.usedDictionnary.push(word);
        return arr[Math.floor(arr.length * Math.random())];
      } else return this.getArrRandomValue(arr);
    }
  }, {
    key: "getRandomWord",
    value: function getRandomWord(typeOfWord) {
      var wordIndex = Math.floor(Math.random() * _json_data__WEBPACK_IMPORTED_MODULE_0__[typeOfWord].length);
      if (!_typeof(this.usedDictionnary[typeOfWord]) !== 'undefined') this.usedDictionnary[typeOfWord] = [];

      if (this.usedDictionnary[typeOfWord].indexOf(wordIndex) === -1) {
        // if the word isn't in the array of used words.
        this.usedDictionnary[typeOfWord].push(wordIndex);
        if (this.usedDictionnary[typeOfWord].length > 4) // make sure the same word dosn't get repeated too quickly
          this.usedDictionnary[typeOfWord].shift();
        return _json_data__WEBPACK_IMPORTED_MODULE_0__[typeOfWord][wordIndex];
      } else return this.getRandomWord(typeOfWord);
    }
  }, {
    key: "fixLigatures",
    value: function fixLigatures(str) {
      for (var x = 0; x < _json_ligatures__WEBPACK_IMPORTED_MODULE_1__.length; x++) {
        str = str.replace(new RegExp(_json_ligatures__WEBPACK_IMPORTED_MODULE_1__[x][0], 'g'), _json_ligatures__WEBPACK_IMPORTED_MODULE_1__[x][1]);
      }

      return str;
    }
  }, {
    key: "capitalize",
    value: function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }, {
    key: "updateResume",
    value: function updateResume(text) {
      var translations = {
        Paragraphs: "".concat(this.settings.nbr, " paragraphes"),
        Sentences: "".concat(this.settings.nbr, " phrases"),
        Words: "".concat(this.settings.nbr, " mots"),
        Lists: "Une liste \xE0 ".concat(this.settings.nbr, " points")
      };
      var resume = translations[this.settings.type];

      if (this.settings.type !== 'Words') {
        var wordsNbr = text.split(' ').length;
        resume += ", ".concat(wordsNbr, " mots");
      }

      var charactersNbr = text.replace(/[^A-Z]/gi, '').length;
      resume += ", ".concat(charactersNbr, " caract\xE8res de <a href=\"").concat(this.settings.url, "\">Lee<em>psum</em></a> g\xE9n\xE9r\xE9");
      this.dom.footer.innerHTML = "<p><strong>".concat(resume, "</strong></p>");
    }
  }]);

  return LoremIpsum;
}();

var leepsum = new LoremIpsum();
leepsum.init();

/***/ }),

/***/ "./src/json/data.json":
/*!****************************!*\
  !*** ./src/json/data.json ***!
  \****************************/
/*! exports provided: structures, transitions, enders, contexts, times, places, actions, protagonists, persons, roles, subjects, default */
/***/ (function(module) {

module.exports = {"structures":[["*transitions","?contexts",",","?protagonists","?actions","?subjects","*enders","."],["*transitions","?protagonists","?contexts","?actions","?subjects","*enders","."]],"transitions":["malheureusement, ou heureusement,","heureusement,","malheureusement,","et malgré nos succès,","cependant,","néanmoins,","tandis que","pour sa part,","toutefois,","pour la première fois de l’histoire,","mais aussi","sur cette note,","pendant ce temps"],"enders":["<a href='https://twitter.com/search?q=%23CommeUnRêve'>#CommeUnRêve</a>","Yeah, Yeah","<a href='https://twitter.com/search?q=%23ProudlyWastingTimeAndMoney'>#ProudlyWastingTimeAndMoney</a>","<a href='https://twitter.com/search?q=%23BeBold'><strong>#BeBold</strong></a>","<a href='https://twitter.com/search?q=%23DIYorDIE'>#DIYorDIE</a>"],"contexts":{"options":["places","times",["places","times"],["times","places"]],"sep":" "},"times":{"structure":["item"],"m":{"single":{"item":{"required":1,"values":["vendredi 5h","lundi matin","lors de la collation de 3h","au Sid Lee day","pendant le déjeuner","l’autre jour","pendant un summer friday","pendant un midi formation","à la fin des années 90","pendant trois jours","aujourd’hui","quelques années plus tard","au début des années 2000"]}}},"f":{"single":{"item":{"required":1,"values":["vendredi 5h","lundi matin","lors de la collation de 3h","un lendemain de veille","pendant le déjeuner","l’autre jour","pendant un summer friday","à la fin des années 90","pendant trois jours","aujourd’hui","quelques années plus tard","au début des années 2000"]}}}},"places":{"structure":["item"],"m":{"single":{"item":{"required":1,"values":["au bistro","au bistro du 2<sup>e</sup>","au studio","dans le couloir devant l'exposition","au Sitecore Symposium","à SXSW","au 8 Queen","au <em>caca</em>trième","au Naked Lunch","au festival de Cannes","à Vegas","au Pasta Pas l’choix","aux sèches","au scrum","au Pub Vic","en Asie","aux Soeurs grises","à Sid Lee Land","à Montréal","à Jouvance","sur les médias sociaux","sur Sid Lee Collective","au offsite","aux Boomerangs","sur les médias sociaux","aux Morons awards","aux Rockons awards","au party d’été","au daylee","au party de Noël","dans un meeting","au <em>kick off</em>","sur Exactlee","sur Slack","sur Freshlee","en prod","en QA"]}}},"f":{"single":{"item":{"required":1,"values":["à la réception","dans la Jetsons","dans la salle de méditation","dans la salle verte","dans la Hitchcock","dans la salle Kubrick","dans la Netscape","dans la French laundry","dans la salle Virgina Woolf","dans la salle Maurice Richard","dans la <em>\"douche\"</em>","dans la salle verte","sur l'autoroute de l'information","sur les intertubes","sur les <em>\"zinternets\"</em>","sur feu QuickLee"]}}}},"actions":{"structure":["item"],"m":{"single":{"item":{"required":1,"values":["a fait","a recherché","a vraiment rocké","a échafaudé","a offert","travaillé en étroite collaboration avec","a participé activement a","a jeté un coup d’œil à","challengé","s'est fait challenger par","a fait tout ce qu’il fallait pour rendre","n'a pas peur de","a mené à terme","a imaginé","a conçu","a acquis","est sorti","a effacé","a révolutionné","a repoussé les limites de","a gagné","a révolutionné l’histoire du","a refusé","a engagé","a propulsé","a métamorphosé","y voyait","a senti","a commencé à devenir","a fait rayonner","a créé","est allez rencontrer","a rencontré","est revenu de","a optimisé","s’est fait remarquer par","a <em>“pitché”</em>","a changé","a bâtit ","a rejoint"]}},"plural":{"item":{"required":1,"values":["ont fait","ont recherchés","ont échafaudés","ont offert","ont échangés","ont jammés","ont jetés un coup d’œil à","ont fait tout ce qu’il fallait pour rendre","n'ont pas peur de","ont menés à terme","ont imaginés","ont conçus","ont acquis","sont sortis","ont effacés","ont révolutionnés","ont repoussés les limites de","ont gagnés","ont révolutionnés l’histoire du","ont refusés","ont engagés","ont propulsés","ont métamorphosés","y voyaient","ont sentis","ont commencés à devenir","ont fait rayonner","ont créés","sont allez rencontrer","ont rencontrés","sont revenus de","ont optimisés","se sont fait remarquer par","ont <em>“pitchés”</em>","ont changés","ont bâtit ","ont rejoint"]}}},"f":{"single":{"item":{"required":1,"values":["a fait","a recherchée","a offerte","a échafaudée","a jetée un coup d’œil à","a fait tout ce qu’il fallait pour rendre","n'a pas peur de","a menée à terme","a imaginée","a conçue","a acquis","est sortie","a effacée","a révolutionnée","a repoussée les limites de","a gagnée","a révolutionnée l’histoire du","a refusée","a engagée","a propulsée","a métamorphosée","y voyait","a sentie","a commencée à devenir","a fait rayonner","a créé","est allez rencontrer","a rencontrée","est revenue de","a optimisée","s’est fait remarquer par","a <em>“pitchée”</em>","a changée","a bâtit ","a rejoint"]}},"plural":{"item":{"required":1,"values":["ont fait","ont recherchées","ont offertes","ont échangées","ont échafaudées","ont jetée un coup d’œil à","ont fait tout ce qu’il fallait pour rendre","n'ont pas peur de","ont menées à terme","ont imaginées","ont conçues","ont acquis","ont sorties","ont effacées","omt révolutionnées","ont repoussées les limites de","ont gagnées","ont révolutionnées l’histoire du","ont refusées","ont engagées","ont propulsées","ont métamorphosées","y voyaient","ont sentient","ont commencées à devenir","ont fait rayonner","ont créés","sont allez rencontrer","ont rencontrées","sont revenues de","ont optimisées","se sont fait remarquer par","ont <em>“pitchées”</em>","ont changées","ont bâtit ","ont rejoint"]}}}},"protagonists":{"options":["persons","persons","roles","roles",["persons","persons"],["roles","persons"]],"sep":[" et "," & "," assisté de "," avec l'aide de "]},"persons":{"structure":["prefix","item"],"m":{"single":{"prefix":{"required":0.25,"values":["l'excellent","le grand","l'incontournable","l'incomparable","le remarquable","l'unique","l'inégalable"]},"item":{"required":1,"values":["Alex Pilon","Anthony Greene","Antoine Levasseur","Antoine Proulx","Arthur Loiselle","Bertrand Cesvet","Bo Tellier","Charles St-Onge","Christian Quenneville","Christopher Jones","Daniel Fortier","Daniel \"D2\" Petitclerc","David Huynh","David Leclerc","Eloi Arsenault","Eric Briand","Etienne Payette Lebeau","Felix Arsenault","Florian Pichonneau","Francis Rodrigue Ardouin","Francois Forget","Francois Lacoursiere","Frederick Williams","Guillaume Cardell","Guillaume Proteau-Langlois","Guillaume Raymond","Hugo Voisine","Jean Bart","Jean-Francois Bouchard","Jean-Philippe Gomez-Sanchez","Jean-Francois Lefebvre","Jean-Michel Leroux","Jonathan Brule","Jonathan Pinard","Kristian Manchester","Louis Jutras","Marc Lalande","Marc-Antoine Leclerc","Marc Lessard","Marc-Andre Monette","Martin Thienpont","Mathieu Bouillon","Max-Andre Hubert","Maxime Daoust","Nicolas Huguet-Latour","Nicolas Trudel","Patrick Mayer Freedom","Philippe Meunier","Pier-Luc Beaulieu","Pierre Lambert","René Charles Arseneau","Richard Jean-Baptiste","Samuel Potvin","Simon Arnold","Simon Chenier-Gauvreau","Tommy Vincent-Mathieu","Vincent Hamel","Vincent Paradis","Vincent Ramsay","Yanick Bedard","Yannick Chauvette","Yannick Meunier","Techno-Phil"]}}},"f":{"single":{"prefix":{"required":0.25,"values":["l'excellente","la grande","la magnifique","l'incontournable","l'incomparable","la remarquable","l'unique","l'inégalable","la splendide"]},"item":{"required":1,"values":["Alice Ware","Anne-Marie Champoux","Annie Desrochers","Annie Dufresne","Ariane Audet-Menard","Cara Schwartz","Caroline Duplantis","Caroline Royer","Carolyne Leduc","Chloe Brossard","Cloe Letourneau","Cybel Lussier","Cynthia \"Mom\" Baillargeon","Eliane Rondou","Emilie Joannisse","Emilie Thibault","Fanny Eliaers","Isabelle Migneault","Jessica Bolduc","Julie Provencal","Karen Gaudreau","Louise Fournier","Madelaine Paquette","Marie-Eve Arsenault","Marie-Christine Chamberland","Marie-Claude Lafleur","Marie-Eve Levesque","Marie-Yolaine Napoleon","Melissa Gilbert","Mylene St-Pierre","Nadine Boustany","Sarah Lussier","Sarah Maude Raymond","Stephanie Villani","Thanh Pham","Thithu Vu","Vanessa Daly-Vallee","Vanessa Gauvin-Brodeur","Vanessa Leclerc"]}}}},"roles":{"structure":["determining","prefix","item","specialisation","suffix"],"m":{"single":{"determining":{"required":1,"values":["un"]},"prefix":{"required":0.25,"values":["guru","prophète","ambassadeur","ninja","évangeliste","lead","newbie","motion","créatif"]},"item":{"required":1,"values":["directeur","producteur","réalisateur","chargé de projets","intervenant","influenceur","technologue","rédacteur","analyste","stratège","gestionnaire","monteur","designer","developpeur","journaliste","concepteur-rédacteur","coordonateur","artisan","infographiste","vidéaste","scrum master","candidat"]},"specialisation":{"required":0.4,"values":["artistique","conseil","technique","UI","UX","offline","de communauté","de vidéos","de la production","full-stack","front-end","back-end","au contenu","système","de stratégie","de produit","des relations publiques"]},"suffix":{"required":0.35,"values":["agent de changement","comptant quelques années d’expérience","avec plusieurs années d’expérience","frais sortis de l’école","sénior","junior","<em>\"kickass\"</em>","trop geek","multidisciplinaire","difficile à étiqueter","moderne","leader dans son domaine","marquant","de l'époque","novateur","avant-gardistes","qui fit avec nous","audacieux","persévérants","curieux","hors pair","attentionné","polyvalant"]}}},"f":{"single":{"determining":{"required":1,"values":["une"]},"prefix":{"required":0.25,"values":["vraie licorne de","guru","prophète","ambassadrice","ninja","évangeliste","newbie"]},"item":{"required":1,"values":["directrice","productrice","réalisatrice","chargée de projets"]},"specialisation":{"required":0.4,"values":["artistique","conseil","technique","UI","de communauté","de vidéos","full-stack"]},"suffix":{"required":0.35,"values":["agente de changement","sénior","junior","frais sortis de l’école","aguérie","trop geek","marquante"]}}}},"subjects":{"structure":["prefix","item","suffix"],"m":{"single":{"prefix":{"required":0.25,"default":"le","values":["ce genre de","le deuxième","le seul","notre","notre premier","son","un grand","un nouveau"]},"item":{"required":1,"values":["Cirque du Soleil","Dropbox","Jira","MVP","Sid Lee","Sid Lee University","atelier","avantage","branding","bureau","carton","changement","client","collectif","compte Adidas","compte Vidéotron","compte Banque Nationale","compétiteur","consommateur","contenu","contrat","cours des choses","design","domaine","défis","engagement","folklore","guide","incubateur","joyeux chaos","mandat","marché","marketing","meeting","menu","monde","monde de possibilités","point de contact","positionnement","produit","retour","réseau","sentiers battus","site mobile","statu quo","virage","volet","voyage","échec","éventail de services","événement","secteur"]},"suffix":{"required":0.5,"values":["américain","au monde","canadien","commandité","d'aujourd’hui","de Sid Lee","de cœur","de détail","de l’artisan","international","glorieux","moderne","numérique","pertinent","plus fort","plus vaste","possible","professionnel","profond","quotidien","usager","végétarien","de 6 mois 400 0000$"]}},"plural":{"prefix":{"required":0.25,"default":"les","values":["les seuls","nos","nos premiers","ses","de grands","des nouveaux"]},"item":{"required":1,"values":["ateliers","avantages","bureaux","changements","clients","collectifs","compétiteurs","consommateurs","contenus","designs","domaines","défis","engagements","mandats","marchés","meetings","menus","mondes","plans","points de contact","réseaux","réussites","sentiers battus","sites mobiles","virages","voyages","échecs","événements","secteurs"]},"suffix":{"required":0.5,"values":["américains","au monde","canadiens","commandités","d'aujourd’hui","de Sid Lee","de détail","de l’artisan","délirants","internationaux","modernes","numériques","pertinents","plus fort","plus vaste","possibles","professionnels","profonds","quotidien","usager","végétariens"]}}},"f":{"single":{"prefix":{"required":0.25,"default":"la","values":["la seule","notre première","sa","une nouvelle","une zesty de"]},"item":{"required":1,"values":["agence","analyse","approche","aptitude","architecture","aventure","bulle","campagne publicitaire","capsule vidéo","chose","collation","collaboration","compagnie","croissance","culture","donne","entreprise","expérience","feuille de temps","force","histoire","idée","image","industrie","innovation","interactivité","machine à café","maquette","modernisation","méthodologie","oeuvre","opportunité","plateforme","photo","porte","publicité","reflexion","réputation","scène","solution","transparence","vidéo","vision","évaluation","start-up","zone de confort"]},"suffix":{"required":0.5,"values":["360 degrés","agile","américaine","avant-gardiste","canadienne","complète","créative","de marque","d’amitié","d’entrée","extrême","folle","hors pair","intégrée","internationale","internet","progressiste","simple","stratégique","sur investissement","valorisante","à l’échelle mondiale"]}},"plural":{"prefix":{"required":0.25,"default":"les","values":["les seules","nos premières","ses","ses nouvelles","des zesty de"]},"item":{"required":1,"values":["agences","analyses","approches","aptitudes","architectures","aventures","bulles","campagnes publicitaire","choses","collations","compagnies","croissances","cultures","entreprises","expériences","feuilles de temps","forces","histoires","idées","images","industries","innovations","interactivités","machines à café","maquettes","modernisations","méthodologies","oeuvres","opportunités","plateformes","photos","portes","problématiques","publicités","reflexions","réputations","solutions","vidéos","visions","évaluations","start-up"]},"suffix":{"required":0.5,"values":["360","agiles","américaines","avant-gardistes","canadiennes","complètes","créatives","de marques","d’amitié","d’entrée","extrêmes","folles","hors pairs","innovantes","insoupçonnées","internationales","internet","progressistes","simples","stratégiques","valorisantes","à l’échelle mondiale"]}}}}};

/***/ }),

/***/ "./src/json/ligatures.json":
/*!*********************************!*\
  !*** ./src/json/ligatures.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, default */
/***/ (function(module) {

module.exports = [[" ,",","],[" \\.","."],[" à les "," aux "],[" à le "," au "],[" le a"," l'a"],[" le e"," l'e"],[" le é"," l'é"],[" le h"," l'h"],[" le i"," l'i"],[" le o"," l'o"],[" le u"," l'u"],[" le y"," l'y"],[" la a"," l'a"],[" la e"," l'e"],[" la é"," l'é"],[" la h"," l'h"],[" la i"," l'i"],[" la o"," l'o"],[" la u"," l'u"],[" la y"," l'y"],[" du un"," d'un"],[" du une "," d'une "],[" du la"," de la"],[" du l'"," de l'"],[" du le "," du "],[" du les "," des "],[" du du "," du "],[" du des "," des "],[" du sa "," de sa "],[" de a"," d'a"],[" de A"," d'A"],[" de é"," d'é"],[" de É"," d'É"],[" de h"," d'h"],[" de H"," d'H"],[" de i"," d'i"],[" de I"," d'I"],[" de o"," d'o"],[" de O"," d'O"],[" de u"," d'u"],[" de U"," d'U"],[" de y"," d'y"],[" de Y"," d'Y"],[" de le "," du "],[" de les "," des "],[" de des "," des "],[" de du "," du "],[" de sa a"," de son a"],[" du un"," d'un"],[" que au"," qu'au"],[" que un"," qu'un"],[" que une"," qu'une"],[" que aux"," qu'aux"],[" sa e"," son e"],[" sa é"," son é"],[" sa h"," son h"],[" sa i"," son i"],[" sa o"," son o"],[" sa u"," son u"],[" sa y"," son y"],[" que à"," qu'à"],[" par du "," par un "]];

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwiZG9tIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5iciIsInR5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuIiwiY29udGVudCIsImZvb3RlciIsInNldHRpbmdzIiwidXJsIiwidmFsdWUiLCJ3b3Jkc0FyciIsImRhdGEiLCJ0aW1lcyIsIm0iLCJzaW5nbGUiLCJpdGVtIiwidmFsdWVzIiwiY29uY2F0IiwicGxhY2VzIiwiZiIsInBlcnNvbnMiLCJyb2xlcyIsInNwZWNpYWxpc2F0aW9uIiwiYmluZEV2ZW50cyIsInNldHVwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJyYWRpbyIsInVzZWREaWN0aW9ubmFyeSIsImkiLCJnZXRMb3JlbUlwc3VtIiwiZml4TGlnYXR1cmVzIiwidXBkYXRlUmVzdW1lIiwiaW5uZXJIVE1MIiwiZ2VuZXJhdGVTZW50ZW5jZXMiLCJnZXRBcnJSYW5kb21WYWx1ZSIsInNwbGl0IiwiZ2VuZXJhdGVMaXN0cyIsImdlbmVyYXRlUGFyYWdyYXBocyIsInNlbnRlbmNlc05iciIsInJhbmRvbUZyb21JbnRlcnZhbCIsInBhcmFncmFwaEFyciIsIngiLCJoYXNUcmFuc2l0aW9uIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwic2VudGVuY2UiLCJwdXNoIiwiam9pbiIsInN0cnVjdHVyZSIsInN0cnVjdHVyZXMiLCJmbG9vciIsImxlbmd0aCIsInByb3RhZ29uaXN0IiwiZ2VuZGVyIiwibnVtYmVyIiwic2VudGVuY2VBcnIiLCJmaXJzdENoYXIiLCJjaGFyQXQiLCJzbGljZSIsIm9iaiIsImdldFNlY3Rpb24iLCJ0ZXh0IiwiY2F0ZWdvcnkiLCJsaXRlcmFsIiwiZ2V0UmFuZG9tV29yZCIsImNhcGl0YWxpemUiLCJvcmlnaW5hbFR5cGUiLCJwcmVzZXQiLCJ0eXBlT2JqIiwiaGFzT3duUHJvcGVydHkiLCJvcHRpb25zIiwiZ2V0UGFydGlhbCIsInBhcnRpYWxzQXJyIiwibWVyZ2VQYXJ0aWFscyIsInRleHRBcnIiLCJzdWIiLCJPYmplY3QiLCJrZXlzIiwic3ViUG9zIiwiZ2V0QXJyUmFuZG9tTm9SZXBlYXQiLCJhcnIiLCJzZXAiLCJtaW4iLCJtYXgiLCJ3b3JkIiwiaW5kZXhPZiIsInR5cGVPZldvcmQiLCJ3b3JkSW5kZXgiLCJzaGlmdCIsInN0ciIsImxpZ2F0dXJlcyIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0b1VwcGVyQ2FzZSIsInRyYW5zbGF0aW9ucyIsIlBhcmFncmFwaHMiLCJTZW50ZW5jZXMiLCJXb3JkcyIsIkxpc3RzIiwicmVzdW1lIiwid29yZHNOYnIiLCJjaGFyYWN0ZXJzTmJyIiwibGVlcHN1bSIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJI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S0FBSzlGLFFBQUwsQ0FBY0wsSUFBZixDQUF6Qjs7QUFFQSxVQUFJLEtBQUtLLFFBQUwsQ0FBY0wsSUFBZCxLQUF1QixPQUEzQixFQUFvQztBQUNsQyxZQUFJeUcsUUFBUSxHQUFHdkMsSUFBSSxDQUFDM0IsS0FBTCxDQUFXLEdBQVgsRUFBZ0JpQixNQUEvQjtBQUNBZ0QsY0FBTSxnQkFBU0MsUUFBVCxVQUFOO0FBQ0Q7O0FBRUQsVUFBSUMsYUFBYSxHQUFHeEMsSUFBSSxDQUFDOEIsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekIsRUFBNkJ4QyxNQUFqRDtBQUNBZ0QsWUFBTSxnQkFBU0UsYUFBVCx5Q0FBaUQsS0FBS3JHLFFBQUwsQ0FBY0MsR0FBL0QsNENBQU47QUFFQSxXQUFLWCxHQUFMLENBQVNTLE1BQVQsQ0FBZ0JnQyxTQUFoQix3QkFBMENvRSxNQUExQztBQUNEOzs7Ozs7QUFHSCxJQUFJRyxPQUFPLEdBQUcsSUFBSWpILFVBQUosRUFBZDtBQUNBaUgsT0FBTyxDQUFDQyxJQUFSLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vanNvbi9kYXRhJztcclxuaW1wb3J0IGxpZ2F0dXJlcyBmcm9tICcuLi9qc29uL2xpZ2F0dXJlcyc7XHJcblxyXG5jbGFzcyBMb3JlbUlwc3VtIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZG9tID0ge1xyXG4gICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyksXHJcbiAgICAgIG5icjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5iclwiXScpLFxyXG4gICAgICB0eXBlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidHlwZVwiXScpLFxyXG4gICAgICBidG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1nZW5lcmF0ZScpLFxyXG4gICAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY29udGVudCcpLFxyXG4gICAgICBmb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb290ZXInKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgdXJsOiAnaHR0cDovL3NpZGxpcHN1bS5zbW5hcm5vbGQuY29tJyxcclxuICAgICAgbmJyOiB0aGlzLmRvbS5uYnIudmFsdWUsXHJcbiAgICAgIHR5cGU6ICdQYXJhZ3JhcGhzJyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy53b3Jkc0FyciA9IGRhdGEudGltZXMubS5zaW5nbGUuaXRlbS52YWx1ZXMuY29uY2F0KFxyXG4gICAgICBkYXRhLnBsYWNlcy5tLnNpbmdsZS5pdGVtLnZhbHVlcyxcclxuICAgICAgZGF0YS5wbGFjZXMuZi5zaW5nbGUuaXRlbS52YWx1ZXMsXHJcbiAgICAgIGRhdGEucGVyc29ucy5tLnNpbmdsZS5pdGVtLnZhbHVlcyxcclxuICAgICAgZGF0YS5wZXJzb25zLmYuc2luZ2xlLml0ZW0udmFsdWVzLFxyXG4gICAgICBkYXRhLnJvbGVzLm0uc2luZ2xlLml0ZW0udmFsdWVzLFxyXG4gICAgICBkYXRhLnJvbGVzLmYuc2luZ2xlLml0ZW0udmFsdWVzLFxyXG4gICAgICBkYXRhLnJvbGVzLm0uc2luZ2xlLnNwZWNpYWxpc2F0aW9uLnZhbHVlcyxcclxuICAgICAgZGF0YS5yb2xlcy5mLnNpbmdsZS5zcGVjaWFsaXNhdGlvbi52YWx1ZXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2RzXHJcbiAgICovXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgdGhpcy5zZXR1cCgpO1xyXG4gIH1cclxuXHJcbiAgYmluZEV2ZW50cygpIHtcclxuICAgIHRoaXMuZG9tLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZG9tLm5ici5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiAodGhpcy5zZXR0aW5ncy5uYnIgPSB0aGlzLmRvbS5uYnIudmFsdWUpKTtcclxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5kb20udHlwZSwgKHJhZGlvKSA9PlxyXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiAodGhpcy5zZXR0aW5ncy50eXBlID0gcmFkaW8udmFsdWUpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldHVwKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSAnJztcclxuICAgIHRoaXMudXNlZERpY3Rpb25uYXJ5ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHRpbmdzLm5icjsgaSsrKSB7XHJcbiAgICAgIGNvbnRlbnQgKz0gdGhpcy5nZXRMb3JlbUlwc3VtKHRoaXMuc2V0dGluZ3MudHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudCA9IHRoaXMuZml4TGlnYXR1cmVzKGNvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlUmVzdW1lKGNvbnRlbnQpO1xyXG4gICAgdGhpcy5kb20uY29udGVudC5pbm5lckhUTUwgPSBgPGFydGljbGUgY2xhc3M9XCJhcnRpY2xlXCI+JHtjb250ZW50fTwvYXJ0aWNsZT5gO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9yZW1JcHN1bSh0eXBlKSB7XHJcbiAgICBsZXQgY29udGVudDtcclxuXHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnU2VudGVuY2VzJzpcclxuICAgICAgICBjb250ZW50ID0gdGhpcy5nZW5lcmF0ZVNlbnRlbmNlcygpICsgJyAnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdXb3Jkcyc6XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEFyclJhbmRvbVZhbHVlKHRoaXMud29yZHNBcnIpO1xyXG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldEFyclJhbmRvbVZhbHVlKGl0ZW0uc3BsaXQoJyAnKSkgKyAnICc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICBjb250ZW50ID0gdGhpcy5nZW5lcmF0ZUxpc3RzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgY29udGVudCA9IHRoaXMuZ2VuZXJhdGVQYXJhZ3JhcGhzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZml4TGlnYXR1cmVzKGNvbnRlbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVQYXJhZ3JhcGhzKCkge1xyXG4gICAgbGV0IHNlbnRlbmNlc05iciA9IHRoaXMucmFuZG9tRnJvbUludGVydmFsKDIsIDgpO1xyXG4gICAgbGV0IHBhcmFncmFwaEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VudGVuY2VzTmJyOyB4KyspIHtcclxuICAgICAgbGV0IGhhc1RyYW5zaXRpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICBsZXQgc2VudGVuY2UgPSB0aGlzLmdlbmVyYXRlU2VudGVuY2VzKCk7XHJcbiAgICAgIHBhcmFncmFwaEFyci5wdXNoKHNlbnRlbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYDxwPiR7cGFyYWdyYXBoQXJyLmpvaW4oJyAnKX08L3A+YDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlU2VudGVuY2VzKCkge1xyXG4gICAgbGV0IHN0cnVjdHVyZSA9IGRhdGEuc3RydWN0dXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhLnN0cnVjdHVyZXMubGVuZ3RoKV07XHJcbiAgICBsZXQgcHJvdGFnb25pc3QgPSB7XHJcbiAgICAgIGdlbmRlcjogJycsXHJcbiAgICAgIG51bWJlcjogJycsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZW50ZW5jZUFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3RydWN0dXJlLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIGxldCB0eXBlID0gc3RydWN0dXJlW3hdO1xyXG4gICAgICBsZXQgZmlyc3RDaGFyID0gdHlwZS5jaGFyQXQoMCk7XHJcblxyXG4gICAgICBpZiAoZmlyc3RDaGFyID09PSAnKicpIHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSAqIDYgPCAxKSB0eXBlID0gdHlwZS5zbGljZSgxKTtcclxuICAgICAgICBlbHNlIGNvbnRpbnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpcnN0Q2hhciA9PT0gJz8nKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9ICcnO1xyXG5cclxuICAgICAgICBpZiAodHlwZS5zbGljZSgxKSA9PT0gJ2FjdGlvbnMnKSBvYmogPSB0aGlzLmdldFNlY3Rpb24odHlwZS5zbGljZSgxKSwgcHJvdGFnb25pc3QpO1xyXG4gICAgICAgIGVsc2Ugb2JqID0gdGhpcy5nZXRTZWN0aW9uKHR5cGUuc2xpY2UoMSkpO1xyXG5cclxuICAgICAgICBpZiAodHlwZS5zbGljZSgxKSA9PT0gJ3Byb3RhZ29uaXN0cycpIHtcclxuICAgICAgICAgIHByb3RhZ29uaXN0ID0ge1xyXG4gICAgICAgICAgICBnZW5kZXI6IG9iai5nZW5kZXIsXHJcbiAgICAgICAgICAgIG51bWJlcjogb2JqLm51bWJlcixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbnRlbmNlQXJyLnB1c2gob2JqLnRleHQpO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY2F0ZWdvcnkgPSBkYXRhW3R5cGVdO1xyXG4gICAgICBsZXQgbGl0ZXJhbCA9IHR5cGVvZiBjYXRlZ29yeSA9PT0gJ3VuZGVmaW5lZCc7XHJcblxyXG4gICAgICBpZiAobGl0ZXJhbCkgc2VudGVuY2VBcnIucHVzaCh0eXBlKTtcclxuICAgICAgZWxzZSBzZW50ZW5jZUFyci5wdXNoKHRoaXMuZ2V0UmFuZG9tV29yZCh0eXBlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2FwaXRhbGl6ZShzZW50ZW5jZUFyci5qb2luKCcgJykpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVMaXN0cygpIHtcclxuICAgIGxldCBzZW50ZW5jZSA9IHRoaXMuZ2VuZXJhdGVTZW50ZW5jZXMoKTtcclxuICAgIHJldHVybiBgPGxpPiR7c2VudGVuY2V9PC9saT5gO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VjdGlvbihvcmlnaW5hbFR5cGUsIHByZXNldCA9IHt9KSB7XHJcbiAgICBsZXQgdHlwZU9iaiA9IGRhdGFbb3JpZ2luYWxUeXBlXTtcclxuICAgIGxldCBvYmogPSAnJztcclxuXHJcbiAgICBpZiAodHlwZU9iai5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpKSB7XHJcbiAgICAgIGxldCB0eXBlID0gdGhpcy5nZXRBcnJSYW5kb21WYWx1ZSh0eXBlT2JqLm9wdGlvbnMpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykgb2JqID0gdGhpcy5nZXRQYXJ0aWFsKHR5cGUsIHByZXNldCk7XHJcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGxldCBwYXJ0aWFsc0FyciA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHR5cGUubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgIHBhcnRpYWxzQXJyLnB1c2godGhpcy5nZXRQYXJ0aWFsKHR5cGVbeF0sIHByZXNldCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2JqID0gdGhpcy5tZXJnZVBhcnRpYWxzKHBhcnRpYWxzQXJyLCBvcmlnaW5hbFR5cGUsIHR5cGVPYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Ugb2JqID0gdGhpcy5nZXRQYXJ0aWFsKG9yaWdpbmFsVHlwZSwgcHJlc2V0KTtcclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFydGlhbCh0eXBlID0gJ3BlcnNvbnMnLCBwcmVzZXQgPSB7fSkge1xyXG4gICAgaWYgKHR5cGVvZiBwcmVzZXQuZ2VuZGVyID09PSAndW5kZWZpbmVkJykgcHJlc2V0LmdlbmRlciA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gJ20nIDogJ2YnO1xyXG5cclxuICAgIGxldCB0ZXh0QXJyID0gW107XHJcbiAgICBsZXQgdHlwZU9iaiA9IGRhdGFbdHlwZV07XHJcbiAgICBsZXQgc3ViID0gT2JqZWN0LmtleXModHlwZU9ialtwcmVzZXQuZ2VuZGVyXSk7XHJcbiAgICBsZXQgc3ViUG9zID0gTWF0aC5mbG9vcihzdWIubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBwcmVzZXQubnVtYmVyID09PSAndW5kZWZpbmVkJykgcHJlc2V0Lm51bWJlciA9IHN1YltzdWJQb3NdO1xyXG5cclxuICAgIGxldCBvYmogPSB0eXBlT2JqW3ByZXNldC5nZW5kZXJdW3ByZXNldC5udW1iZXJdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGF0YVt0eXBlXS5zdHJ1Y3R1cmUubGVuZ3RoOyB4KyspIHtcclxuICAgICAgbGV0IGNhdGVnb3J5ID0gZGF0YVt0eXBlXS5zdHJ1Y3R1cmVbeF07XHJcblxyXG4gICAgICBpZiAob2JqW2NhdGVnb3J5XVsncmVxdWlyZWQnXSA+PSBNYXRoLnJhbmRvbSgpKSB0ZXh0QXJyLnB1c2godGhpcy5nZXRBcnJSYW5kb21Ob1JlcGVhdChvYmpbY2F0ZWdvcnldWyd2YWx1ZXMnXSkpO1xyXG4gICAgICBlbHNlIGlmICh0eXBlb2Ygb2JqW2NhdGVnb3J5XVsnZGVmYXVsdCddICE9PSAndW5kZWZpbmVkJykgdGV4dEFyci5wdXNoKG9ialtjYXRlZ29yeV1bJ2RlZmF1bHQnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgdGV4dDogdGV4dEFyci5qb2luKCcgJyksXHJcbiAgICAgIGdlbmRlcjogcHJlc2V0LmdlbmRlcixcclxuICAgICAgbnVtYmVyOiBwcmVzZXQubnVtYmVyLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG1lcmdlUGFydGlhbHMoYXJyLCB0eXBlLCB0eXBlT2JqKSB7XHJcbiAgICBsZXQgb2JqID0gYXJyWzBdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAxOyB4IDwgYXJyLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIGlmIChhcnJbeF0uZ2VuZGVyICE9PSBvYmouZ2VuZGVyKSBvYmouZ2VuZGVyID0gJ20nO1xyXG5cclxuICAgICAgb2JqLnRleHQgKz0gdGhpcy5nZXRBcnJSYW5kb21WYWx1ZSh0eXBlT2JqLnNlcCkgKyBhcnJbeF0udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBvYmoudHlwZSA9IHR5cGU7XHJcbiAgICBvYmoubnVtYmVyID0gJ3BsdXJhbCc7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHJhbmRvbUZyb21JbnRlcnZhbChtaW4gPSAwLCBtYXggPSAxMCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgfVxyXG5cclxuICBnZXRBcnJSYW5kb21WYWx1ZShhcnIpIHtcclxuICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihhcnIubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyUmFuZG9tTm9SZXBlYXQoYXJyKSB7XHJcbiAgICBsZXQgd29yZCA9IGFycltNYXRoLmZsb29yKGFyci5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XHJcblxyXG4gICAgaWYgKHRoaXMudXNlZERpY3Rpb25uYXJ5LmluZGV4T2Yod29yZCkgPT09IC0xKSB7XHJcbiAgICAgIGlmICh3b3JkLmxlbmd0aCA+IDMpIHRoaXMudXNlZERpY3Rpb25uYXJ5LnB1c2god29yZCk7XHJcbiAgICAgIHJldHVybiBhcnJbTWF0aC5mbG9vcihhcnIubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG4gICAgfSBlbHNlIHJldHVybiB0aGlzLmdldEFyclJhbmRvbVZhbHVlKGFycik7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21Xb3JkKHR5cGVPZldvcmQpIHtcclxuICAgIGxldCB3b3JkSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkYXRhW3R5cGVPZldvcmRdLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKCF0eXBlb2YgdGhpcy51c2VkRGljdGlvbm5hcnlbdHlwZU9mV29yZF0gIT09ICd1bmRlZmluZWQnKSB0aGlzLnVzZWREaWN0aW9ubmFyeVt0eXBlT2ZXb3JkXSA9IFtdO1xyXG5cclxuICAgIGlmICh0aGlzLnVzZWREaWN0aW9ubmFyeVt0eXBlT2ZXb3JkXS5pbmRleE9mKHdvcmRJbmRleCkgPT09IC0xKSB7XHJcbiAgICAgIC8vIGlmIHRoZSB3b3JkIGlzbid0IGluIHRoZSBhcnJheSBvZiB1c2VkIHdvcmRzLlxyXG4gICAgICB0aGlzLnVzZWREaWN0aW9ubmFyeVt0eXBlT2ZXb3JkXS5wdXNoKHdvcmRJbmRleCk7XHJcblxyXG4gICAgICBpZiAodGhpcy51c2VkRGljdGlvbm5hcnlbdHlwZU9mV29yZF0ubGVuZ3RoID4gNClcclxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIHNhbWUgd29yZCBkb3NuJ3QgZ2V0IHJlcGVhdGVkIHRvbyBxdWlja2x5XHJcbiAgICAgICAgdGhpcy51c2VkRGljdGlvbm5hcnlbdHlwZU9mV29yZF0uc2hpZnQoKTtcclxuXHJcbiAgICAgIHJldHVybiBkYXRhW3R5cGVPZldvcmRdW3dvcmRJbmRleF07XHJcbiAgICB9IGVsc2UgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tV29yZCh0eXBlT2ZXb3JkKTtcclxuICB9XHJcblxyXG4gIGZpeExpZ2F0dXJlcyhzdHIpIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGlnYXR1cmVzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAobGlnYXR1cmVzW3hdWzBdLCAnZycpLCBsaWdhdHVyZXNbeF1bMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICBjYXBpdGFsaXplKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlc3VtZSh0ZXh0KSB7XHJcbiAgICBsZXQgdHJhbnNsYXRpb25zID0ge1xyXG4gICAgICBQYXJhZ3JhcGhzOiBgJHt0aGlzLnNldHRpbmdzLm5icn0gcGFyYWdyYXBoZXNgLFxyXG4gICAgICBTZW50ZW5jZXM6IGAke3RoaXMuc2V0dGluZ3MubmJyfSBwaHJhc2VzYCxcclxuICAgICAgV29yZHM6IGAke3RoaXMuc2V0dGluZ3MubmJyfSBtb3RzYCxcclxuICAgICAgTGlzdHM6IGBVbmUgbGlzdGUgw6AgJHt0aGlzLnNldHRpbmdzLm5icn0gcG9pbnRzYCxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHJlc3VtZSA9IHRyYW5zbGF0aW9uc1t0aGlzLnNldHRpbmdzLnR5cGVdO1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnR5cGUgIT09ICdXb3JkcycpIHtcclxuICAgICAgbGV0IHdvcmRzTmJyID0gdGV4dC5zcGxpdCgnICcpLmxlbmd0aDtcclxuICAgICAgcmVzdW1lICs9IGAsICR7d29yZHNOYnJ9IG1vdHNgO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjaGFyYWN0ZXJzTmJyID0gdGV4dC5yZXBsYWNlKC9bXkEtWl0vZ2ksICcnKS5sZW5ndGg7XHJcbiAgICByZXN1bWUgKz0gYCwgJHtjaGFyYWN0ZXJzTmJyfSBjYXJhY3TDqHJlcyBkZSA8YSBocmVmPVwiJHt0aGlzLnNldHRpbmdzLnVybH1cIj5MZWU8ZW0+cHN1bTwvZW0+PC9hPiBnw6luw6lyw6lgO1xyXG5cclxuICAgIHRoaXMuZG9tLmZvb3Rlci5pbm5lckhUTUwgPSBgPHA+PHN0cm9uZz4ke3Jlc3VtZX08L3N0cm9uZz48L3A+YDtcclxuICB9XHJcbn1cclxuXHJcbnZhciBsZWVwc3VtID0gbmV3IExvcmVtSXBzdW0oKTtcclxubGVlcHN1bS5pbml0KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=