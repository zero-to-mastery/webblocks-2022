


function calculate(unit) {
  const totalLitres = 2.7
  const totalCups = 10.8
  let width = 0
  if(unit == 'cups'){
    const water = document.getElementById('waterCups').value
    document.getElementById('water').value = (water * 0.250)
    width = Math.round(water/totalCups*100)
    document.getElementById('chart1Text').innerHTML = `${width}% of recommended daily intake of water`

  } else{
    const water = document.getElementById('water').value
    document.getElementById('waterCups').value = (water * 4)
    width = Math.round(water/totalLitres*100)
    document.getElementById('chart1Text').innerHTML = `${width}% of recommended daily intake of water`
  }

  const top = document.getElementById('top')
  top.animate([
    {
      width: "0",
    },
    {
      width: `${width}%`
    }
    
  ], {
    duration: 1000,
    easing: 'cubic-bezier(0.57, -0.04, 0.41, 1.13)',
    fill: 'forwards'
  })

  // text.animate([
  //   {
  //     opacity: 0,
  //     transform: 'translateY(20%)'
  //   },
  //   { 
  //     opacity: "100%",
  //     transform: 'translateY(0%)'
  //   }
  // ])
}