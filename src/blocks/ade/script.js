const plusOne= document.getElementById('plusOne')
const plusTwo= document.getElementById('plusTwo')
const plusThree= document.getElementById('plusThree')
const plus1= document.getElementById('plus1')
const plus2= document.getElementById('plus2')
const plus3= document.getElementById('plus3')
const score1=document.getElementById('score1')
const score2=document.getElementById('score2')
const newGame=document.getElementById('new-btn')
const home=document.getElementById('home')
const guest=document.getElementById('guest')
let count1 =0
let count2 =0
let total=0

function winning(){
    if(count1>0||count2>0){
        if (count1>count2){
            home.className='win'
            guest.className=''
        }else if (count2 >count1){
            guest.className='win'
            home.className=''
        }else{
            guest.className=''
            home.className=''
        }
    }
}


    plusOne.addEventListener('click',function(){
        count1++
        let total=count1
        score1.textContent=count1
        winning()
    })

    plusTwo.addEventListener('click',function(){
        count1+=2
        let total=count1
        score1.textContent=count1
        winning()
    })
    
    plusThree.addEventListener('click',function(){
        count1+=3
        let total=count1
        score1.textContent=count1
        winning()
    })


    plus1.addEventListener('click',function(){
        count2++
        score2.textContent=count2
        winning()
    })
    
    plus2.addEventListener('click',function(){
        count2+=2
        score2.textContent=count2
        winning()
    })
    
    plus3.addEventListener('click',function(){
        count2+=3
        score2.textContent=count2
        winning()
    })

    

newGame.addEventListener('click',function(){
    guest.className=''
    home.className=''
    count1=0
    count2=0
    score1.textContent=0
    score2.textContent=0
})
