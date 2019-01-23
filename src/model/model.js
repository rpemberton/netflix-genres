import staleData from './genres.json';

class Model {
  constructor() {
    this.url = 'whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix';
    this.data = JSON.parse(localStorage.getItem('genres')) || staleData;

    this.getNewData = this.getNewData.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  getNewData() {
    return fetch(`https://cors-anywhere.herokuapp.com/${this.url}`)
      .then(res => res.text())
      .then(res => {
        const htmlData = this.convertToHtml(res);
        const genres = this.convertToModel(htmlData);
        if (genres.length) {
          this.data = genres;
          localStorage.setItem('genres', JSON.stringify(genres));
        }
      });
  }

  convertToHtml(html) {
    const div = document.createElement('div');

    div.innerHTML = html
      .replace(/['"]http.+?['"]/g, '""')
      .replace(/src=".+?"/g, 'src=""');

    return div;
  }

  convertToModel(el) {
    const nodeList = el.querySelectorAll('.entry-inner p');

    const genres = [];

    nodeList.forEach(node => {
      // account for two genres in same <p> tag
      const separatedGenres = node.textContent.split(/\s+(?=\d+ = )/);

      if (separatedGenres.length) {
        separatedGenres.forEach(genre => {
          genres.push(genre);
        })
      } else {
        genres.push(node.textContent);
      }
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
    return this.data
      .filter(({ name }) => (
        name.toLowerCase().includes(term.trim().toLowerCase())
      ));
  }
}

export default Model;
