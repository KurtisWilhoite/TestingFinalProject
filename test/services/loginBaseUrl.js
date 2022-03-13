const LoginBaseUrl = async (variable) => {
  const { baseUrl } = variable;
  browser.maximizeWindow();
  browser.url(baseUrl);
  browser.pause(2000);
};
module.exports = { LoginBaseUrl };