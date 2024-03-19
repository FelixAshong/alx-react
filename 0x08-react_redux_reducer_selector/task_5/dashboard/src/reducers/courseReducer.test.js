import { courseReducer } from "./courseReducer";
import { coursesNormalizer } from "../schema/courses";
import * as actions from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('Testing courseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    const res = courseReducer();
    expect(res.toJS()).toStrictEqual({});
  });

  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: actions.FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: "ES6",
          credit: 60
        },
        {
          id: 2,
          name: "Webpack",
          credit: 20
        },
        {
          id: 3,
          name: "React",
          credit: 40
        }
      ]
    };
    const expected = {"1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, "2": {"credit": 20, "id": 2, "isSelected": false, "name": "Webpack"}, "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}};
    const res = courseReducer(undefined, action);
    expect(res.toJS()).toStrictEqual(expected);
  });

  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const action = {
      type: actions.SELECT_COURSE,
      index: 1
    };
    const expected = coursesNormalizer([
      {
        id: 1,
        name: "ES6",
        isSelected: true,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);
    const state = Map(coursesNormalizer([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]));

    const res = courseReducer(state, action);
    expect(res.toJS()).toStrictEqual(expected);
  });

  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const action = {
      type: actions.UNSELECT_COURSE,
      index: 1
    };
    const expected = {"1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"}, "2": {"credit": 20, "id": 2, "isSelected": false, "name": "Webpack"}, "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}};
    const state = Map(coursesNormalizer([
      {
        id: 1,
        name: "ES6",
        "isSelected": true,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        "isSelected": false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        "isSelected": false,
        credit: 40
      }
    ]));

    const res = courseReducer(state, action);
    console.log(res.toJS())
    expect(res.toJS()).toStrictEqual(expected);
  });
});