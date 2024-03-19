import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../action/courseActionTypes';
import { Map, setIn } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const initialState = Map([]);

export function courseReducer(state=initialState, action={type: null}) {
    switch(action.type) {
      case FETCH_COURSE_SUCCESS:
        const normData = coursesNormalizer(action.data);
        Object.keys(normData).map((key) => {
        normData[key].isSelected = false
      });
      return state.merge(normData);
  
      case SELECT_COURSE:
        return setIn(state, [String(action.index), 'isSelected'], true);

      case UNSELECT_COURSE:
        return setIn(state, [String(action.index), 'isSelected'], false);

      default:
        return state;
    }
  }
  