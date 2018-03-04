import scrapedData from './data/genre-data.json';

import UI from './ui';

class App {
  constructor() {
    this.searchGenreData = this.searchGenreData.bind(this);

    this.ui = new UI(this.searchGenreData);

    this.genreData = scrapedData;

    this.ui.displayGenres(this.genreData);
  }

  searchGenreData(searchText) {
    const searchResults = this.genreData
      .filter(({ name }) => name.toLowerCase()
        .indexOf(searchText.trim().toLowerCase()) > -1
      );

    this.ui.displayGenres(searchResults);
    this.ui.updateNoResultsMessage(searchResults.length, searchText);
  }
}

new App();