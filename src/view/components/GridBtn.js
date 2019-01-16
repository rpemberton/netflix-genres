class GridBtn {
  constructor($el, updateGenreListClass, updateListBtnClass) {
    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateListBtnClass = updateListBtnClass;
  }

  handleClick() {
    this.$el.classList.add('toggle__btn--active');
    this.updateListBtnClass('remove', 'toggle__btn--active');
    this.updateGenreListClass('remove', 'list-view');
  }
}

export default GridBtn;
