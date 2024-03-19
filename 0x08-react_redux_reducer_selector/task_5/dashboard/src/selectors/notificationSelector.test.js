import * as selectors from './notificationSelector';
import { notificationReducer } from '../reducers/notificationReducer';
import { Map } from 'immutable';

describe('Testinf notificationSelectors',() => {
  it('test that filterTypeSelected works as expected', () => {
    const state = notificationReducer();
    const selectedData = selectors.filterTypeSelected(state);
    expect(selectedData).toEqual('DEFAULT');
  });

  it('test that getNotifications returns a list of the message entities within the reducer', () => {
    const state = notificationReducer();
    const selectedData = selectors.getNotifications(state);
    expect(selectedData).toEqual(Map([]));
  });

  it('test that getUnreadNotifications return a list of the message entities within the reducer', () => {
    const state = notificationReducer(Map({notifications: {
        '1': {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: true
        },
        '2': {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
          isRead: false
        },
        '3': {
          id: 3,
          type: 'urgent',
          value: 'New data available',
          isRead: false
        }
      },
      filter: 'DEFAULT'
    }));
    const selectedData = selectors.getUnreadNotifications(state);
    expect(selectedData).toEqual(Map({
      '2': {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
        isRead: false
      },
      '3': {
        id: 3,
        type: 'urgent',
        value: 'New data available',
        isRead: false
      }
    }));
  });
});