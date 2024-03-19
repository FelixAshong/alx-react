import * as actions from '../actions/notificationActionTypes';
import { Map, setIn, set } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState= Map({
  notifications: [],
  filter: actions.NotificationTypeFilters.DEFAULT
});

export function notificationReducer(state=initialState, action={type: null}) {
  switch(action.type) {

    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      const normData = notificationsNormalizer(action.data);
      Object.keys(normData.notifications).map((key) => {
        normData.notifications[key].isRead = false;
      });
      return state.merge(normData);

    case actions.MARK_AS_READ:
      return setIn(state, ['notifications', String(action.index), 'isRead'], true);

    case actions.SET_TYPE_FILTER:
      return set(state, 'filter', action.filter);
    
    default:
      return state;

  }
}
