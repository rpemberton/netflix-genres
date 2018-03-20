class Model {
  constructor() {
    this.url = 'whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix';

    this.loadData = this.loadData.bind(this);
    this.parseResponse = this.parseResponse.bind(this);
  }

  loadData() {
    return fetch(`https://cors-anywhere.herokuapp.com/${this.url}`)
      .then(res => res.text())
      .then(res => {
        const parsedResponse = this.parseResponse(res);
        return this.parse(parsedResponse);
      });
  }

  parseResponse(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
  }

  parse(el) {
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
}

export default Model;