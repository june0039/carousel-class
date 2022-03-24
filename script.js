const $images = document.querySelector('.carousel_images').children
const $leftBtn = document.querySelector('.carousel_left')
const $rightBtn = document.querySelector('.carpusel_right')

const $pipsWrapper = document.querySelector('.carousel_pips')


let active = 0
let timer 

const interval = 5

for (let i = 0; i < $images.length; i++) {

    let $pip = document.createElement('button')
    $pipsWrapper.appendChild($pip)
    $pip.classList.add('carousel_pip')
    $pip.setAttribute('data-index', i)

}

const $pips = document.querySelector('.carousel_pips').children


$images[active].classList.add('carousel--show')
$pips[active].classList.add('carousel--active')

function jumpTo(_newIndex) {
   
  $pips[active].classList.remove('carousel--active')
  $pips[active].classList.remove('carousel--active')
    
    active = _newIndex

    if (active < 0) active = $images.length - 1
    else if (active >= $images.length) active = 0
   
    $images[active].classList.add('carousel--show')
    $pips[active].classList.add('carousel--active')

     clearInterval(timer)
     timer = setInterval(forward, interval * 1000)

    }


$pipsWrapper.addEventListener('click', function (e)
{
    if (e.target.classList.contains('carousel_pip')) {

        jumpTo(e.target.dataset.index)
 
    }
    
})


$leftBtn.addEventListener('click', function () {
    
    jumpTo()
})

$rightBtn.addEventListener('click', function () {

   jumpTo()
})
timer = setInterval(jumpTo, intrval *1000) 
    