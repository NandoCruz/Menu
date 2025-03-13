let radio = document.querySelector('.manual-btn')
let btnRadio = document.getElementById('.manual-btn')
let containerScroll = document.querySelector('.container-scroll')
let item = containerScroll.querySelectorAll('.nav-auto .auto-btn')

let active = 0
let position = 1
let firtPosition = 1
let lastPosition = item.length -1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){

    position++
    
    if(position > 5){
        position = 1
    }

    document.getElementById('radio' + position).checked = true
    
    active = active + 1 > lastPosition ? 0 : active +1

    let itemOld = containerScroll.querySelector('.nav-auto .auto-btn.active')
    itemOld.classList.remove('active')
    item[active].classList.add('active')
}