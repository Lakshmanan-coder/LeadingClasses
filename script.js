const button = document.querySelector('.hamburger')
const div = document.querySelector('.collapse')


button.addEventListener('click',()=>{
    div.classList.toggle('transform')
})
