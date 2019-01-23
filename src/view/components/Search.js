class Search {
  constructor($el, searchGenres) {
    this.$el = $el;
    this.$input = this.$el.querySelector('#search-input');

    this.searchGenres = searchGenres;

    this.onInput = this.onInput.bind(this);

    this.$input.addEventListener('input', this.onInput);
  }

  onInput() {
    this.searchGenres(this.$input.value);
  }
}

export default Search;
