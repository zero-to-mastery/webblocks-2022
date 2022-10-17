let btn = document.getElementById("bg-btn")
let toggle = false;

btn.addEventListener('click', e => {
  toggle = !toggle;
  
  if(toggle) {
    document.getElementById("bg-btn").style.background = "url('https://i.etsystatic.com/14848056/r/il/e6714b/1411705088/il_fullxfull.1411705088_jcp1.jpg') no-repeat center";
    document.getElementById("bg-btn").style.backgroundSize = 'cover'; 
  }
  else {
      document.getElementById("bg-btn").style.background = "url('https://images.hdqwalls.com/wallpapers/chasing-the-doubt-4c.jpg') no-repeat center";
  }
  document.getElementById("bg-btn").style.backgroundSize = 'cover'; 

})
 