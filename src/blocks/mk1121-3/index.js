let count = 0;
const counter = document.getElementById("count");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const cl = counter.classList;
  const c = "animatedCounter";
  count++;

  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(() => {
    counter.classList.add("animatedCounter");
  }, 1);
});
