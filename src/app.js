import 'babel-polyfill';

import '../public/favicon.png';

import Model from './model/model';
import View from './view';

import './styles/main.scss';

class App {
  constructor() {
    this.searchGenres = this.searchGenres.bind(this);

    this.model = new Model();
    this.view = new View(this.searchGenres);

    this.init();
  }

  init() {
    this.view.displayGenres(this.model.data);

    this.model.getNewData()
      .then(() => {
        this.view.updateGenres();
      });
  }

  searchGenres(searchTerm) {
    const filteredGenres = this.model.filterData(searchTerm);

    this.view.displayGenres(filteredGenres);
    this.view.updateNoResultsMessage(filteredGenres.length, searchTerm);
  }
}

new App();
