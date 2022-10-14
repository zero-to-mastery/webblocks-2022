function clickMe() {
  

  const top = document.getElementById('top')
  top.animate([
    {
      width: "0",
    },
    {
      width: "45%"
    }
    
  ], {
    duration: 1000,
    easing: 'cubic-bezier(0.57, -0.04, 0.41, 1.13)',
    fill: 'forwards'
  })
}