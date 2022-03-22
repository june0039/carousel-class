const $images = document.querySelector('.carousel_images').children
const $leftBtn = document.querySelector('.carousel_left')
const $rightBtn = document.querySelector('.carpusel_right')

let active = 0;

for (const $image of $images) {
    $image.style.display = 'none'

}

$images[active].style.display = 'block'

function forward() {
    $images[active].style.display = 'none'
    active++

    if (active >= $images.length) active = 0
    
    $images[active].style.display = 'block'
    console.log(active)
}

$rightBtn.addEventListener('click', function () {
    forward()
})