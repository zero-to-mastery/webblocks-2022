const init = () => {
  const div = document.querySelector(`.icon`)

  div.addEventListener(`mouseenter`, (e) => {
    addHandeler();
  });

  div.addEventListener(`mouseleave`, (e) => {
    removeHandeler();
  });
}

function addHandeler() {
  const div2 = document.querySelector(`.icon2`);
  div2.classList.add("testjsclass");
} 

function removeHandeler() {
  const div2 = document.querySelector(`.icon2`);
  div2.classList.remove("testjsclass");
} 

init()