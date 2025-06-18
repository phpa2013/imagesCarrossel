;(function(){
    'use strict'


const sec = document.querySelector('.sec')    
const row = document.querySelector('.row_2')
const divImg = document.querySelectorAll('.contentImg_2')
console.log(divImg)
let tam =  sec.clientWidth

const btnPrevious = document.querySelector('#previous')
const btnNext = document.querySelector('#next')

let startedStoped = null

let startX = 0
let endX = 0


let count = 0

window.addEventListener('resize', ()=> {
    tam = sec.clientWidth
    divImg.forEach(img => {
        img.style.width = `${tam}px`
    })
    moverImg()
   clearInterval(startedStoped) // <- Limpa intervalo anterior
    moverAuto()  
})


divImg.forEach(img => {
  img.style.width = `${tam}px`
})


function moverImg(){
 row.style.transform  = `translateX(${-count * tam}px)`
}

btnNext.addEventListener('click', ()=> {

count++

if(count > divImg.length -1){
    count = 0
}

moverImg()

})


function moverAuto(){

startedStoped = setInterval(function(){
    count++

    if(count > divImg.length -1){
        count = 0
    }
    
    moverImg()
}, 3000)



}

window.addEventListener('load', moverAuto)

sec.addEventListener('mouseenter', () => {
    clearInterval(startedStoped)
})

sec.addEventListener('mouseleave', () => {
    moverAuto()
})

sec.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX
})

sec.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX
    handleSwipe()
})

function handleSwipe(){
    const distancia = endX - startX

    // Define o limite mínimo para considerar swipe
    if(Math.abs(distancia) > 50){
        if(distancia < 0){
            // Swipe para a esquerda → próximo
            count++
            if(count > divImg.length - 1){
                count = 0
            }
        } else {
            // Swipe para a direita → anterior
            count--
            if(count < 0){
                count = divImg.length - 1
            }
        }

        moverImg()
    }
}



})()