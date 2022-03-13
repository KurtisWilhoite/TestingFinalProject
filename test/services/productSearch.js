const ProductSearch = async (variable, term) => {
  const {searchBar} = variable;

  await $(searchBar).clearValue();
  await $(searchBar).click();
  await $(searchBar).keys(term);
  await browser.keys('Enter');

  await browser.pause(3000);
};
module.exports = { ProductSearch };