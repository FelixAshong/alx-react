import { notificationReducer, initialState } from "./notificationReducer";
import * as actions from '../actions/notificationActionTypes';

describe('Testing notificationReducer', () => {
  it('Test that the default state returns the correct object', () => {
    const res = notificationReducer();
    expect(res).toStrictEqual(initialState);
  });

  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: actions.FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const expected = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const res = notificationReducer(undefined, action);
    expect(res).toStrictEqual(expected);
  });

  it('Test that MARK_AS_READ returns the correct data', () => {
    const action = {
      type: actions.MARK_AS_READ,
      index: 1
    };
    const state= {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const expected = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: true,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const res = notificationReducer(state, action);
    expect(res).toStrictEqual(expected);
  });

  it('Test that SET_TYPE_FILTER returns the correct data', () => {
    const action = {
      type: actions.SET_TYPE_FILTER,
      filter: 'URGENT'
    };
    const state= {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const expected = {
      filter: "URGENT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available"
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available"
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available"
        }
      ]
    };
    const res = notificationReducer(state, action);
    expect(res).toStrictEqual(expected);
  });
});