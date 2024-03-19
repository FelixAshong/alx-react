import { uiReducer, initialState } from './uiReducer';
import * as actions from '../actions/uiActionTypes';

describe('Testing uiReducer', () => {
  it('verify the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const res = uiReducer();
    expect(res.toJS()).toStrictEqual(initialState.toJS());
  });

  it('verify  the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const res = uiReducer(undefined, {type: "SELECT_COURSE"});
    expect(res.toJS()).toStrictEqual(initialState.toJS());
  });

  it('verify the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const res = uiReducer(undefined, {type: actions.DISPLAY_NOTIFICATION_DRAWER});
    expect(res.toJS()).toStrictEqual({ ...initialState.toJS(), isNotificationDrawerVisible: true });
  });
});