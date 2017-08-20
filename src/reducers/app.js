import {
  SET_HORIZONTAL_SCROLL,
} from '../actions'
import { getColorOpacity } from '../functions/app'

const initialState = {
  backgroundColor: '#000',
  opacity: 1,
}


function app(state = initialState, action) {
  switch (action.type) {
    case SET_HORIZONTAL_SCROLL:
      let color = getColorOpacity(action.horizontalScroll)
      console.log(color);
      return Object.assign({},state,{
        backgroundColor: color
      })
    default:
      return state
  }
}

export default app
