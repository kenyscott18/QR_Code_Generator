const generateBtn = document.getElementById("generate-button");
const qrWrapper = document.getElementById("qr-box");
const qrCode = document.getElementById("qr-code");
const statusMsg = document.getElementById("response");
const clearButton = document.getElementById("clear-button");

generateBtn.addEventListener("click", () => {

  const input = document.getElementById("user-input").value;

  if(input.trim() === "") {
    alert("Please enter text");
    return;
  }

  qrCode.innerHTML = "";

  new QRCode(qrCode, {
    text: input,
    width: 220,
    height: 220
  });

  qrWrapper.classList.add("show");

  statusMsg.textContent = "QR code generated successfully!";
  statusMsg.classList.add("show");
  clearButton.classList.add("show");
});

document.getElementById("user-input").addEventListener("input", () => {
 statusMsg.classList.remove("show");
});

clearButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});