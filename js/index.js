const $buttonMobile = document.querySelector('#menu-mobile')
const $icon = document.querySelector('#menu-mobile i')
const $menuMobile = document.querySelector('.menu-mobile')

function closeMenuMobile(){
  $icon.classList.remove('fa-times')
  $icon.classList.add('fa-bars')

  $menuMobile.style.display = 'none'
  return false
}

function openMenuMobile(){
  $icon.classList.remove('fa-bars')
  $icon.classList.add('fa-times')

  $menuMobile.style.display = 'flex'
  
  return true
}


let isOpen = false
$buttonMobile.addEventListener('touchstart', handleTouchClose)
function handleTouchClose(){
  
  if(isOpen === false){
    isOpen = openMenuMobile()
  } else{
    isOpen = closeMenuMobile()
  }
}

