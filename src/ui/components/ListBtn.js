class ListBtn {
  constructor($el, updateGenreListClass, updateGridBtnClass) {
    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateGridBtnClass = updateGridBtnClass;
  }

  handleClick() {
    this.$el.classList.add('toggle-view__btn--active');
    this.updateGridBtnClass('remove', 'toggle-view__btn--active');
    this.updateGenreListClass('add', 'list-view');
  }
}

export default ListBtn;