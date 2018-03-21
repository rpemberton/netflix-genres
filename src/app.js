import 'babel-polyfill';

import Model from './model/model';
import View from './view';

class App {
  constructor() {
    this.searchGenreData = this.searchGenreData.bind(this);

    this.model = new Model();
    this.view = new View(this.searchGenreData);

    this.genreData = [];

    this.initialise();
  }

  initialise() {
    const localStorageData = this.model.getLocalStorageData();

    if (localStorageData) {
      this.genreData = localStorageData;
      console.log('using local storage');
    } else {
      this.genreData = this.model.getStaleData();
      console.log('using stale data');
    }

    this.view.displayGenres(this.genreData);

    this.model.getNewData()
      .then((res) => {
        console.log('using new data');
        this.genreData = res;
        localStorage.setItem('genres', JSON.stringify(this.genreData));
        this.view.updateGenres();
      });
  }

  searchGenreData(searchText) {
    const searchResults = this.genreData
      .filter(({ name }) => name.toLowerCase()
        .includes(searchText.trim().toLowerCase())
      );

    this.view.displayGenres(searchResults);
    this.view.updateNoResultsMessage(searchResults.length, searchText);
  }
}

new App();