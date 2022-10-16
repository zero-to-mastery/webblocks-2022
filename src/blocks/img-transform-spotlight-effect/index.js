const frontImage = document.getElementsByClassName("front");
const childList = frontImage[0].children;
let row = 0;
let column = 0;

for( let index = 0; index < childList.length; index++) {
  if (index % 10 === 0) {
    row += 1;
    column = 0;
  }
  childList[index].style.backgroundPosition = `${10*(column)}% ${10*row}%`
  column+= 1;
  
  childList[index].addEventListener("mouseover", (e) => {
    setEffect(childList, index);
  })
  childList[index].addEventListener("mouseleave", (e) => {
    removeEffect(childList, index);
  })
}

function setStyle(target, key, value) {
  if(!target) return
  target['style'][key] = value;
}

const setOpacity = (value) => (target) => setStyle(target, 'opacity', value);

const setTransform = (value) => (target) => setStyle(target, 'transform', value);

const setEffect = (target, index) => {
  const listIdx = [index, index+1, index-1, index+9, index-9, index+10, index-10, index+11, index-11]
  listIdx.forEach( (idx) => {
    setOpacity(0.25)(target[idx]);
  });
}

const removeEffect = (target, index) => {
const listIdx = [index, index+1, index-1, index+9, index-9, index+10, index-10, index+11, index-11]
  listIdx.forEach( (idx) => {
    setOpacity(1)(target[idx]);
  });
}