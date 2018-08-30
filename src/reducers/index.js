import {createColorGroup, createPalette} from '@app/color'

function createInitialState() {
  const palette = createPalette()
  return {
    palette: createPalette()
  }
}

const initialState = createInitialState()

export default function colorApp(state = initialState, action) {
  switch (action.type) {
    case 'ASSIGN_COLOR':
      return {
        ...state,
        palette: {
          ...state.palette,
          [action.id]: createColorGroup(action.color),
        },
      }
    case 'ASSIGN_ACTIVE_COLOR_ID':
      return {
        ...state,
        activeColorId: action.id,
      }
    default:
      return state
  }
}
