const RemoveCart = async (variable, insurance) => {
    const {removeInsurance, removeItem} = variable;
  
    if(insurance == true){
        await $(removeInsurance).click();
    }

    await $(removeItem).click();
    await browser.pause(3000);
  };
  module.exports = { RemoveCart };