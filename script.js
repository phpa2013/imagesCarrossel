;(function(){
'use strict'



const view = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible')
        }else {
            entry.target.classList.remove('visible')
        }
    })
},{
    threshold: 0.15
});


document.querySelectorAll('.contentImg').forEach(el => {
    view.observe(el)
})



})()