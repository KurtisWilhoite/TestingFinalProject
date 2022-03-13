const ReturnHome = async (variable) => {
    const {homeButton} = variable;
  
    await $(homeButton).click();
    await browser.pause(3000);
  };
  module.exports = { ReturnHome };