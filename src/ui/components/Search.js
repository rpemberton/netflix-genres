class Search {
  constructor($el, handleInput) {
    this.$el = $el;
    this.$input = this.$el.querySelector('#search-input');

    this.handleInput = handleInput;

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.$el.addEventListener('submit', this.onSubmit)
    this.$input.addEventListener('input', this.onInput);
  }

  onInput() {
    this.handleInput(this.$input.value);
  }

  onSubmit(e) {
    e.preventDefault();
    this.$input.blur();
  }
}

export default Search;