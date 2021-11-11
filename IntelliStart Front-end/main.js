const myPhoto = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line')
let count = 0
let width = 324



document.querySelector('.slider-next').addEventListener('click',()=>{
    count++
    console.log(count)
    if(count >=  myPhoto.length) count = 0  
    rolSlider()
})

document.querySelector('.slider-prev').addEventListener('click',()=>{
    count--
    console.log(count)
    if(count < 0 ) count = myPhoto.length - 1
    rolSlider()
})

const rolSlider = ()=>{
    sliderLine.style.transform = `translate(-${count * width}px)`
}

