const $images = document.querySelector(
    '.carousel_images').children
const $leftBtn = document.querySelector(
    '.carousel_left')
const $rightBtn = document.querySelector(
    '.carpusel_right')

let active = 0

//for (const $image of $images) {
  //  $image.style.display = 'none'

//}

$images[active].classList.add= ('carousel--show')

function backward() {
    $images[active].classList.remove = 'none'
    active--

    if ([active] == undefined) active = $images.length - 1
    $images[active].style.display = 'block'
    
    
}

$leftBtn.addEventListener('click', function () {
    
    backward()
})

function forward() {
    $images[active].style.display = 'none'
    active++

    if (active >= $images.length) active = 0
    
    $images[active].style.display = 'block'
    
}

$rightBtn.addEventListener('click', function () {

   forward()
})

setInterval(forward, 4000)