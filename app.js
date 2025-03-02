import { getData } from "./fetchDAta.js";
import { UpdateUI } from "./UpdateUI.js";
const url1 = "https://dummyjson.com/products";
getData(url1)
  .then((data) => UpdateUI(data))
  .catch((error) => {
    console.log(error.message);
  });
