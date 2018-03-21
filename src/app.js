import 'babel-polyfill';

import Model from './model/model';
import View from './view';

class App {
  constructor() {
    this.searchGenreData = this.searchGenreData.bind(this);

    this.model = new Model();
    this.view = new View(this.searchGenreData);

    this.initialise();
  }

  initialise() {
    let data = this.model.getLocalStorageData() || this.model.getStaleData();

    this.view.displayGenres(data);

    this.model.getNewData()
      .then((res) => {
        localStorage.setItem('genres', JSON.stringify(res));
        this.view.updateGenres();
      });
  }

  searchGenreData(searchText) {
    const searchResults = this.model.filterData(searchText);

    this.view.displayGenres(searchResults);
    this.view.updateNoResultsMessage(searchResults.length, searchText);
  }
}

new App();