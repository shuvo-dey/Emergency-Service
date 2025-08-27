function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

getElement("hotline-number").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-icon")) {
    const life = getElement("life").innerText;
    const currentLife = Number(life) + 1;
    getElement("life").innerText = currentLife;
  }
});
