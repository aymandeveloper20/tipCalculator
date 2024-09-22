let btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let billAmount = parseInt(document.querySelector("#billAmount").value);
  let tipPercentage = parseInt(document.querySelector("#tipPercentage").value);
  let tip = tipPercentage / 100;
  let total = billAmount * tip;
  document.querySelector(".display span").innerHTML = `$${total}`;
});
