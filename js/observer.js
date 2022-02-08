function animateFrame(value, item){
  if(value === true){
    item.style.animation = 'aparecer .3s linear forwards'
  }
}

export function isIntersecting(item){
  let observer = new IntersectionObserver((entries, observer) =>{
    animateFrame(entries[0].isIntersecting, item)
  },  { threshold: 1.0, })
  
  observer.observe(item)    
}

