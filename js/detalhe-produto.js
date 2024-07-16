import { displayProductDetails } from "./gerencia-produtos.js";
const params = new URLSearchParams(document.location.search);
const productId = params.get("id");

displayProductDetails(productId);
