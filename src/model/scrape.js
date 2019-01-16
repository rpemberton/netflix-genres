/**
 * Scraper for getting the genres on this page:
 * https://www.whats-on-netflix.com/news/the-netflix-id-bible-every-category-on-netflix
 *
 * Paste the code into the browser dev tools console.
 *
 * Output is in ./genres.json
 */

(function scrape() {
  const nodeList = document.querySelectorAll('.entry-inner p');

  const genres = [];

  nodeList.forEach(node => {
    // account for two genres in same <p> tag
    const separatedGenres = node.textContent.split(/\s+(?=\d+ = )/);

    if (separatedGenres.length) {
      separatedGenres.forEach(genre => {
        genres.push(genre);
      });
    } else {
      genres.push(node.textContent);
    }
  });

  const uniqueGenres = genres
    .filter(text => /^\d+ = .+/.test(text))
    .reduce((acc, text) => {
      const [ id, name ] = text.split(' = ');
      acc[id] = { id, name };
      return acc;
    }, {});

  const output = Object.values(uniqueGenres).sort((a, b) => a.name > b.name ? 1 : -1);

  console.log(JSON.stringify(output, null, 2));
})();
