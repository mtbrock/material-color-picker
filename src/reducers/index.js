import { createMuiTheme } from '@material-ui/core/styles'
import { red, blue, blueGrey, green } from '@material-ui/core/colors'
import { createColor } from '@app/utils/colorUtils'

function createInitialState() {
  return {
    palette: {
      primary: createColor(blue[600]),
      secondary: createColor(blueGrey[600]),
      accent: createColor(blue[300]),
      error: createColor(red[600]),
    }
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
          [action.id]: createColor(action.color),
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
