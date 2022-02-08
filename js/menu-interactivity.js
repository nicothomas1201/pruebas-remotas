export function closeMenuMobile(menuMobile, icon){
  icon.classList.remove('fa-times')
  icon.classList.add('fa-bars')

  menuMobile.classList.remove('is-open')
  menuMobile.classList.add('is-close')
  return false
}

export function openMenuMobile(menuMobile, icon){
  icon.classList.remove('fa-bars')
  icon.classList.add('fa-times')

  menuMobile.classList.remove('is-close')
  menuMobile.classList.add('is-open')  
  return true
}