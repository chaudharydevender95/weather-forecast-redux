import { FETCH_WEATHER } from '../actions';

export default function(state= [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state]; // Same as  return state.concat([action.payload.data]);
        default: 
            return state;
    }
}