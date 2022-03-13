const variable = require("./conf.json");
const { LoginBaseUrl } = require("./test/services/loginBaseUrl");
const { OriginSelect } = require("./test/services/originSelect");
const { ProductSearch } = require("./test/services/productSearch");
const { ReturnHome } = require("./test/services/returnHome");
const { ProductDetails } = require("./test/services/productDetails");
const { ChangeProductColor } = require("./test/services/changeProductColor");
const { AddCart } = require("./test/services/addCart");
const { RemoveCart } = require("./test/services/removeCart");

module.exports = { 
    LoginBaseUrl, 
    OriginSelect, 
    ProductSearch, 
    ReturnHome, 
    ProductDetails,
    ChangeProductColor,
    AddCart,
    RemoveCart,
    variable };