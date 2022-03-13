const ProductDetails = async (variable, term) => {
    const {selectProduct} = variable;
  
    await $(selectProduct).click();
  
    await browser.pause(3000);
  };
  module.exports = { ProductDetails };
  