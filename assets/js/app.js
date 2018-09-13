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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJMb3JlbUlwc3VtIiwiZG9tIiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5iciIsInR5cGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuIiwiY29udGVudCIsImZvb3RlciIsInNldHRpbmdzIiwidXJsIiwidmFsdWUiLCJ3b3Jkc0FyciIsInRpbWVzIiwibSIsInNpbmdsZSIsIml0ZW0iLCJ2YWx1ZXMiLCJjb25jYXQiLCJwbGFjZXMiLCJmIiwicGVyc29ucyIsInJvbGVzIiwic3BlY2lhbGlzYXRpb24iLCJiaW5kRXZlbnRzIiwic2V0dXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsInJhZGlvIiwidXNlZERpY3Rpb25uYXJ5IiwiaSIsImdldExvcmVtSXBzdW0iLCJmaXhMaWdhdHVyZXMiLCJ1cGRhdGVSZXN1bWUiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZVNlbnRlbmNlcyIsImdldEFyclJhbmRvbVZhbHVlIiwic3BsaXQiLCJnZW5lcmF0ZUxpc3RzIiwiZ2VuZXJhdGVQYXJhZ3JhcGhzIiwic2VudGVuY2VzTmJyIiwicmFuZG9tRnJvbUludGVydmFsIiwicGFyYWdyYXBoQXJyIiwieCIsImhhc1RyYW5zaXRpb24iLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJzZW50ZW5jZSIsInB1c2giLCJqb2luIiwic3RydWN0dXJlIiwic3RydWN0dXJlcyIsImZsb29yIiwibGVuZ3RoIiwicHJvdGFnb25pc3QiLCJnZW5kZXIiLCJudW1iZXIiLCJzZW50ZW5jZUFyciIsImZpcnN0Q2hhciIsImNoYXJBdCIsInNsaWNlIiwib2JqIiwiZ2V0U2VjdGlvbiIsInRleHQiLCJjYXRlZ29yeSIsImxpdGVyYWwiLCJnZXRSYW5kb21Xb3JkIiwiY2FwaXRhbGl6ZSIsIm9yaWdpbmFsVHlwZSIsInByZXNldCIsInR5cGVPYmoiLCJoYXNPd25Qcm9wZXJ0eSIsIm9wdGlvbnMiLCJnZXRQYXJ0aWFsIiwicGFydGlhbHNBcnIiLCJtZXJnZVBhcnRpYWxzIiwidGV4dEFyciIsInN1YiIsIk9iamVjdCIsImtleXMiLCJzdWJQb3MiLCJnZXRBcnJSYW5kb21Ob1JlcGVhdCIsImFyciIsInNlcCIsIm1pbiIsIm1heCIsIndvcmQiLCJpbmRleE9mIiwidHlwZU9mV29yZCIsIndvcmRJbmRleCIsInNoaWZ0Iiwic3RyIiwicmVwbGFjZSIsIlJlZ0V4cCIsInRvVXBwZXJDYXNlIiwidHJhbnNsYXRpb25zIiwiUGFyYWdyYXBocyIsIlNlbnRlbmNlcyIsIldvcmRzIiwiTGlzdHMiLCJyZXN1bWUiLCJ3b3Jkc05iciIsImNoYXJhY3RlcnNOYnIiLCJsZWVwc3VtIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7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QWNMLElBQWQsS0FBdUIsT0FBM0IsRUFBb0M7QUFDbEMsWUFBSXVHLFFBQVEsR0FBR3RDLElBQUksQ0FBQzNCLEtBQUwsQ0FBVyxHQUFYLEVBQWdCaUIsTUFBL0I7QUFDQStDLGNBQU0sZ0JBQVNDLFFBQVQsVUFBTjtBQUNEOztBQUVELFVBQUlDLGFBQWEsR0FBR3ZDLElBQUksQ0FBQzZCLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLEVBQTZCdkMsTUFBakQ7QUFDQStDLFlBQU0sZ0JBQVNFLGFBQVQseUNBQWlELEtBQUtuRyxRQUFMLENBQWNDLEdBQS9ELDRDQUFOO0FBRUEsV0FBS1gsR0FBTCxDQUFTUyxNQUFULENBQWdCK0IsU0FBaEIsd0JBQTBDbUUsTUFBMUM7QUFDRDs7Ozs7O0FBR0gsSUFBSUcsT0FBTyxHQUFHLElBQUkvRyxVQUFKLEVBQWQ7QUFDQStHLE9BQU8sQ0FBQ0MsSUFBUixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2FwcC5qc1wiKTtcbiIsImltcG9ydCBkYXRhIGZyb20gJy4uL2pzb24vZGF0YSc7XHJcbmltcG9ydCBsaWdhdHVyZXMgZnJvbSAnLi4vanNvbi9saWdhdHVyZXMnO1xyXG5cclxuY2xhc3MgTG9yZW1JcHN1bSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRvbSA9IHtcclxuICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLFxyXG4gICAgICBuYnI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYnJcIl0nKSxcclxuICAgICAgdHlwZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInR5cGVcIl0nKSxcclxuICAgICAgYnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZ2VuZXJhdGUnKSxcclxuICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbnRlbnQnKSxcclxuICAgICAgZm9vdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9vdGVyJyksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgIHVybDogJ2h0dHA6Ly9zaWRsaXBzdW0uc21uYXJub2xkLmNvbScsXHJcbiAgICAgIG5icjogdGhpcy5kb20ubmJyLnZhbHVlLFxyXG4gICAgICB0eXBlOiAnUGFyYWdyYXBocycsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMud29yZHNBcnIgPSBkYXRhLnRpbWVzLm0uc2luZ2xlLml0ZW0udmFsdWVzLmNvbmNhdChcclxuICAgICAgZGF0YS5wbGFjZXMubS5zaW5nbGUuaXRlbS52YWx1ZXMsXHJcbiAgICAgIGRhdGEucGxhY2VzLmYuc2luZ2xlLml0ZW0udmFsdWVzLFxyXG4gICAgICBkYXRhLnBlcnNvbnMubS5zaW5nbGUuaXRlbS52YWx1ZXMsXHJcbiAgICAgIGRhdGEucGVyc29ucy5mLnNpbmdsZS5pdGVtLnZhbHVlcyxcclxuICAgICAgZGF0YS5yb2xlcy5tLnNpbmdsZS5pdGVtLnZhbHVlcyxcclxuICAgICAgZGF0YS5yb2xlcy5mLnNpbmdsZS5pdGVtLnZhbHVlcyxcclxuICAgICAgZGF0YS5yb2xlcy5tLnNpbmdsZS5zcGVjaWFsaXNhdGlvbi52YWx1ZXMsXHJcbiAgICAgIGRhdGEucm9sZXMuZi5zaW5nbGUuc3BlY2lhbGlzYXRpb24udmFsdWVzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kc1xyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICB9XHJcblxyXG4gIGJpbmRFdmVudHMoKSB7XHJcbiAgICB0aGlzLmRvbS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbS5uYnIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gKHRoaXMuc2V0dGluZ3MubmJyID0gdGhpcy5kb20ubmJyLnZhbHVlKSk7XHJcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMuZG9tLnR5cGUsIChyYWRpbykgPT5cclxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gKHRoaXMuc2V0dGluZ3MudHlwZSA9IHJhZGlvLnZhbHVlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXR1cCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gJyc7XHJcbiAgICB0aGlzLnVzZWREaWN0aW9ubmFyeSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXR0aW5ncy5uYnI7IGkrKykge1xyXG4gICAgICBjb250ZW50ICs9IHRoaXMuZ2V0TG9yZW1JcHN1bSh0aGlzLnNldHRpbmdzLnR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnQgPSB0aGlzLmZpeExpZ2F0dXJlcyhjb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVJlc3VtZShjb250ZW50KTtcclxuICAgIHRoaXMuZG9tLmNvbnRlbnQuaW5uZXJIVE1MID0gYDxhcnRpY2xlIGNsYXNzPVwiYXJ0aWNsZVwiPiR7Y29udGVudH08L2FydGljbGU+YDtcclxuICB9XHJcblxyXG4gIGdldExvcmVtSXBzdW0odHlwZSkge1xyXG4gICAgbGV0IGNvbnRlbnQ7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ1NlbnRlbmNlcyc6XHJcbiAgICAgICAgY29udGVudCA9IHRoaXMuZ2VuZXJhdGVTZW50ZW5jZXMoKSArICcgJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnV29yZHMnOlxyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRBcnJSYW5kb21WYWx1ZSh0aGlzLndvcmRzQXJyKTtcclxuICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRBcnJSYW5kb21WYWx1ZShpdGVtLnNwbGl0KCcgJykpICsgJyAnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdMaXN0cyc6XHJcbiAgICAgICAgY29udGVudCA9IHRoaXMuZ2VuZXJhdGVMaXN0cygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmdlbmVyYXRlUGFyYWdyYXBocygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZpeExpZ2F0dXJlcyhjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUGFyYWdyYXBocygpIHtcclxuICAgIGxldCBzZW50ZW5jZXNOYnIgPSB0aGlzLnJhbmRvbUZyb21JbnRlcnZhbCgyLCA4KTtcclxuICAgIGxldCBwYXJhZ3JhcGhBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlbnRlbmNlc05icjsgeCsrKSB7XHJcbiAgICAgIGxldCBoYXNUcmFuc2l0aW9uID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgbGV0IHNlbnRlbmNlID0gdGhpcy5nZW5lcmF0ZVNlbnRlbmNlcygpO1xyXG4gICAgICBwYXJhZ3JhcGhBcnIucHVzaChzZW50ZW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGA8cD4ke3BhcmFncmFwaEFyci5qb2luKCcgJyl9PC9wPmA7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVNlbnRlbmNlcygpIHtcclxuICAgIGxldCBzdHJ1Y3R1cmUgPSBkYXRhLnN0cnVjdHVyZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5zdHJ1Y3R1cmVzLmxlbmd0aCldO1xyXG4gICAgbGV0IHByb3RhZ29uaXN0ID0ge1xyXG4gICAgICBnZW5kZXI6ICcnLFxyXG4gICAgICBudW1iZXI6ICcnLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2VudGVuY2VBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0cnVjdHVyZS5sZW5ndGg7IHgrKykge1xyXG4gICAgICBsZXQgdHlwZSA9IHN0cnVjdHVyZVt4XTtcclxuICAgICAgbGV0IGZpcnN0Q2hhciA9IHR5cGUuY2hhckF0KDApO1xyXG5cclxuICAgICAgaWYgKGZpcnN0Q2hhciA9PT0gJyonKSB7XHJcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgKiA2IDwgMSkgdHlwZSA9IHR5cGUuc2xpY2UoMSk7XHJcbiAgICAgICAgZWxzZSBjb250aW51ZTtcclxuICAgICAgfSBlbHNlIGlmIChmaXJzdENoYXIgPT09ICc/Jykge1xyXG4gICAgICAgIGxldCBvYmogPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHR5cGUuc2xpY2UoMSkgPT09ICdhY3Rpb25zJykgb2JqID0gdGhpcy5nZXRTZWN0aW9uKHR5cGUuc2xpY2UoMSksIHByb3RhZ29uaXN0KTtcclxuICAgICAgICBlbHNlIG9iaiA9IHRoaXMuZ2V0U2VjdGlvbih0eXBlLnNsaWNlKDEpKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUuc2xpY2UoMSkgPT09ICdwcm90YWdvbmlzdHMnKSB7XHJcbiAgICAgICAgICBwcm90YWdvbmlzdCA9IHtcclxuICAgICAgICAgICAgZ2VuZGVyOiBvYmouZ2VuZGVyLFxyXG4gICAgICAgICAgICBudW1iZXI6IG9iai5udW1iZXIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZW50ZW5jZUFyci5wdXNoKG9iai50ZXh0KTtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNhdGVnb3J5ID0gZGF0YVt0eXBlXTtcclxuICAgICAgbGV0IGxpdGVyYWwgPSB0eXBlb2YgY2F0ZWdvcnkgPT09ICd1bmRlZmluZWQnO1xyXG5cclxuICAgICAgaWYgKGxpdGVyYWwpIHNlbnRlbmNlQXJyLnB1c2godHlwZSk7XHJcbiAgICAgIGVsc2Ugc2VudGVuY2VBcnIucHVzaCh0aGlzLmdldFJhbmRvbVdvcmQodHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNhcGl0YWxpemUoc2VudGVuY2VBcnIuam9pbignICcpKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlTGlzdHMoKSB7XHJcbiAgICBsZXQgc2VudGVuY2UgPSB0aGlzLmdlbmVyYXRlU2VudGVuY2VzKCk7XHJcbiAgICByZXR1cm4gYDxsaT4ke3NlbnRlbmNlfTwvbGk+YDtcclxuICB9XHJcblxyXG4gIGdldFNlY3Rpb24ob3JpZ2luYWxUeXBlLCBwcmVzZXQgPSB7fSkge1xyXG4gICAgbGV0IHR5cGVPYmogPSBkYXRhW29yaWdpbmFsVHlwZV07XHJcbiAgICBsZXQgb2JqID0gJyc7XHJcblxyXG4gICAgaWYgKHR5cGVPYmouaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkge1xyXG4gICAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0QXJyUmFuZG9tVmFsdWUodHlwZU9iai5vcHRpb25zKTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIG9iaiA9IHRoaXMuZ2V0UGFydGlhbCh0eXBlLCBwcmVzZXQpO1xyXG4gICAgICBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBsZXQgcGFydGlhbHNBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0eXBlLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICBwYXJ0aWFsc0Fyci5wdXNoKHRoaXMuZ2V0UGFydGlhbCh0eXBlW3hdLCBwcmVzZXQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9iaiA9IHRoaXMubWVyZ2VQYXJ0aWFscyhwYXJ0aWFsc0Fyciwgb3JpZ2luYWxUeXBlLCB0eXBlT2JqKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIG9iaiA9IHRoaXMuZ2V0UGFydGlhbChvcmlnaW5hbFR5cGUsIHByZXNldCk7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIGdldFBhcnRpYWwodHlwZSA9ICdwZXJzb25zJywgcHJlc2V0ID0ge30pIHtcclxuICAgIGlmICh0eXBlb2YgcHJlc2V0LmdlbmRlciA9PT0gJ3VuZGVmaW5lZCcpIHByZXNldC5nZW5kZXIgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/ICdtJyA6ICdmJztcclxuXHJcbiAgICBsZXQgdGV4dEFyciA9IFtdO1xyXG4gICAgbGV0IHR5cGVPYmogPSBkYXRhW3R5cGVdO1xyXG4gICAgbGV0IHN1YiA9IE9iamVjdC5rZXlzKHR5cGVPYmpbcHJlc2V0LmdlbmRlcl0pO1xyXG4gICAgbGV0IHN1YlBvcyA9IE1hdGguZmxvb3Ioc3ViLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcHJlc2V0Lm51bWJlciA9PT0gJ3VuZGVmaW5lZCcpIHByZXNldC5udW1iZXIgPSBzdWJbc3ViUG9zXTtcclxuXHJcbiAgICBsZXQgb2JqID0gdHlwZU9ialtwcmVzZXQuZ2VuZGVyXVtwcmVzZXQubnVtYmVyXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGFbdHlwZV0uc3RydWN0dXJlLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIGxldCBjYXRlZ29yeSA9IGRhdGFbdHlwZV0uc3RydWN0dXJlW3hdO1xyXG5cclxuICAgICAgaWYgKG9ialtjYXRlZ29yeV1bJ3JlcXVpcmVkJ10gPj0gTWF0aC5yYW5kb20oKSkgdGV4dEFyci5wdXNoKHRoaXMuZ2V0QXJyUmFuZG9tTm9SZXBlYXQob2JqW2NhdGVnb3J5XVsndmFsdWVzJ10pKTtcclxuICAgICAgZWxzZSBpZiAodHlwZW9mIG9ialtjYXRlZ29yeV1bJ2RlZmF1bHQnXSAhPT0gJ3VuZGVmaW5lZCcpIHRleHRBcnIucHVzaChvYmpbY2F0ZWdvcnldWydkZWZhdWx0J10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgIHRleHQ6IHRleHRBcnIuam9pbignICcpLFxyXG4gICAgICBnZW5kZXI6IHByZXNldC5nZW5kZXIsXHJcbiAgICAgIG51bWJlcjogcHJlc2V0Lm51bWJlcixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBtZXJnZVBhcnRpYWxzKGFyciwgdHlwZSwgdHlwZU9iaikge1xyXG4gICAgbGV0IG9iaiA9IGFyclswXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8IGFyci5sZW5ndGg7IHgrKykge1xyXG4gICAgICBpZiAoYXJyW3hdLmdlbmRlciAhPT0gb2JqLmdlbmRlcikgb2JqLmdlbmRlciA9ICdtJztcclxuXHJcbiAgICAgIG9iai50ZXh0ICs9IHRoaXMuZ2V0QXJyUmFuZG9tVmFsdWUodHlwZU9iai5zZXApICsgYXJyW3hdLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqLnR5cGUgPSB0eXBlO1xyXG4gICAgb2JqLm51bWJlciA9ICdwbHVyYWwnO1xyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICByYW5kb21Gcm9tSW50ZXJ2YWwobWluID0gMCwgbWF4ID0gMTApIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXJyUmFuZG9tVmFsdWUoYXJyKSB7XHJcbiAgICByZXR1cm4gYXJyW01hdGguZmxvb3IoYXJyLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcclxuICB9XHJcblxyXG4gIGdldEFyclJhbmRvbU5vUmVwZWF0KGFycikge1xyXG4gICAgbGV0IHdvcmQgPSBhcnJbTWF0aC5mbG9vcihhcnIubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xyXG5cclxuICAgIGlmICh0aGlzLnVzZWREaWN0aW9ubmFyeS5pbmRleE9mKHdvcmQpID09PSAtMSkge1xyXG4gICAgICBpZiAod29yZC5sZW5ndGggPiAzKSB0aGlzLnVzZWREaWN0aW9ubmFyeS5wdXNoKHdvcmQpO1xyXG4gICAgICByZXR1cm4gYXJyW01hdGguZmxvb3IoYXJyLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcclxuICAgIH0gZWxzZSByZXR1cm4gdGhpcy5nZXRBcnJSYW5kb21WYWx1ZShhcnIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tV29yZCh0eXBlT2ZXb3JkKSB7XHJcbiAgICBsZXQgd29yZEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YVt0eXBlT2ZXb3JkXS5sZW5ndGgpO1xyXG5cclxuICAgIGlmICghdHlwZW9mIHRoaXMudXNlZERpY3Rpb25uYXJ5W3R5cGVPZldvcmRdICE9PSAndW5kZWZpbmVkJykgdGhpcy51c2VkRGljdGlvbm5hcnlbdHlwZU9mV29yZF0gPSBbXTtcclxuXHJcbiAgICBpZiAodGhpcy51c2VkRGljdGlvbm5hcnlbdHlwZU9mV29yZF0uaW5kZXhPZih3b3JkSW5kZXgpID09PSAtMSkge1xyXG4gICAgICAvLyBpZiB0aGUgd29yZCBpc24ndCBpbiB0aGUgYXJyYXkgb2YgdXNlZCB3b3Jkcy5cclxuICAgICAgdGhpcy51c2VkRGljdGlvbm5hcnlbdHlwZU9mV29yZF0ucHVzaCh3b3JkSW5kZXgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMudXNlZERpY3Rpb25uYXJ5W3R5cGVPZldvcmRdLmxlbmd0aCA+IDQpXHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBzYW1lIHdvcmQgZG9zbid0IGdldCByZXBlYXRlZCB0b28gcXVpY2tseVxyXG4gICAgICAgIHRoaXMudXNlZERpY3Rpb25uYXJ5W3R5cGVPZldvcmRdLnNoaWZ0KCk7XHJcblxyXG4gICAgICByZXR1cm4gZGF0YVt0eXBlT2ZXb3JkXVt3b3JkSW5kZXhdO1xyXG4gICAgfSBlbHNlIHJldHVybiB0aGlzLmdldFJhbmRvbVdvcmQodHlwZU9mV29yZCk7XHJcbiAgfVxyXG5cclxuICBmaXhMaWdhdHVyZXMoc3RyKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxpZ2F0dXJlcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGxpZ2F0dXJlc1t4XVswXSwgJ2cnKSwgbGlnYXR1cmVzW3hdWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZXN1bWUodGV4dCkge1xyXG4gICAgbGV0IHRyYW5zbGF0aW9ucyA9IHtcclxuICAgICAgUGFyYWdyYXBoczogYCR7dGhpcy5zZXR0aW5ncy5uYnJ9IHBhcmFncmFwaGVzYCxcclxuICAgICAgU2VudGVuY2VzOiBgJHt0aGlzLnNldHRpbmdzLm5icn0gcGhyYXNlc2AsXHJcbiAgICAgIFdvcmRzOiBgJHt0aGlzLnNldHRpbmdzLm5icn0gbW90c2AsXHJcbiAgICAgIExpc3RzOiBgVW5lIGxpc3RlIMOgICR7dGhpcy5zZXR0aW5ncy5uYnJ9IHBvaW50c2AsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCByZXN1bWUgPSB0cmFuc2xhdGlvbnNbdGhpcy5zZXR0aW5ncy50eXBlXTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy50eXBlICE9PSAnV29yZHMnKSB7XHJcbiAgICAgIGxldCB3b3Jkc05iciA9IHRleHQuc3BsaXQoJyAnKS5sZW5ndGg7XHJcbiAgICAgIHJlc3VtZSArPSBgLCAke3dvcmRzTmJyfSBtb3RzYDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2hhcmFjdGVyc05iciA9IHRleHQucmVwbGFjZSgvW15BLVpdL2dpLCAnJykubGVuZ3RoO1xyXG4gICAgcmVzdW1lICs9IGAsICR7Y2hhcmFjdGVyc05icn0gY2FyYWN0w6hyZXMgZGUgPGEgaHJlZj1cIiR7dGhpcy5zZXR0aW5ncy51cmx9XCI+TGVlPGVtPnBzdW08L2VtPjwvYT4gZ8OpbsOpcsOpYDtcclxuXHJcbiAgICB0aGlzLmRvbS5mb290ZXIuaW5uZXJIVE1MID0gYDxwPjxzdHJvbmc+JHtyZXN1bWV9PC9zdHJvbmc+PC9wPmA7XHJcbiAgfVxyXG59XHJcblxyXG52YXIgbGVlcHN1bSA9IG5ldyBMb3JlbUlwc3VtKCk7XHJcbmxlZXBzdW0uaW5pdCgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9