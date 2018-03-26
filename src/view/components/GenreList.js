class GenreList {
  constructor($el) {
    this.$el = $el;

    this.display = this.display.bind(this);
  }

  display(genres) {
    this.$el.innerHTML = '';

    const f = document.createDocumentFragment();

    genres.forEach(genre => {
      f.appendChild(this.createListItem(genre));
    });

    this.$el.appendChild(f);
  }

  createListItem({ id, name }) {
    const a = document.createElement('a');
    a.className = 'genres__link';
    a.href = `http://www.netflix.com/browse/genre/${id}`;
    a.target = '_blank';
    a.textContent = name;

    const div = document.createElement('div');
    div.className = 'genres__link-wrap';
    div.appendChild(a);

    const li = document.createElement('li');
    li.className = 'genres__item';
    li.appendChild(div);

    return li;
  }
}

export default GenreList;