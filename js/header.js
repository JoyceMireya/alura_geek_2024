const searchIcon = document.querySelector(".header__search-icon");
const searchBox = document.querySelector(".header__searchbox");
const currentWindowWidth = window.innerWidth;

searchBox.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    window.location.href = `resultado.html?busca=${e.target.value}`;
  }
});

searchIcon.addEventListener("click", () => {
  searchBox.classList.add("header__searchbox--mobile");
  searchBox.focus();
  searchIcon.style.display = "none";
});

onresize = () => {
  if (currentWindowWidth !== window.innerWidth) {
    searchBox.classList.remove("header__searchbox--mobile");
    if (window.innerWidth < 768) {
      searchIcon.style.display = "block";
    } else {
      searchIcon.style.display = "none";
    }
  }
};
