let radio = document.querySelector('.manual-btn')
let btnRadio = document.getElementById('.manual-btn')
let containerScroll = document.querySelector('.container-scroll')
let item = containerScroll.querySelectorAll('.nav-auto .auto-btn')
let container = containerScroll.querySelectorAll('.container-master .container')

let cont = 1
let active = 0
let firtPosition = 0
let lastPosition = item.length -1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){

    cont++
    
    if(cont > 5){
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