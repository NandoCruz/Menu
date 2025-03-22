let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let links = document.querySelectorAll('.js-link')
let sections = document.querySelectorAll('.section')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')

let listItens = container.querySelectorAll('.list .list-item')
let itemAuto = container.querySelectorAll('.nav-auto .auto-btn')

let cont = 1
let active = 0
let firtPosition = 0
let lastPosition = listItens.length -1

window.addEventListener('scroll', () => {

    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop
        let heighSection = section.offsetHeight
        let idSection = section.getAttribute('id')

        if(top >= offset && top < offset + heighSection){
            
            links.forEach(link =>{
                link.classList.remove('active')

                document.querySelector(`header nav a[href*='${idSection}']`).classList.add('active')
            })
        }
    })
})

document.getElementById('radio1').checked = true


btnNext.onclick = () => moveItemClick('next')
btnBack.onclick = () => moveItemClick('back')

setInterval(() => {
    moveItemFrom()
    proximaImg()
}, 3000)

function moveItemClick(type){
    let listItens = container.querySelectorAll('.list .list-item')
    
    if (type === 'next'){
        list.appendChild(listItens[0])
        container.classList.add('next')
        document.getElementById('radio' + cont).checked = false
        cont++
        active ++     

    } else {
        list.prepend(listItens[listItens.length-1])
        container.classList.add('back')
        document.getElementById('radio' + cont).checked = false
        cont--
        active--     

    }

    setInterval(() =>{
        listItens.classList.remove('next')
        listItens.classList.remove('back')
    }, 2000)
}

function moveItemFrom(type){
    let listItens = container.querySelectorAll('.list .list-item')
    
    if (type === 'next'){
        list.prepend(listItens[listItens.length-1])        
        container.classList.add('next')
    } else {
        list.appendChild(listItens[0])
        container.classList.add('back')
    }

    setInterval(() =>{
        listItens.classList.remove('next')
        listItens.classList.remove('back')
    }, 2000)
}

function proximaImg(){

    cont++
    
    if(cont > 4 ){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
    
    active = active + 1 > lastPosition ? 0 : active +1

    let itemOld = container.querySelector('.nav-auto .auto-btn.active')
    itemOld.classList.remove('active')
    itemAuto[active].classList.add('active')

    let containerOld = container.querySelector('.list .list-item.active')
    containerOld.classList.remove('active')
    container[active].classList.add('active')
}