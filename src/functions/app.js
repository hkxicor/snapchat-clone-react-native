import map from 'map-range'

function getColorOpacity(scroll) {
  let index = null
  if(scroll >= 0 && scroll < 375){
    index = 0
    opacity = map(x => (x),375,0,0,1)(scroll)
  }else if(scroll === 375 ){
    index = 1
    opacity = 1
  }else{
    index = 2
    opacity = map(x => (x),376,750,0,1)(scroll)
  }
  let colors = [generateColor(52,152,219,opacity),generateColor(0,0,0,opacity),generateColor(115,89,182,opacity)]
  return colors[index]
}

function generateColor(r,g,b,a) {
  return 'rgba('+r+','+g+','+b+','+a*2+')'
}

export {
  getColorOpacity
}
