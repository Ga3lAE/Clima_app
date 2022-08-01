let menu = document.getElementById ('Menu_button')
let cerrar = document.getElementById('Close_button')
let lista = document.getElementById ('Opciones_ul')
let body = document.getElementById('body')

menu.addEventListener('click',() =>{
    menu.classList.toggle('unactive')
    lista.classList.toggle('second_active')
    cerrar.classList.toggle('active')    
})
cerrar.addEventListener('click',() =>{
    menu.classList.toggle('unactive')
    lista.classList.toggle('second_active')
    cerrar.classList.toggle('active')    
})