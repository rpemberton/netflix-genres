class GenreList {
  constructor($el) {
    this.$el = $el;

    this.display = this.display.bind(this);
  }

  display(genres) {
    this.$el.innerHTML = this.convertToListItems(genres);
  }

  convertToListItems(data) {
    return data.map(({ id, name }) => `
      <li class="genres__item">
        <div class="genres__link-wrap">
          <a class="genres__link" href="http://www.netflix.com/browse/genre/${id}" target="_blank">
            ${name}
          </a>
        </div>
      </li>
    `)
    .join('');
  }
}

export default GenreList;