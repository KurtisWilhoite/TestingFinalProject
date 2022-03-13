const { LoginBaseUrl, OriginSelect, ProductSearch, 
  ReturnHome, ProductDetails, ChangeProductColor, 
  AddCart, RemoveCart, variable } = require(".");

describe("Automation testing with webdriverIO", () => {
  it("User can open the website", async () => {
    await LoginBaseUrl(variable);
  });
  it("User can accept cookies if necessary", async () => {
    await OriginSelect(variable);
  });
  it("User can search for iPhone 13 Pro", async () => {
    await ProductSearch(variable, "iPhone 13 Pro");
  });
  it("User can return to main page", async () => {
    await ReturnHome(variable);
  });
  it("User can search for iPhone 12", async () => {
    await ProductSearch(variable, "iPhone 12");
  });
  it("User can open product details", async () => {
    await ProductDetails(variable);
  });
  it("User can change product's color", async () => {
    await ChangeProductColor(variable, "Valkoinen");
  });
  it("User can add items to cart with insurance", async () => {
    await AddCart(variable, true);
  });
  it("User can remove items from cart with insurance", async () => {
    await RemoveCart(variable, true);
  });
  it("User can return to main page", async () => {
    await ReturnHome(variable);
  });
});