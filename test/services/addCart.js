const AddCart = async (variable, insurance) => {
    const {addToCart, addToInsurance, addToCartFinal} = variable;
  
    await $(addToCart).click();
    await browser.pause(3000);
  
    if(insurance == true){
      await $(addToInsurance).click();
    }

    await $(addToCartFinal).click();
    await browser.pause(3000);
  };
  module.exports = { AddCart };