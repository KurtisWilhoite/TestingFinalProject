const OriginSelect = async (variable) => {
  browser.maximizeWindow();
  const { getVarif, allowCookies } = variable;
  const getVerificationTitle = await $(getVarif).getText();
  browser.pause(2000);
  if (getVerificationTitle === getVarif) {
    await $(allowCookies).click();
    return true;
  } else {
    await $(allowCookies).click();
  }
  browser.pause(2000);
};
module.exports = { OriginSelect };