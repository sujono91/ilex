import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getType } from 'typesafe-actions';
import actions from '../actions';
import { fetchEmployee, addEmployee, updateEmployee, removeEmployee } from '../thunk';
import { mockEmployees } from 'Mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Thunk Spec', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  it('should handle fetch employee', async () => {
      const expectedActions = [
        {
          type: getType(actions.fetchEmployee.request)
        },
        {
          type: getType(actions.fetchEmployee.success)
        }
      ];

      await store.dispatch(fetchEmployee());

      expect(store.getActions().map(({ type }: any) => ({ type }))).toEqual(expectedActions);
    });

  it('should handle add employee', async () => {
      const expectedActions = [
        {
          type: getType(actions.addEmployee.request)
        },
        {
          type: getType(actions.addEmployee.success)
        }
      ];

      await store.dispatch(addEmployee(mockEmployees[0]));

      expect(store.getActions().map(({ type }: any) => ({ type }))).toEqual(expectedActions);
    });

  it('should handle update employee', async () => {
      const expectedActions = [
        {
          type: getType(actions.updateEmployee.request)
        },
        {
          type: getType(actions.updateEmployee.success)
        }
      ];

      await store.dispatch(updateEmployee(mockEmployees[0]));

      expect(store.getActions().map(({ type }: any) => ({ type }))).toEqual(expectedActions);
    });

  it('should handle remove employee', async () => {
      const expectedActions = [
        {
          type: getType(actions.removeEmployee.request)
        },
        {
          type: getType(actions.removeEmployee.success)
        }
      ];

      await store.dispatch(removeEmployee(mockEmployees[0]));

      expect(store.getActions().map(({ type }: any) => ({ type }))).toEqual(expectedActions);
    });
});
