import { displayProducts } from "./gerencia-produtos.js";

const params = new URLSearchParams(document.location.search);
const categoryId = params.get("cat");

displayProducts("category", categoryId);
