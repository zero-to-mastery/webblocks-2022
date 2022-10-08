console.log("hi there");

const bunny = document.querySelector(".dragItem");
const box = document.querySelector(".box");

const handleDragOver = (e) => e.preventDefault();
box.addEventListener("dragover", handleDragOver);

const handleDrop = () => box.append(bunny);
box.addEventListener("drop", handleDrop);
