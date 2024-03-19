import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

import {login, logout, hideNotificationDrawer, displayNotificationDrawer, loginRequest, loginFailure, loginSuccess } from './uiActionCreators';

import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginSuccess, login, loginFailure } from './uiActionCreators';

const fetch = require("node-fetch");

describe('tests for UI notification action creators', () => {
	it('should create proper action for login', () => {
		const email = 'test@test.com';
		const password = '123456';

		expect(login(email, password)).toEqual({
			type: LOGIN,
			user: { email: 'test@test.com', password: '123456' },
		});
	});

	it('should create proper action for logout', () => {
		expect(logout()).toEqual({ type: LOGOUT });
	});

	it('should create proper action for displaying notification drawer', () => {
		expect(displayNotificationDrawer()).toEqual({
			type: DISPLAY_NOTIFICATION_DRAWER,
		});
	});

	it('should create proper action for hiding notification drawer', () => {
		expect(hideNotificationDrawer()).toEqual({
			type: HIDE_NOTIFICATION_DRAWER,
		});
	});
});

describe('test loginRequest action', ()=> {
	it('verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS', ()=> {
	  global.fetch = fetch;
	  const mockstore = configureStore([thunk]);
	  const initialState = {};
	  const store = mockstore(initialState);
	  const fetch_mock = fetchMock.mock('http://localhost:8564/login-success.json', 200);
  
	  return store.dispatch(loginRequest('test@test.com', 'test'))
	  .then(() => {
		const actions = store.getActions()
		console.log(actions);
		expect(actions[0]).toEqual(login('test@test.com', 'test'));
		expect(actions[1]).toEqual(loginSuccess());
		fetch_mock.reset();
	  });
	});
  
	it('verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE', ()=> {
	  global.fetch = fetch;
	  const mockstore = configureStore([thunk]);
	  const initialState = {};
	  const store = mockstore(initialState);
	  const fetch_mock = fetchMock.mock('http://localhost:8564/login-success.json', 500);
  
	  return store.dispatch(loginRequest('test@test.com', 'test'))
	  .then(() => {
		const actions = store.getActions()
		console.log(actions);
		expect(actions[0]).toEqual(login('test@test.com', 'test'));
		expect(actions[1]).toEqual(loginFailure());
		fetch_mock.reset();
	  });
	});
  });
