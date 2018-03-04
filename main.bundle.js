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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_genre_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/genre-data.json */ "./src/data/genre-data.json");
var _data_genre_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _data_genre_data_json__WEBPACK_IMPORTED_MODULE_0__, {"default": _data_genre_data_json__WEBPACK_IMPORTED_MODULE_0__});
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui/index.js");




class App {
  constructor() {
    this.searchGenreData = this.searchGenreData.bind(this);

    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_1__["default"](this.searchGenreData);

    this.genreData = _data_genre_data_json__WEBPACK_IMPORTED_MODULE_0__;

    this.ui.displayGenres(this.genreData);
  }

  searchGenreData(searchText) {
    const searchResults = this.genreData
      .filter(({ name }) => name.toLowerCase()
        .includes(searchText.trim().toLowerCase())
      );

    this.ui.displayGenres(searchResults);
    this.ui.updateNoResultsMessage(searchResults.length, searchText);
  }
}

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GenreList {
  constructor($el) {
    this.$el = $el;

    this.display = this.display.bind(this);
  }

  display(genres) {
    this.$el.innerHTML = this.convertToListItems(genres);
  }

  convertToListItems(data) {
    return data.map(({ id, name }) => `
      <li class="genres__item">
        <div class="genres__link-wrap">
          <a class="genres__link" href="http://www.netflix.com/browse/genre/${id}" target="_blank">
            ${name}
          </a>
        </div>
      </li>
    `)
    .join('');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GenreList);

/***/ }),

/***/ "./src/ui/components/GridBtn.js":
/*!**************************************!*\
  !*** ./src/ui/components/GridBtn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GridBtn {
  constructor($el, updateGenreListClass, updateListBtnClass) {
    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateListBtnClass = updateListBtnClass;
  }

  handleClick() {
    this.$el.classList.add('toggle-view__btn--active');
    this.updateListBtnClass('remove', 'toggle-view__btn--active');
    this.updateGenreListClass('remove', 'list-view');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (GridBtn);

/***/ }),

/***/ "./src/ui/components/ListBtn.js":
/*!**************************************!*\
  !*** ./src/ui/components/ListBtn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ListBtn {
  constructor($el, updateGenreListClass, updateGridBtnClass) {
    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateGridBtnClass = updateGridBtnClass;
  }

  handleClick() {
    this.$el.classList.add('toggle-view__btn--active');
    this.updateGridBtnClass('remove', 'toggle-view__btn--active');
    this.updateGenreListClass('add', 'list-view');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ListBtn);

/***/ }),

/***/ "./src/ui/components/Search.js":
/*!*************************************!*\
  !*** ./src/ui/components/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Search {
  constructor($el, handleInput) {
    this.$el = $el;

    this.handleInput = handleInput;

    this.onInput = this.onInput.bind(this);

    this.$el.addEventListener('input', this.onInput);
  }

  onInput() {
    this.handleInput(this.$el.value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/ui/index.js":
/*!*************************!*\
  !*** ./src/ui/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Search */ "./src/ui/components/Search.js");
/* harmony import */ var _components_GridBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GridBtn */ "./src/ui/components/GridBtn.js");
/* harmony import */ var _components_ListBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ListBtn */ "./src/ui/components/ListBtn.js");
/* harmony import */ var _components_GenreList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/GenreList */ "./src/ui/components/GenreList.js");





const $ = query => document.querySelector(query);

class UI {
  constructor(searchGenreData) {
    this.$els = {
      search: $('#search-input'),
      gridBtn: $('#grid-btn'),
      listBtn: $('#list-btn'),
      genreList: $('#genre-list'),
      noResults: $('#no-results')
    };

    this.updateGridBtnClass = this.updateGridBtnClass.bind(this);
    this.updateListBtnClass = this.updateListBtnClass.bind(this);
    this.updateGenreListClass = this.updateGenreListClass.bind(this);

    this.search = new _components_Search__WEBPACK_IMPORTED_MODULE_0__["default"](this.$els.search, searchGenreData);
    this.gridBtn = new _components_GridBtn__WEBPACK_IMPORTED_MODULE_1__["default"](this.$els.gridBtn, this.updateGenreListClass, this.updateListBtnClass);
    this.listBtn = new _components_ListBtn__WEBPACK_IMPORTED_MODULE_2__["default"](this.$els.listBtn, this.updateGenreListClass, this.updateGridBtnClass);
    this.genreList = new _components_GenreList__WEBPACK_IMPORTED_MODULE_3__["default"](this.$els.genreList);
  }

  updateGridBtnClass(type, className) {
    this.$els.gridBtn.classList[type](className);
  }

  updateListBtnClass(type, className) {
    this.$els.listBtn.classList[type](className);
  }

  updateGenreListClass(type, className) {
    this.$els.genreList.classList[type](className);
  }

  displayGenres(data) {
    this.genreList.display(data);
  }

  updateNoResultsMessage(results, searchText) {
    if (!results) {
      this.$els.noResults.innerHTML = `No results found for <strong>${searchText}</strong>`;
      this.$els.noResults.classList.add('no-results--show');
      return;
    }

    this.$els.noResults.classList.remove('no-results--show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UI);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9HZW5yZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudHMvR3JpZEJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50cy9MaXN0QnRuLmpzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEseUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBLDhFQUE4RSxHQUFHO0FBQ2pGLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwRTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0U7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFLFdBQVc7QUFDakY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgc2NyYXBlZERhdGEgZnJvbSAnLi9kYXRhL2dlbnJlLWRhdGEuanNvbic7XG5cbmltcG9ydCBVSSBmcm9tICcuL3VpJztcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWFyY2hHZW5yZURhdGEgPSB0aGlzLnNlYXJjaEdlbnJlRGF0YS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy51aSA9IG5ldyBVSSh0aGlzLnNlYXJjaEdlbnJlRGF0YSk7XG5cbiAgICB0aGlzLmdlbnJlRGF0YSA9IHNjcmFwZWREYXRhO1xuXG4gICAgdGhpcy51aS5kaXNwbGF5R2VucmVzKHRoaXMuZ2VucmVEYXRhKTtcbiAgfVxuXG4gIHNlYXJjaEdlbnJlRGF0YShzZWFyY2hUZXh0KSB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ2VucmVEYXRhXG4gICAgICAuZmlsdGVyKCh7IG5hbWUgfSkgPT4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKTtcblxuICAgIHRoaXMudWkuZGlzcGxheUdlbnJlcyhzZWFyY2hSZXN1bHRzKTtcbiAgICB0aGlzLnVpLnVwZGF0ZU5vUmVzdWx0c01lc3NhZ2Uoc2VhcmNoUmVzdWx0cy5sZW5ndGgsIHNlYXJjaFRleHQpO1xuICB9XG59XG5cbm5ldyBBcHAoKTsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImNsYXNzIEdlbnJlTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuXG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5LmJpbmQodGhpcyk7XG4gIH1cblxuICBkaXNwbGF5KGdlbnJlcykge1xuICAgIHRoaXMuJGVsLmlubmVySFRNTCA9IHRoaXMuY29udmVydFRvTGlzdEl0ZW1zKGdlbnJlcyk7XG4gIH1cblxuICBjb252ZXJ0VG9MaXN0SXRlbXMoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLm1hcCgoeyBpZCwgbmFtZSB9KSA9PiBgXG4gICAgICA8bGkgY2xhc3M9XCJnZW5yZXNfX2l0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdlbnJlc19fbGluay13cmFwXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJnZW5yZXNfX2xpbmtcIiBocmVmPVwiaHR0cDovL3d3dy5uZXRmbGl4LmNvbS9icm93c2UvZ2VucmUvJHtpZH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICR7bmFtZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICBgKVxuICAgIC5qb2luKCcnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5yZUxpc3Q7IiwiY2xhc3MgR3JpZEJ0biB7XG4gIGNvbnN0cnVjdG9yKCRlbCwgdXBkYXRlR2VucmVMaXN0Q2xhc3MsIHVwZGF0ZUxpc3RCdG5DbGFzcykge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG5cbiAgICB0aGlzLnVwZGF0ZUdlbnJlTGlzdENsYXNzID0gdXBkYXRlR2VucmVMaXN0Q2xhc3M7XG4gICAgdGhpcy51cGRhdGVMaXN0QnRuQ2xhc3MgPSB1cGRhdGVMaXN0QnRuQ2xhc3M7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtdmlld19fYnRuLS1hY3RpdmUnKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RCdG5DbGFzcygncmVtb3ZlJywgJ3RvZ2dsZS12aWV3X19idG4tLWFjdGl2ZScpO1xuICAgIHRoaXMudXBkYXRlR2VucmVMaXN0Q2xhc3MoJ3JlbW92ZScsICdsaXN0LXZpZXcnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkQnRuOyIsImNsYXNzIExpc3RCdG4ge1xuICBjb25zdHJ1Y3RvcigkZWwsIHVwZGF0ZUdlbnJlTGlzdENsYXNzLCB1cGRhdGVHcmlkQnRuQ2xhc3MpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuXG4gICAgdGhpcy51cGRhdGVHZW5yZUxpc3RDbGFzcyA9IHVwZGF0ZUdlbnJlTGlzdENsYXNzO1xuICAgIHRoaXMudXBkYXRlR3JpZEJ0bkNsYXNzID0gdXBkYXRlR3JpZEJ0bkNsYXNzO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy4kZWwuY2xhc3NMaXN0LmFkZCgndG9nZ2xlLXZpZXdfX2J0bi0tYWN0aXZlJyk7XG4gICAgdGhpcy51cGRhdGVHcmlkQnRuQ2xhc3MoJ3JlbW92ZScsICd0b2dnbGUtdmlld19fYnRuLS1hY3RpdmUnKTtcbiAgICB0aGlzLnVwZGF0ZUdlbnJlTGlzdENsYXNzKCdhZGQnLCAnbGlzdC12aWV3Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEJ0bjsiLCJjbGFzcyBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcigkZWwsIGhhbmRsZUlucHV0KSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0ID0gaGFuZGxlSW5wdXQ7XG5cbiAgICB0aGlzLm9uSW5wdXQgPSB0aGlzLm9uSW5wdXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5vbklucHV0KTtcbiAgfVxuXG4gIG9uSW5wdXQoKSB7XG4gICAgdGhpcy5oYW5kbGVJbnB1dCh0aGlzLiRlbC52YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaCc7XG5pbXBvcnQgR3JpZEJ0biBmcm9tICcuL2NvbXBvbmVudHMvR3JpZEJ0bic7XG5pbXBvcnQgTGlzdEJ0biBmcm9tICcuL2NvbXBvbmVudHMvTGlzdEJ0bic7XG5pbXBvcnQgR2VucmVMaXN0IGZyb20gJy4vY29tcG9uZW50cy9HZW5yZUxpc3QnO1xuXG5jb25zdCAkID0gcXVlcnkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XG5cbmNsYXNzIFVJIHtcbiAgY29uc3RydWN0b3Ioc2VhcmNoR2VucmVEYXRhKSB7XG4gICAgdGhpcy4kZWxzID0ge1xuICAgICAgc2VhcmNoOiAkKCcjc2VhcmNoLWlucHV0JyksXG4gICAgICBncmlkQnRuOiAkKCcjZ3JpZC1idG4nKSxcbiAgICAgIGxpc3RCdG46ICQoJyNsaXN0LWJ0bicpLFxuICAgICAgZ2VucmVMaXN0OiAkKCcjZ2VucmUtbGlzdCcpLFxuICAgICAgbm9SZXN1bHRzOiAkKCcjbm8tcmVzdWx0cycpXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlR3JpZEJ0bkNsYXNzID0gdGhpcy51cGRhdGVHcmlkQnRuQ2xhc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RCdG5DbGFzcyA9IHRoaXMudXBkYXRlTGlzdEJ0bkNsYXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVHZW5yZUxpc3RDbGFzcyA9IHRoaXMudXBkYXRlR2VucmVMaXN0Q2xhc3MuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh0aGlzLiRlbHMuc2VhcmNoLCBzZWFyY2hHZW5yZURhdGEpO1xuICAgIHRoaXMuZ3JpZEJ0biA9IG5ldyBHcmlkQnRuKHRoaXMuJGVscy5ncmlkQnRuLCB0aGlzLnVwZGF0ZUdlbnJlTGlzdENsYXNzLCB0aGlzLnVwZGF0ZUxpc3RCdG5DbGFzcyk7XG4gICAgdGhpcy5saXN0QnRuID0gbmV3IExpc3RCdG4odGhpcy4kZWxzLmxpc3RCdG4sIHRoaXMudXBkYXRlR2VucmVMaXN0Q2xhc3MsIHRoaXMudXBkYXRlR3JpZEJ0bkNsYXNzKTtcbiAgICB0aGlzLmdlbnJlTGlzdCA9IG5ldyBHZW5yZUxpc3QodGhpcy4kZWxzLmdlbnJlTGlzdCk7XG4gIH1cblxuICB1cGRhdGVHcmlkQnRuQ2xhc3ModHlwZSwgY2xhc3NOYW1lKSB7XG4gICAgdGhpcy4kZWxzLmdyaWRCdG4uY2xhc3NMaXN0W3R5cGVdKGNsYXNzTmFtZSk7XG4gIH1cblxuICB1cGRhdGVMaXN0QnRuQ2xhc3ModHlwZSwgY2xhc3NOYW1lKSB7XG4gICAgdGhpcy4kZWxzLmxpc3RCdG4uY2xhc3NMaXN0W3R5cGVdKGNsYXNzTmFtZSk7XG4gIH1cblxuICB1cGRhdGVHZW5yZUxpc3RDbGFzcyh0eXBlLCBjbGFzc05hbWUpIHtcbiAgICB0aGlzLiRlbHMuZ2VucmVMaXN0LmNsYXNzTGlzdFt0eXBlXShjbGFzc05hbWUpO1xuICB9XG5cbiAgZGlzcGxheUdlbnJlcyhkYXRhKSB7XG4gICAgdGhpcy5nZW5yZUxpc3QuZGlzcGxheShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZU5vUmVzdWx0c01lc3NhZ2UocmVzdWx0cywgc2VhcmNoVGV4dCkge1xuICAgIGlmICghcmVzdWx0cykge1xuICAgICAgdGhpcy4kZWxzLm5vUmVzdWx0cy5pbm5lckhUTUwgPSBgTm8gcmVzdWx0cyBmb3VuZCBmb3IgPHN0cm9uZz4ke3NlYXJjaFRleHR9PC9zdHJvbmc+YDtcbiAgICAgIHRoaXMuJGVscy5ub1Jlc3VsdHMuY2xhc3NMaXN0LmFkZCgnbm8tcmVzdWx0cy0tc2hvdycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGVscy5ub1Jlc3VsdHMuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcmVzdWx0cy0tc2hvdycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==