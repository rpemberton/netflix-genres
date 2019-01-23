class BtnList {
  constructor($el, updateGenreListClass, updateBtnGridClass) {
    this.$el = $el;

    this.handleClick = this.handleClick.bind(this);

    this.$el.addEventListener('click', this.handleClick);

    this.updateGenreListClass = updateGenreListClass;
    this.updateBtnGridClass = updateBtnGridClass;
  }

  handleClick() {
    this.$el.classList.add('toggle__btn--active');
    this.updateBtnGridClass('remove', 'toggle__btn--active');
    this.updateGenreListClass('add', 'list-view');
  }
}

export default BtnList;
