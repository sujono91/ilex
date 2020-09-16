import reducer, { defaultState } from '../employee.reducer';
import actions from '../../Actions';
import { mockEmployees } from '../../../Mock';

describe('Employee Reducer Spec', () => {
it('should return default state', () => {
    expect(reducer(undefined, { type: '' } as any)).toEqual(defaultState);
  });

it('should handle fetch request', () => {
    const state = { ...defaultState };

    expect(reducer(state, actions.fetchEmployee.request())).toEqual({
      ...state,
      isLoading: true,
    });
  });

it('should handle fail request', () => {
    const state = { ...defaultState };

    expect(reducer(state, actions.fetchEmployee.failure('Error'))).toEqual({
      ...state,
      isLoading: false,
      error: 'Error'
    });
  });

it('should fetch employee successfully', () => {
    const state = { ...defaultState };

    expect(reducer(state, actions.fetchEmployee.success(mockEmployees))).toEqual({
      ...state,
      isLoading: false,
      data: mockEmployees
    });
  });

it('should add employee successfully', () => {
    const state = {
      ...defaultState
    };

    expect(reducer(state, actions.addEmployee.success(mockEmployees[0]))).toEqual({
      ...state,
      isLoading: false,
      data: [mockEmployees[0]]
    });
  });

it('should update employee successfully', () => {
    const state = {
      ...defaultState,
      data: mockEmployees
    };

    expect(reducer(state, actions.updateEmployee.success(mockEmployees[0]))).toEqual({
      ...state,
      isLoading: false,
      data: mockEmployees
    });
  });

it('should remove employee successfully', () => {
    const state = {
      ...defaultState,
      data: mockEmployees
    };

    expect(reducer(state, actions.removeEmployee.success(mockEmployees[0]))).toEqual({
      ...state,
      isLoading: false,
      data: [mockEmployees[1]]
    });
  });
});
