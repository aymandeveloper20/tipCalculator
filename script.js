let btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let billAmount = parseFloat(document.querySelector("#billAmount").value);
  let tipPercentage = parseFloat(
    document.querySelector("#tipPercentage").value
  );
  let tip = (billAmount * tipPercentage) / 100;
  let total = billAmount + tip;
  document.querySelector(".display span").innerHTML = `$${total.toFixed(2)}`;
});
