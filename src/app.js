import 'babel-polyfill';

import scrapedData from './data/genre-data.json';

import Model from './model/model';
import View from './view';

class App {
  constructor() {
    this.searchGenreData = this.searchGenreData.bind(this);

    this.model = new Model();
    this.view = new View(this.searchGenreData);

    this.genreData = scrapedData;

    this.view.displayGenres(this.genreData);

    this.initialise();
  }

  initialise() {
    this.model.loadData()
      .then((res) => {
        this.genreData = res;
        this.view.displayGenres(this.genreData);
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