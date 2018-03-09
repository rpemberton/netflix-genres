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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _genreData = __webpack_require__(/*! ./data/genre-data.json */ "./src/data/genre-data.json");

var _genreData2 = _interopRequireDefault(_genreData);

var _ui = __webpack_require__(/*! ./ui */ "./src/ui/index.js");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.searchGenreData = this.searchGenreData.bind(this);

    this.ui = new _ui2.default(this.searchGenreData);

    this.genreData = _genreData2.default;

    this.ui.displayGenres(this.genreData);
  }

  _createClass(App, [{
    key: 'searchGenreData',
    value: function searchGenreData(searchText) {
      var searchResults = this.genreData.filter(function (_ref) {
        var name = _ref.name;
        return name.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
      });

      this.ui.displayGenres(searchResults);
      this.ui.updateNoResultsMessage(searchResults.length, searchText);
    }
  }]);

  return App;
}();

new App();

/***/ }),

/***/ "./src/data/genre-data.json":
/*!**********************************!*\
  !*** ./src/data/genre-data.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, default */
/***/ (function(module) {

module.exports = [{"id":"1365","name":"Action & Adventure"},{"id":"43040","name":"Action Comedies"},{"id":"1568","name":"Action Sci-Fi & Fantasy"},{"id":"43048","name":"Action Thrillers"},{"id":"11881","name":"Adult Animation"},{"id":"7442","name":"Adventures"},{"id":"3761","name":"African Movies"},{"id":"3327","name":"Alien Sci-Fi"},{"id":"5507","name":"Animal Tales"},{"id":"7424","name":"Anime"},{"id":"2653","name":"Anime Action"},{"id":"9302","name":"Anime Comedies"},{"id":"452","name":"Anime Dramas"},{"id":"11146","name":"Anime Fantasy"},{"id":"3063","name":"Anime Features"},{"id":"10695","name":"Anime Horror"},{"id":"2729","name":"Anime Sci-Fi"},{"id":"6721","name":"Anime Series"},{"id":"29764","name":"Art House Movies"},{"id":"77232","name":"Asian Action Movies"},{"id":"5230","name":"Australian Movies"},{"id":"8195","name":"B-Horror Movies"},{"id":"12339","name":"Baseball Movies"},{"id":"12762","name":"Basketball Movies"},{"id":"262","name":"Belgian Movies"},{"id":"3652","name":"Biographical Documentaries"},{"id":"3179","name":"Biographical Dramas"},{"id":"12443","name":"Boxing Movies"},{"id":"10757","name":"British Movies"},{"id":"52117","name":"British TV Shows"},{"id":"1252","name":"Campy Movies"},{"id":"783","name":"Children & Family Movies"},{"id":"3960","name":"Chinese Movies"},{"id":"46576","name":"Classic Action & Adventure"},{"id":"31694","name":"Classic Comedies"},{"id":"29809","name":"Classic Dramas"},{"id":"32473","name":"Classic Foreign Movies"},{"id":"31574","name":"Classic Movies"},{"id":"32392","name":"Classic Musicals"},{"id":"31273","name":"Classic Romantic Movies"},{"id":"47147","name":"Classic Sci-Fi & Fantasy"},{"id":"46588","name":"Classic Thrillers"},{"id":"46553","name":"Classic TV Shows"},{"id":"48744","name":"Classic War Movies"},{"id":"47465","name":"Classic Westerns"},{"id":"6548","name":"Comedies"},{"id":"10118","name":"Comic Book and Superhero Movies"},{"id":"1105","name":"Country & Western/Folk"},{"id":"528582748","name":"Courtroom Dramas"},{"id":"6895","name":"Creature Features"},{"id":"9584","name":"Crime Action & Adventure"},{"id":"9875","name":"Crime Documentaries"},{"id":"6889","name":"Crime Dramas"},{"id":"10499","name":"Crime Thrillers"},{"id":"26146","name":"Crime TV Shows"},{"id":"9434","name":"Cult Comedies"},{"id":"10944","name":"Cult Horror Movies"},{"id":"7627","name":"Cult Movies"},{"id":"4734","name":"Cult Sci-Fi & Fantasy"},{"id":"74652","name":"Cult TV Shows"},{"id":"869","name":"Dark Comedies"},{"id":"45028","name":"Deep Sea Horror Movies"},{"id":"67673","name":"Disney"},{"id":"59433","name":"Disney Musicals"},{"id":"6839","name":"Documentaries"},{"id":"5763","name":"Dramas"},{"id":"4961","name":"Dramas based on Books"},{"id":"3653","name":"Dramas based on real life"},{"id":"10606","name":"Dutch Movies"},{"id":"5254","name":"Eastern European Movies"},{"id":"10659","name":"Education for Kids"},{"id":"52858","name":"Epics"},{"id":"11079","name":"Experimental Movies"},{"id":"26835","name":"Faith & Spirituality"},{"id":"52804","name":"Faith & Spirituality Movies"},{"id":"51056","name":"Family Features"},{"id":"9744","name":"Fantasy Movies"},{"id":"7687","name":"Film Noir"},{"id":"72436","name":"Food & Travel TV"},{"id":"12803","name":"Football Movies"},{"id":"11828","name":"Foreign Action & Adventure"},{"id":"4426","name":"Foreign Comedies"},{"id":"5161","name":"Foreign Documentaries"},{"id":"2150","name":"Foreign Dramas"},{"id":"8243","name":"Foreign Gay & Lesbian Movies"},{"id":"8654","name":"Foreign Horror Movies"},{"id":"7462","name":"Foreign Movies"},{"id":"6485","name":"Foreign Sci-Fi & Fantasy"},{"id":"10306","name":"Foreign Thrillers"},{"id":"58807","name":"French Movies"},{"id":"31851","name":"Gangster Movies"},{"id":"500","name":"Gay & Lesbian Dramas"},{"id":"58886","name":"German Movies"},{"id":"61115","name":"Greek Movies"},{"id":"5349","name":"Historical Documentaries"},{"id":"89585","name":"Horror Comedy"},{"id":"8711","name":"Horror Movies"},{"id":"11804","name":"Independent Action & Adventure"},{"id":"4195","name":"Independent Comedies"},{"id":"384","name":"Independent Dramas"},{"id":"7077","name":"Independent Movies"},{"id":"3269","name":"Independent Thrillers"},{"id":"10463","name":"Indian Movies"},{"id":"58750","name":"Irish Movies"},{"id":"8221","name":"Italian Movies"},{"id":"10398","name":"Japanese Movies"},{"id":"10271","name":"Jazz & Easy Listening"},{"id":"751423","name":"Kids Faith & Spirituality"},{"id":"52843","name":"Kids Music"},{"id":"27346","name":"Kids’ TV"},{"id":"5685","name":"Korean Movies"},{"id":"67879","name":"Korean TV Shows"},{"id":"1402","name":"Late Night Comedies"},{"id":"1613","name":"Latin American Movies"},{"id":"10741","name":"Latin Music"},{"id":"8985","name":"Martial Arts Movies"},{"id":"6695","name":"Martial Arts, Boxing & Wrestling"},{"id":"5875","name":"Middle Eastern Movies"},{"id":"2125","name":"Military Action & Adventure"},{"id":"4006","name":"Military Documentaries"},{"id":"11","name":"Military Dramas"},{"id":"25804","name":"Military TV Shows"},{"id":"4814","name":"Miniseries"},{"id":"26","name":"Mockumentaries"},{"id":"947","name":"Monster Movies"},{"id":"10056","name":"Movies based on children’s books"},{"id":"6796","name":"Movies for ages 0 to 2"},{"id":"6962","name":"Movies for ages 11 to 12"},{"id":"6218","name":"Movies for ages 2 to 4"},{"id":"5455","name":"Movies for ages 5 to 7"},{"id":"561","name":"Movies for ages 8 to 10"},{"id":"1701","name":"Music"},{"id":"90361","name":"Music & Concert Documentaries"},{"id":"13335","name":"Musicals"},{"id":"9994","name":"Mysteries"},{"id":"63782","name":"New Zealand Movies"},{"id":"12123","name":"Period Pieces"},{"id":"2700","name":"Political Comedies"},{"id":"7018","name":"Political Documentaries"},{"id":"6616","name":"Political Dramas"},{"id":"10504","name":"Political Thrillers"},{"id":"5505","name":"Psychological Thrillers"},{"id":"36103","name":"Quirky Romance"},{"id":"9833","name":"Reality TV"},{"id":"10005","name":"Religious Documentaries"},{"id":"3278","name":"Rock & Pop Concerts"},{"id":"5475","name":"Romantic Comedies"},{"id":"1255","name":"Romantic Dramas"},{"id":"502675","name":"Romantic Favorites"},{"id":"7153","name":"Romantic Foreign Movies"},{"id":"9916","name":"Romantic Independent Movies"},{"id":"8883","name":"Romantic Movies"},{"id":"11567","name":"Russian"},{"id":"6998","name":"Satanic Stories"},{"id":"4922","name":"Satires"},{"id":"9292","name":"Scandinavian Movies"},{"id":"1492","name":"Sci-Fi & Fantasy"},{"id":"6926","name":"Sci-Fi Adventure"},{"id":"3916","name":"Sci-Fi Dramas"},{"id":"1694","name":"Sci-Fi Horror Movies"},{"id":"11014","name":"Sci-Fi Thrillers"},{"id":"2595","name":"Science & Nature Documentaries"},{"id":"52780","name":"Science & Nature TV"},{"id":"9702","name":"Screwball Comedies"},{"id":"5012","name":"Showbiz Dramas"},{"id":"13573","name":"Showbiz Musicals"},{"id":"53310","name":"Silent Movies"},{"id":"10256","name":"Slapstick Comedies"},{"id":"8646","name":"Slasher and Serial Killer Movies"},{"id":"12549","name":"Soccer Movies"},{"id":"3675","name":"Social & Cultural Documentaries"},{"id":"3947","name":"Social Issue Dramas"},{"id":"9196","name":"Southeast Asian Movies"},{"id":"58741","name":"Spanish Movies"},{"id":"2760","name":"Spiritual Documentaries"},{"id":"9327","name":"Sports & Fitness"},{"id":"5286","name":"Sports Comedies"},{"id":"180","name":"Sports Documentaries"},{"id":"7243","name":"Sports Dramas"},{"id":"4370","name":"Sports Movies"},{"id":"10702","name":"Spy Action & Adventure"},{"id":"9147","name":"Spy Thrillers"},{"id":"55774","name":"Stage Musicals"},{"id":"11559","name":"Stand-up Comedy"},{"id":"35800","name":"Steamy Romantic Movies"},{"id":"972","name":"Steamy Thrillers"},{"id":"42023","name":"Supernatural Horror Movies"},{"id":"11140","name":"Supernatural Thrillers"},{"id":"6384","name":"Tearjerkers"},{"id":"3519","name":"Teen Comedies"},{"id":"9299","name":"Teen Dramas"},{"id":"52147","name":"Teen Screams"},{"id":"60951","name":"Teen TV Shows"},{"id":"8933","name":"Thrillers"},{"id":"1159","name":"Travel & Adventure Documentaries"},{"id":"10673","name":"TV Action & Adventure"},{"id":"11177","name":"TV Cartoons"},{"id":"10375","name":"TV Comedies"},{"id":"10105","name":"TV Documentaries"},{"id":"11714","name":"TV Dramas"},{"id":"83059","name":"TV Horror"},{"id":"4366","name":"TV Mysteries"},{"id":"1372","name":"TV Sci-Fi & Fantasy"},{"id":"83","name":"TV Shows"},{"id":"9472","name":"Urban & Dance Concerts"},{"id":"75804","name":"Vampire Horror Movies"},{"id":"75930","name":"Werewolf Horror Movies"},{"id":"7700","name":"Westerns"},{"id":"2856","name":"World Music Concerts"},{"id":"75405","name":"Zombie Horror Movies"}];

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/ui/components/GenreList.js":
/*!****************************************!*\
  !*** ./src/ui/components/GenreList.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenreList = function () {
  function GenreList($el) {
    _classCallCheck(this, GenreList);

    this.$el = $el;

    this.display = this.display.bind(this);
  }

  _createClass(GenreList, [{
    key: 'display',
    value: function display(genres) {
      this.$el.innerHTML = this.convertToListItems(genres);
    }
  }, {
    key: 'convertToListItems',
    value: function convertToListItems(data) {
      return data.map(function (_ref) {
        var id = _ref.id,
            name = _ref.name;
        return '\n      <li class="genres__item">\n        <div class="genres__link-wrap">\n          <a class="genres__link" href="http://www.netflix.com/browse/genre/' + id + '" target="_blank">\n            ' + name + '\n          </a>\n        </div>\n      </li>\n    ';
      }).join('');
    }
  }]);

  return GenreList;
}();

exports.default = GenreList;

/***/ }),

/***/ "./src/ui/components/GridBtn.js":
/*!**************************************!*\
  !*** ./src/ui/components/GridBtn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GridBtn = function () {
  function GridBtn($el, updateGenreListClass, updateListBtnClass) {
    _classCallCheck(this, GridBtn);

    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateListBtnClass = updateListBtnClass;
  }

  _createClass(GridBtn, [{
    key: 'handleClick',
    value: function handleClick() {
      this.$el.classList.add('toggle-view__btn--active');
      this.updateListBtnClass('remove', 'toggle-view__btn--active');
      this.updateGenreListClass('remove', 'list-view');
    }
  }]);

  return GridBtn;
}();

exports.default = GridBtn;

/***/ }),

/***/ "./src/ui/components/ListBtn.js":
/*!**************************************!*\
  !*** ./src/ui/components/ListBtn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ListBtn = function () {
  function ListBtn($el, updateGenreListClass, updateGridBtnClass) {
    _classCallCheck(this, ListBtn);

    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateGridBtnClass = updateGridBtnClass;
  }

  _createClass(ListBtn, [{
    key: 'handleClick',
    value: function handleClick() {
      this.$el.classList.add('toggle-view__btn--active');
      this.updateGridBtnClass('remove', 'toggle-view__btn--active');
      this.updateGenreListClass('add', 'list-view');
    }
  }]);

  return ListBtn;
}();

exports.default = ListBtn;

/***/ }),

/***/ "./src/ui/components/Search.js":
/*!*************************************!*\
  !*** ./src/ui/components/Search.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = function () {
  function Search($el, handleInput) {
    _classCallCheck(this, Search);

    this.$el = $el;
    this.$input = this.$el.querySelector('#search-input');

    this.handleInput = handleInput;

    this.onInput = this.onInput.bind(this);

    this.$el.addEventListener('submit', function (e) {
      return e.preventDefault();
    });
    this.$input.addEventListener('input', this.onInput);
  }

  _createClass(Search, [{
    key: 'onInput',
    value: function onInput() {
      this.handleInput(this.$input.value);
    }
  }]);

  return Search;
}();

exports.default = Search;

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Search = __webpack_require__(/*! ./components/Search */ "./src/ui/components/Search.js");

var _Search2 = _interopRequireDefault(_Search);

var _GridBtn = __webpack_require__(/*! ./components/GridBtn */ "./src/ui/components/GridBtn.js");

var _GridBtn2 = _interopRequireDefault(_GridBtn);

var _ListBtn = __webpack_require__(/*! ./components/ListBtn */ "./src/ui/components/ListBtn.js");

var _ListBtn2 = _interopRequireDefault(_ListBtn);

var _GenreList = __webpack_require__(/*! ./components/GenreList */ "./src/ui/components/GenreList.js");

var _GenreList2 = _interopRequireDefault(_GenreList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = function $(query) {
  return document.querySelector(query);
};

var UI = function () {
  function UI(searchGenreData) {
    _classCallCheck(this, UI);

    this.$els = {
      search: $('#search'),
      gridBtn: $('#grid-btn'),
      listBtn: $('#list-btn'),
      genreList: $('#genre-list'),
      noResults: $('#no-results')
    };

    this.updateGridBtnClass = this.updateGridBtnClass.bind(this);
    this.updateListBtnClass = this.updateListBtnClass.bind(this);
    this.updateGenreListClass = this.updateGenreListClass.bind(this);

    this.search = new _Search2.default(this.$els.search, searchGenreData);
    this.gridBtn = new _GridBtn2.default(this.$els.gridBtn, this.updateGenreListClass, this.updateListBtnClass);
    this.listBtn = new _ListBtn2.default(this.$els.listBtn, this.updateGenreListClass, this.updateGridBtnClass);
    this.genreList = new _GenreList2.default(this.$els.genreList);
  }

  _createClass(UI, [{
    key: 'updateGridBtnClass',
    value: function updateGridBtnClass(type, className) {
      this.$els.gridBtn.classList[type](className);
    }
  }, {
    key: 'updateListBtnClass',
    value: function updateListBtnClass(type, className) {
      this.$els.listBtn.classList[type](className);
    }
  }, {
    key: 'updateGenreListClass',
    value: function updateGenreListClass(type, className) {
      this.$els.genreList.classList[type](className);
    }
  }, {
    key: 'displayGenres',
    value: function displayGenres(data) {
      this.genreList.display(data);
    }
  }, {
    key: 'updateNoResultsMessage',
    value: function updateNoResultsMessage(results, searchText) {
      if (!results) {
        this.$els.noResults.innerHTML = 'No results found for <strong>' + searchText + '</strong>';
        this.$els.noResults.classList.add('no-results--show');
        return;
      }

      this.$els.noResults.classList.remove('no-results--show');
    }
  }]);

  return UI;
}();

exports.default = UI;

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/app.js ./src/styles/main.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! ./src/styles/main.scss */"./src/styles/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9HZW5yZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvR3JpZEJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9MaXN0QnRuLmpzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwic2VhcmNoR2VucmVEYXRhIiwiYmluZCIsInVpIiwiZ2VucmVEYXRhIiwiZGlzcGxheUdlbnJlcyIsInNlYXJjaFRleHQiLCJzZWFyY2hSZXN1bHRzIiwiZmlsdGVyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInRyaW0iLCJ1cGRhdGVOb1Jlc3VsdHNNZXNzYWdlIiwibGVuZ3RoIiwiR2VucmVMaXN0IiwiJGVsIiwiZGlzcGxheSIsImdlbnJlcyIsImlubmVySFRNTCIsImNvbnZlcnRUb0xpc3RJdGVtcyIsImRhdGEiLCJtYXAiLCJpZCIsImpvaW4iLCJHcmlkQnRuIiwidXBkYXRlR2VucmVMaXN0Q2xhc3MiLCJ1cGRhdGVMaXN0QnRuQ2xhc3MiLCJoYW5kbGVDbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJMaXN0QnRuIiwidXBkYXRlR3JpZEJ0bkNsYXNzIiwiU2VhcmNoIiwiaGFuZGxlSW5wdXQiLCIkaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwib25JbnB1dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiJCIsImRvY3VtZW50IiwicXVlcnkiLCJVSSIsIiRlbHMiLCJzZWFyY2giLCJncmlkQnRuIiwibGlzdEJ0biIsImdlbnJlTGlz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QUFLSCxJQUFMLENBQVVHLE9BQXRCLEVBQStCLEtBQUt2QixvQkFBcEMsRUFBMEQsS0FBS08sa0JBQS9ELENBQWY7QUFDQSxTQUFLaUIsU0FBTCxHQUFpQix3QkFBYyxLQUFLSixJQUFMLENBQVVJLFNBQXhCLENBQWpCO0FBQ0Q7Ozs7dUNBRWtCRSxJLEVBQU1DLFMsRUFBVztBQUNsQyxXQUFLUCxJQUFMLENBQVVFLE9BQVYsQ0FBa0JsQixTQUFsQixDQUE0QnNCLElBQTVCLEVBQWtDQyxTQUFsQztBQUNEOzs7dUNBRWtCRCxJLEVBQU1DLFMsRUFBVztBQUNsQyxXQUFLUCxJQUFMLENBQVVHLE9BQVYsQ0FBa0JuQixTQUFsQixDQUE0QnNCLElBQTVCLEVBQWtDQyxTQUFsQztBQUNEOzs7eUNBRW9CRCxJLEVBQU1DLFMsRUFBVztBQUNwQyxXQUFLUCxJQUFMLENBQVVJLFNBQVYsQ0FBb0JwQixTQUFwQixDQUE4QnNCLElBQTlCLEVBQW9DQyxTQUFwQztBQUNEOzs7a0NBRWFoQyxJLEVBQU07QUFDbEIsV0FBSzZCLFNBQUwsQ0FBZWpDLE9BQWYsQ0FBdUJJLElBQXZCO0FBQ0Q7OzsyQ0FFc0JpQyxPLEVBQVNoRCxVLEVBQVk7QUFDMUMsVUFBSSxDQUFDZ0QsT0FBTCxFQUFjO0FBQ1osYUFBS1IsSUFBTCxDQUFVSyxTQUFWLENBQW9CaEMsU0FBcEIscUNBQWdFYixVQUFoRTtBQUNBLGFBQUt3QyxJQUFMLENBQVVLLFNBQVYsQ0FBb0JyQixTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0Msa0JBQWxDO0FBQ0E7QUFDRDs7QUFFRCxXQUFLZSxJQUFMLENBQVVLLFNBQVYsQ0FBb0JyQixTQUFwQixDQUE4QnlCLE1BQTlCLENBQXFDLGtCQUFyQztBQUNEOzs7Ozs7a0JBR1lWLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHNjcmFwZWREYXRhIGZyb20gJy4vZGF0YS9nZW5yZS1kYXRhLmpzb24nO1xuXG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VhcmNoR2VucmVEYXRhID0gdGhpcy5zZWFyY2hHZW5yZURhdGEuYmluZCh0aGlzKTtcblxuICAgIHRoaXMudWkgPSBuZXcgVUkodGhpcy5zZWFyY2hHZW5yZURhdGEpO1xuXG4gICAgdGhpcy5nZW5yZURhdGEgPSBzY3JhcGVkRGF0YTtcblxuICAgIHRoaXMudWkuZGlzcGxheUdlbnJlcyh0aGlzLmdlbnJlRGF0YSk7XG4gIH1cblxuICBzZWFyY2hHZW5yZURhdGEoc2VhcmNoVGV4dCkge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSB0aGlzLmdlbnJlRGF0YVxuICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAuaW5kZXhPZihzZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpKSA+IC0xXG4gICAgICApO1xuXG4gICAgdGhpcy51aS5kaXNwbGF5R2VucmVzKHNlYXJjaFJlc3VsdHMpO1xuICAgIHRoaXMudWkudXBkYXRlTm9SZXN1bHRzTWVzc2FnZShzZWFyY2hSZXN1bHRzLmxlbmd0aCwgc2VhcmNoVGV4dCk7XG4gIH1cbn1cblxubmV3IEFwcCgpOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiY2xhc3MgR2VucmVMaXN0IHtcbiAgY29uc3RydWN0b3IoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRpc3BsYXkoZ2VucmVzKSB7XG4gICAgdGhpcy4kZWwuaW5uZXJIVE1MID0gdGhpcy5jb252ZXJ0VG9MaXN0SXRlbXMoZ2VucmVzKTtcbiAgfVxuXG4gIGNvbnZlcnRUb0xpc3RJdGVtcyhkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKCh7IGlkLCBuYW1lIH0pID0+IGBcbiAgICAgIDxsaSBjbGFzcz1cImdlbnJlc19faXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VucmVzX19saW5rLXdyYXBcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImdlbnJlc19fbGlua1wiIGhyZWY9XCJodHRwOi8vd3d3Lm5ldGZsaXguY29tL2Jyb3dzZS9nZW5yZS8ke2lkfVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgJHtuYW1lfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIGApXG4gICAgLmpvaW4oJycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbnJlTGlzdDsiLCJjbGFzcyBHcmlkQnRuIHtcbiAgY29uc3RydWN0b3IoJGVsLCB1cGRhdGVHZW5yZUxpc3RDbGFzcywgdXBkYXRlTGlzdEJ0bkNsYXNzKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcblxuICAgIHRoaXMudXBkYXRlR2VucmVMaXN0Q2xhc3MgPSB1cGRhdGVHZW5yZUxpc3RDbGFzcztcbiAgICB0aGlzLnVwZGF0ZUxpc3RCdG5DbGFzcyA9IHVwZGF0ZUxpc3RCdG5DbGFzcztcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZS12aWV3X19idG4tLWFjdGl2ZScpO1xuICAgIHRoaXMudXBkYXRlTGlzdEJ0bkNsYXNzKCdyZW1vdmUnLCAndG9nZ2xlLXZpZXdfX2J0bi0tYWN0aXZlJyk7XG4gICAgdGhpcy51cGRhdGVHZW5yZUxpc3RDbGFzcygncmVtb3ZlJywgJ2xpc3QtdmlldycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRCdG47IiwiY2xhc3MgTGlzdEJ0biB7XG4gIGNvbnN0cnVjdG9yKCRlbCwgdXBkYXRlR2VucmVMaXN0Q2xhc3MsIHVwZGF0ZUdyaWRCdG5DbGFzcykge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cbiAgICB0aGlzLnVwZGF0ZUdlbnJlTGlzdENsYXNzID0gdXBkYXRlR2VucmVMaXN0Q2xhc3M7XG4gICAgdGhpcy51cGRhdGVHcmlkQnRuQ2xhc3MgPSB1cGRhdGVHcmlkQnRuQ2xhc3M7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlld19fYnRuLS1hY3RpdmUnKTtcbiAgICB0aGlzLnVwZGF0ZUdyaWRCdG5DbGFzcygncmVtb3ZlJywgJ3RvZ2dsZS12aWV3X19idG4tLWFjdGl2ZScpO1xuICAgIHRoaXMudXBkYXRlR2VucmVMaXN0Q2xhc3MoJ2FkZCcsICdsaXN0LXZpZXcnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0QnRuOyIsImNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKCRlbCwgaGFuZGxlSW5wdXQpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLiRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcblxuICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBoYW5kbGVJbnB1dDtcblxuICAgIHRoaXMub25JbnB1dCA9IHRoaXMub25JbnB1dC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICB0aGlzLiRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMub25JbnB1dCk7XG4gIH1cblxuICBvbklucHV0KCkge1xuICAgIHRoaXMuaGFuZGxlSW5wdXQodGhpcy4kaW5wdXQudmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2gnO1xuaW1wb3J0IEdyaWRCdG4gZnJvbSAnLi9jb21wb25lbnRzL0dyaWRCdG4nO1xuaW1wb3J0IExpc3RCdG4gZnJvbSAnLi9jb21wb25lbnRzL0xpc3RCdG4nO1xuaW1wb3J0IEdlbnJlTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvR2VucmVMaXN0JztcblxuY29uc3QgJCA9IHF1ZXJ5ID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuXG5jbGFzcyBVSSB7XG4gIGNvbnN0cnVjdG9yKHNlYXJjaEdlbnJlRGF0YSkge1xuICAgIHRoaXMuJGVscyA9IHtcbiAgICAgIHNlYXJjaDogJCgnI3NlYXJjaCcpLFxuICAgICAgZ3JpZEJ0bjogJCgnI2dyaWQtYnRuJyksXG4gICAgICBsaXN0QnRuOiAkKCcjbGlzdC1idG4nKSxcbiAgICAgIGdlbnJlTGlzdDogJCgnI2dlbnJlLWxpc3QnKSxcbiAgICAgIG5vUmVzdWx0czogJCgnI25vLXJlc3VsdHMnKVxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZUdyaWRCdG5DbGFzcyA9IHRoaXMudXBkYXRlR3JpZEJ0bkNsYXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVMaXN0QnRuQ2xhc3MgPSB0aGlzLnVwZGF0ZUxpc3RCdG5DbGFzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlR2VucmVMaXN0Q2xhc3MgPSB0aGlzLnVwZGF0ZUdlbnJlTGlzdENsYXNzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2godGhpcy4kZWxzLnNlYXJjaCwgc2VhcmNoR2VucmVEYXRhKTtcbiAgICB0aGlzLmdyaWRCdG4gPSBuZXcgR3JpZEJ0bih0aGlzLiRlbHMuZ3JpZEJ0biwgdGhpcy51cGRhdGVHZW5yZUxpc3RDbGFzcywgdGhpcy51cGRhdGVMaXN0QnRuQ2xhc3MpO1xuICAgIHRoaXMubGlzdEJ0biA9IG5ldyBMaXN0QnRuKHRoaXMuJGVscy5saXN0QnRuLCB0aGlzLnVwZGF0ZUdlbnJlTGlzdENsYXNzLCB0aGlzLnVwZGF0ZUdyaWRCdG5DbGFzcyk7XG4gICAgdGhpcy5nZW5yZUxpc3QgPSBuZXcgR2VucmVMaXN0KHRoaXMuJGVscy5nZW5yZUxpc3QpO1xuICB9XG5cbiAgdXBkYXRlR3JpZEJ0bkNsYXNzKHR5cGUsIGNsYXNzTmFtZSkge1xuICAgIHRoaXMuJGVscy5ncmlkQnRuLmNsYXNzTGlzdFt0eXBlXShjbGFzc05hbWUpO1xuICB9XG5cbiAgdXBkYXRlTGlzdEJ0bkNsYXNzKHR5cGUsIGNsYXNzTmFtZSkge1xuICAgIHRoaXMuJGVscy5saXN0QnRuLmNsYXNzTGlzdFt0eXBlXShjbGFzc05hbWUpO1xuICB9XG5cbiAgdXBkYXRlR2VucmVMaXN0Q2xhc3ModHlwZSwgY2xhc3NOYW1lKSB7XG4gICAgdGhpcy4kZWxzLmdlbnJlTGlzdC5jbGFzc0xpc3RbdHlwZV0oY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGRpc3BsYXlHZW5yZXMoZGF0YSkge1xuICAgIHRoaXMuZ2VucmVMaXN0LmRpc3BsYXkoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVOb1Jlc3VsdHNNZXNzYWdlKHJlc3VsdHMsIHNlYXJjaFRleHQpIHtcbiAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgIHRoaXMuJGVscy5ub1Jlc3VsdHMuaW5uZXJIVE1MID0gYE5vIHJlc3VsdHMgZm91bmQgZm9yIDxzdHJvbmc+JHtzZWFyY2hUZXh0fTwvc3Ryb25nPmA7XG4gICAgICB0aGlzLiRlbHMubm9SZXN1bHRzLmNsYXNzTGlzdC5hZGQoJ25vLXJlc3VsdHMtLXNob3cnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLiRlbHMubm9SZXN1bHRzLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXJlc3VsdHMtLXNob3cnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiJdLCJzb3VyY2VSb290IjoiIn0=