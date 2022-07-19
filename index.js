const imgHolder = document.querySelectorAll('.img-holder')

imgHolder.forEach((p)=> {
p.addEventListener('click', ()=>{
    removeActiveClasses()
    p.classList.add('active')
})
})


function removeActiveClasses(){
    imgHolder.forEach(p=> {
        p.classList.remove('active')
     
        })
}

