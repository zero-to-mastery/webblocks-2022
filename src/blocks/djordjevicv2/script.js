const but=document.querySelector("button");
const offset=100;


function getDistanceFromButtonCenter(butBoxPosition,mousePosition,butBoxSize){
    return butBoxPosition-mousePosition+butBoxSize / 2;
}

function setButtonPosition(left,top){
    
    const windowBox = document.body.getBoundingClientRect();
    const butBox = but.getBoundingClientRect();
    if(getDistanceFromButtonCenter(left, windowBox.left, butBox.width) < 0) {
        left = windowBox.right - butBox.width - offset;
      }
      if(getDistanceFromButtonCenter(left, windowBox.right, butBox.width) > 0) {
        left = windowBox.left + offset;
      }
      if(getDistanceFromButtonCenter(top, windowBox.top, butBox.height) < 0) {
        top = windowBox.bottom - butBox.height - offset;
      }
      if(getDistanceFromButtonCenter(top, windowBox.bottom, butBox.height) > 0) {
        top = windowBox.top + offset;
      }
        but.style.left=`${left}px`;
        but.style.top=`${top}px`;
}


but.addEventListener("click",()=>{
    window.close();
});

document.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    const butBox = but.getBoundingClientRect();
    const horizontalDistance = getDistanceFromButtonCenter(butBox.x, mouseX, butBox.width);
    const verticalDistance = getDistanceFromButtonCenter(butBox.y, mouseY, butBox.height);
    const verticalOffset = butBox.height/2+offset;
    const horizontalOffset = butBox.width/2+offset;

    if(
        Math.abs(horizontalDistance) <= horizontalOffset && 
        Math.abs(verticalDistance) <= verticalOffset
    )
    {
        setButtonPosition(butBox.x + horizontalOffset / horizontalDistance * 50,
        butBox.y + verticalOffset / verticalDistance * 50);
    }
});
