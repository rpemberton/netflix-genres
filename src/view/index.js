import Search from './components/search';
import BtnGrid from './components/BtnGrid';
import BtnList from './components/BtnList';
import GenreList from './components/genreList';

const $ = query => document.querySelector(query);

class View {
  constructor(searchGenres) {
    this.$els = {
      search: $('#search'),
      btnGrid: $('#grid-btn'),
      btnList: $('#list-btn'),
      genreList: $('#genre-list'),
      noResults: $('#genres__no-results')
    };

    this.updateBtnGridClass = this.updateBtnGridClass.bind(this);
    this.updateBtnListClass = this.updateBtnListClass.bind(this);
    this.updateGenreListClass = this.updateGenreListClass.bind(this);

    this.search = new Search(this.$els.search, searchGenres);
    this.btnGrid = new BtnGrid(this.$els.btnGrid, this.updateGenreListClass, this.updateBtnListClass);
    this.btnList = new BtnList(this.$els.btnList, this.updateGenreListClass, this.updateBtnGridClass);
    this.genreList = new GenreList(this.$els.genreList);
  }

  updateBtnGridClass(type, className) {
    this.$els.btnGrid.classList[type](className);
  }

  updateBtnListClass(type, className) {
    this.$els.btnList.classList[type](className);
  }

  updateGenreListClass(type, className) {
    this.$els.genreList.classList[type](className);
  }

  updateGenres() {
    this.search.onInput();
  }

  displayGenres(data) {
    this.genreList.display(data);
  }

  updateNoResultsMessage(results, searchTerm) {
    if (!results) {
      this.$els.noResults.innerHTML = `No results found for <strong>${searchTerm}</strong>`;
      this.$els.noResults.classList.add('genres__no-results--show');
      return;
    }

    this.$els.noResults.classList.remove('genres__no-results--show');
  }
}

export default View;
