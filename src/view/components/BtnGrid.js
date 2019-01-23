class BtnGrid {
  constructor($el, updateGenreListClass, updateBtnListClass) {
    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateBtnListClass = updateBtnListClass;
  }

  handleClick() {
    this.$el.classList.add('toggle__btn--active');
    this.updateBtnListClass('remove', 'toggle__btn--active');
    this.updateGenreListClass('remove', 'list-view');
  }
}

export default BtnGrid;
