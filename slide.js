let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let radio = document.querySelector('.manual-btn')

let containerScroll = document.querySelector('.container-scroll')
let list = document.querySelector('.container-scroll .container-master')
let container = containerScroll.querySelectorAll('.container-master .container')

let item = containerScroll.querySelectorAll('.nav-auto .auto-btn')

let cont = 1
let active = 0
let firtPosition = 0
let lastPosition = item.length -1

document.getElementById('radio1').checked = true

btnNext.onclick = () => moveItemClick('next')
btnBack.onclick = () => moveItemClick('back')

function moveItemClick(type){
    let listItens = containerScroll.querySelectorAll('.container-master .container')
    
    if (type === 'next'){
        list.appendChild(listItens[0])
        containerScroll.classList.add('next')
    } else {
        list.prepend(listItens[listItens.length-1])
        containerScroll.classList.add('back')
    }

    setInterval(() =>{
        containerScroll.classList.remove('next')
        containerScroll.classList.remove('back')
    }, 2000)
}

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){

    cont++
    
    if(cont >4 ){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
    
    active = active + 1 > lastPosition ? 0 : active +1

    let itemOld = containerScroll.querySelector('.nav-auto .auto-btn.active')
    itemOld.classList.remove('active')
    item[active].classList.add('active')

    let containerOld = containerScroll.querySelector('.container-master .container.active')
    containerOld.classList.remove('active')
    container[active].classList.add('active')
}