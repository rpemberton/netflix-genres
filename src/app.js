import 'babel-polyfill';

import '../public/favicon.png';

import Model from './model/model';
import View from './view';

import './styles/main.scss';

class App {
  constructor() {
    this.searchGenreData = this.searchGenreData.bind(this);

    this.model = new Model();
    this.view = new View(this.searchGenreData);

    this.init();
  }

  init() {
    this.view.displayGenres(this.model.data);

    this.model.getNewData()
      .then((res) => {
        if (res.length) {
          this.view.updateGenres();
        }
      });
  }

  searchGenreData(searchText) {
    const searchResults = this.model.filterData(searchText);

    this.view.displayGenres(searchResults);
    this.view.updateNoResultsMessage(searchResults.length, searchText);
  }
}

new App();
