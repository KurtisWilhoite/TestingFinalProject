const ChangeProductColor = async (variable, color) => {
  const {selectColorChange} = variable;

  await $(selectColorChange).click();
  await $("//*[text()[contains(.,'"+color+"')]]").click();

  await browser.pause(3000);
};
module.exports = { ChangeProductColor };