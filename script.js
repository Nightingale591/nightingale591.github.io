const payBtn = document.getElementById("payBtn");
payBtn.addEventListener("click", () => {
  const amount = document.querySelector("input[type='number']").value;
  window.open(`https://mpesa.co.ke/lipa/7812664?amount=${amount}`, '_blank');
});
