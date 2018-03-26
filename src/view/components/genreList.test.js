import GenreList from './genreList';

const TestGenreList = new GenreList();

const testData = [
  {
    "id": "1365",
    "name": "Action & Adventure"
  },
];

test('outputs the correct html for an item', () => {
  const listItem = '<li class=\"genres__item\"><div class=\"genres__link-wrap\"><a class=\"genres__link\" href=\"http://www.netflix.com/browse/genre/1365\" target=\"_blank\">Action &amp; Adventure</a></div></li>';

  expect(TestGenreList.createListItem(testData[0]).outerHTML).toEqual(listItem);
});
