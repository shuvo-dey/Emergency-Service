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

// call button work
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
    const callHistory = getElement("call-history");
    const newCallHistory = document.createElement("div");
    const formattedTime = new Date().toLocaleTimeString();
    newCallHistory.innerHTML = `                
    <div class="bg-gray-100 shadow-sm rounded p-1 mb-2">
                    <div class="md:flex justify-between items-center gap-1">
                        <h2 class=" md:font-semibold text-sm md:text-[1rem]">${serviceName}</h2>
                        <p class="font-thin text-[0.6rem] md:text-[0.8rem]">${formattedTime}</p>
                    </div>
                    <div>
                        <h5 class="text-gray-600 text-[0.9rem] font-semibold">${serviceNumber}</h5>
                    </div>
                </div>`;
    if (currentCoin >= 0) {
      getElement("coin").innerText = currentCoin;
      callHistory.prepend(newCallHistory);
      alert(
        `Connecting you now.... \n📞 Calling \n${serviceName} :  ${serviceNumber}`
      );
    } else {
      alert(
        "❌ আপনার পর্যাপ্ত কয়েন নেই! \nকল করতে কমপক্ষে ২০টি কয়েন লাগবে। \n ❌Not enough coins! \nPlease add minimum 20 coins to make this call."
      );
    }
  }
});

// clear button work
getElement("clear").addEventListener("click", function () {
  const callHistory = getElement("call-history");
  callHistory.innerHTML = "";
});

// copy button work
getElement("hotline-number").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-btn")) {
    const copy = getElement("copy").innerText;
    const copyCount = Number(copy) + 1;
    getElement("copy").innerText = copyCount;
    const copyBtn = e.target;
    const serviceName =
      copyBtn.parentNode.parentNode.parentNode.children[1].children[0]
        .innerText;
    const serviceNumber =
      copyBtn.parentNode.parentNode.parentNode.children[2].innerText;
    copyToClipboard(serviceNumber, serviceName);
  }
});

//copy function
async function copyToClipboard(textToCopy, serviceName) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert(`${serviceName}'s has been copied to your clipboard!`);
  } catch (err) {
    console.error("Failed to copy text: ", err);
    alert("Failed to copy number. Please try again.");
  }
}
