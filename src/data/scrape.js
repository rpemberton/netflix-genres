/**
 * Scraper for getting the genres on this page:
 * http://whatsonnetflix.com/netflix-hacks/the-netflix-id-bible-every-category-on-netflix
 *
 * Paste the code into the browser dev tools console.
 *
 * Output is in ./genre-data.json
 */

(function scrape() {
  const nodeList = document.querySelectorAll('.wpb_wrapper p');

  const texts = [];
  nodeList.forEach(node => texts.push(node.innerText));

  const filteredTexts = texts.filter(text => /\d+ = /.test(text));

  const uniqueTexts = [...new Set(filteredTexts)];

  const output = uniqueTexts
    .map(item => {
      const temp = item.split(' = ');
      return {
        id: temp[0].trim(),
        name: temp[1].trim()
      };
    })
    .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

  console.log(JSON.stringify(output, null, 2));
})()
