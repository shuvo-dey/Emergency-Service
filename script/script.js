function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// Life count
getElement("hotline-number").addEventListener("click", function (e) {
  if (e.target.className.includes("heart-icon")) {
    const life = getElement("life").innerText;
    const currentLife = Number(life) + 1;
    getElement("life").innerText = currentLife;
  }
});

getElement("hotline-number").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const lastCoin = getElement("coin").innerText;
    const currentCoin = Number(lastCoin) - 20;
    const callBtn = e.target;
    const serviceName =
      callBtn.parentNode.parentNode.parentNode.children[1].children[0]
        .innerText;
    const serviceNumber =
      callBtn.parentNode.parentNode.parentNode.children[2].innerText;
    if (currentCoin >= 0) {
      getElement("coin").innerText = currentCoin;
      alert(
        `Connecting you now. \nCalling \n${serviceName} :  ${serviceNumber}`
      );
    } else {
      alert(
        "আপনার পর্যাপ্ত কয়েন নেই! \nকল করতে আরও কয়েন সংগ্রহ করুন। \nNot enough coins! \nPlease add more coins to make this call."
      );
    }
  }
});
