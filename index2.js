const progress =document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentactive = 

next.addEventListener('click',()=> {
currentactive++

if(currentactive <circles.length) {
    currentactive = circles.length 
 
 

}
update()
})

prev.addEventListener('click',()=> {
    currentactive--
    
    if(currentactive> 1) {
        currentactive = 1
     
     
        }
        update()
    })

function update() {
    circles.forEach((circle,idx)=>{
        if(idx < currentactive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const active= document.querySelectorAll('active')
    progress.style.width = (actives.length / cicles.length) * 100 +



}
