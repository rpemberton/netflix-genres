import staleData from './genre-data.json';

class Model {
  constructor() {
    this.url = 'whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix';
    this.genreData = [];

    this.getNewData = this.getNewData.bind(this);
    // this.convertToHtml = this.convertToHtml.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  getStaleData() {
    return staleData;
  }

  getLocalStorageData() {
    return JSON.parse(localStorage.getItem('genres'));
  }

  getNewData() {
    return fetch(`https://cors-anywhere.herokuapp.com/${this.url}`)
      .then(res => res.text())
      .then(res => {
        const htmlData = this.convertToHtml(res);
        this.genreData = this.convertToModel(htmlData);
        localStorage.setItem('genres', this.genreData);
        return this.genreData;
      });
  }

  convertToHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
  }

  convertToModel(el) {
    const nodeList = el.querySelectorAll('.articleBody p');

    const genres = [];

    nodeList.forEach(node => {
      // account for two genres in same <p> tag
      const separatedGenres = node.textContent.split(/\n/);

      separatedGenres.forEach(genre => {
        genres.push(genre);
      });
    });

    const output = genres
      .filter(text => /^\d+ = .+/.test(text))
      .reduce((acc, text) => {
        const [ id, name ] = text.split(' = ');
        acc[id] = { id, name };
        return acc;
      }, {});

    return Object.values(output).sort((a, b) => a.name > b.name ? 1 : -1);
  }

  filterData(term) {
    return this.genreData
      .filter(({ name }) => (
        name.toLowerCase().includes(term.trim().toLowerCase())
      ));
  }
}

export default Model;