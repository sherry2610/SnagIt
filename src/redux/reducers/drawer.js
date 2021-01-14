import { 
  TOGGLE_DRAWER,
  OPEN_RIGHT_DRAWER,
  RESET_RIGHT_DRAWER
} from '../actionTypes'

const initState = {
  rightDrawerState: '',
};

export function drawerReducer(state = initState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {...state, rightDrawerState: 'toggle'};
    case OPEN_RIGHT_DRAWER:
      return {...state, rightDrawerState: 'open'};
    case RESET_RIGHT_DRAWER:
      return {...state, rightDrawerState: ''};
    default:
      return state;
  }
}
