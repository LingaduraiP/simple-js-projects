'use strict';

const modal=document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const closemodal=document.querySelector('.close-modal')

const showModal=()=>{
   modal.classList.remove('hidden')
   overlay.classList.remove('hidden')
}

const hideFn=()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closemodal.addEventListener('click', hideFn())
    
document.addEventListener('keydown', (e)=>{
        if(e.key==='Escape'){
            hideFn()
        }
})

overlay.addEventListener('click',hideFn)

