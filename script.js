const $images = document.querySelector('.carousel_images').children
const $leftBtn = document.querySelector('.carousel_left')
const $rightBtn = document.querySelector('.carpusel_right')

const $pipsWrapper = document.querySelector('.carousel_pips')


let active = 0

for (let i = 0; i < $images.length; i++) {

    let $pip = document.createElement('button')
    $pipsWrapper.appendChild($pip)
    $pip.classList.add('carousel_pip')
    $pip.setAttribute('data-index', i)

}

const $pips = document.querySelector.('.carousel_pips').children


$images[active].classList.add('carousel--show')

$pipsWrapper.addEventListener('click', function (e)
{
    if (e.target.classList.contains('carousel_pip')) {
        $images[active].classList.remove('carousel--show')
        
        active = e.target.dataset.index

        $images[active].classList.add('carousel--show')
        $pips[active].classList.add('carousel--active')


        clearInterval(timer)
        timer = setInterval(forward, 400)
        
    }
    
})

function backward() {

    $images[active].classList.remove('carousel--show')
    active--

    if ([active] == undefined) active = $images.length - 1
    $images[active].classList.add('carousel--show')
    
     clearInterval(timer)
     timer = setInterval(forward, 400)
    
}

$leftBtn.addEventListener('click', function () {
    
    backward()
})

function forward() {

    $images[active].classList.remove('carousel--show')
    active++

    if (active >= $images.length) active = 0
    
    $images[active].classList.add('carousel--show')

     clearInterval(timer)
     timer = setInterval(forward, 400)
    
}

$rightBtn.addEventListener('click', function () {

   forward()
})

setInterval(forward, 4000)