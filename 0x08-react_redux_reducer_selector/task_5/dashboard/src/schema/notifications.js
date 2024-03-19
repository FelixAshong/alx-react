import notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
    const notifications = normalizedNotifications.entities.notifications;
    const messages = normalizedNotifications.entities.messages;
    const selectedNotifs = [];
  
    for (const property in notifications) {
      if (notifications[property].author === userId) {
        selectedNotifs.push(messages[notifications[property].context]);
      }
    }
  
    return selectedNotifs;
  }
  
  export function notificationsNormalizer(data) {
    return normalize(data, [notification]).entities;
  }
  
  const user = new schema.Entity('users');
  const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid',
  });
  
  const notification = new schema.Entity('notifications', {
    author: user,
    context: message
  });
  
  export const normalizedNotifications = normalize(notifications.default, [notification]);  
