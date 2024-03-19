import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} from './notificationActionTypes';

export const markAsAread = (index) => { 
    return {
        type: MARK_AS_READ,
        index
    };
}
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export const setNotificationFilter = (filter) => {
    return{
        type: NotificationTypeFilters,
        filter
    };
};
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

