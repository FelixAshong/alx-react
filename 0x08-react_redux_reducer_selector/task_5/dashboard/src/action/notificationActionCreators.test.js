import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER, } from './notificationActionTypes';

import {
	markAsRead,
	setNotificationFilter,
} from './notificationActionCreators';

describe('tests for notification actions', () => {
	it('should create right action for mark as read', () => {
		expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
	});

	it('should create right action for notification filter', () => {
		expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
			type: SET_TYPE_FILTER,
			filter: 'DEFAULT',
		});
	});
});
