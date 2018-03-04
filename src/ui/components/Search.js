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

export default Search;