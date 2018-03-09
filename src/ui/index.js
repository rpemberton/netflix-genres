import Search from './components/Search';
import GridBtn from './components/GridBtn';
import ListBtn from './components/ListBtn';
import GenreList from './components/GenreList';

const $ = query => document.querySelector(query);

class UI {
  constructor(searchGenreData) {
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

    this.search = new Search(this.$els.search, searchGenreData);
    this.gridBtn = new GridBtn(this.$els.gridBtn, this.updateGenreListClass, this.updateListBtnClass);
    this.listBtn = new ListBtn(this.$els.listBtn, this.updateGenreListClass, this.updateGridBtnClass);
    this.genreList = new GenreList(this.$els.genreList);
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

export default UI;
