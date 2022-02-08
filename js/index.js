import { openMenuMobile, closeMenuMobile } from "./menu-interactivity.js"
import { isIntersecting } from './observer.js'

const $buttonMobile = document.querySelector('#menu-mobile')
const $icon = document.querySelector('#menu-mobile i')
const $menuMobile = document.querySelector('.menu-mobile')
const $sectionFrame = document.querySelectorAll('.section-frame')

let isOpen = false
$buttonMobile.addEventListener('touchstart', handleTouch)
function handleTouch(){
  
  if(isOpen === false){
    isOpen = openMenuMobile($menuMobile, $icon)
  } else{
    isOpen = closeMenuMobile($menuMobile, $icon)
  }
}

$sectionFrame.forEach(item => {
  isIntersecting(item)
})