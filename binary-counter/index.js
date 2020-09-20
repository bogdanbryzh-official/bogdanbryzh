const output = document.querySelector(".output");
const togglers = Array.from(
  document.querySelectorAll(".active .cell:not(.output)")
);

const calc = () => {
  let result = 0;
  let arr = togglers
    .map((num) => {
      if (num.innerText == "1") {
        return num.dataset.num;
      }
    })
    .filter((item) => typeof item === "string");
  arr.forEach((item) => {
    result += parseInt(item);
  });
  output.innerText = result;
};

const toggle = (target) => {
  target.innerText = target.innerText == "0" ? "1" : "0";
  calc();
};

togglers.forEach((toggler) => {
  toggler.addEventListener("click", (e) => {
    e.preventDefault();
    toggle(toggler);
  });
});