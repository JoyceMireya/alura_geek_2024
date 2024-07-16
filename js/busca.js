import { displayProducts } from "./gerencia-produtos.js";

const params = new URLSearchParams(document.location.search);
const keywords = params.get("busca");

displayProducts("search", keywords);
