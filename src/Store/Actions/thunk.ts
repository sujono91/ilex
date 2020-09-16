import { Dispatch } from 'redux';
import { v4 } from 'uuid';
import actions from 'Store/Actions';
import { mockEmployees } from 'Mock';
import { Employee, EmployeeForm } from 'Model';

const PROMISE_DELAY = 500;

export const fetchEmployee = () => async (
  dispatch: Dispatch
) => {
  dispatch(actions.fetchEmployee.request());

  try {
    const response: { data: Employee[] } = await new Promise(
      (resolve) => setTimeout(() => resolve({
        data: mockEmployees
      }), PROMISE_DELAY)
    );

    dispatch(actions.fetchEmployee.success(response.data));
  } catch {
    dispatch(actions.fetchEmployee.failure('Failed to fetch list of employee'));
  }
};

export const addEmployee = (employee: EmployeeForm) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.addEmployee.request());

  try {
    const response: { data: Employee } = await new Promise(
      (resolve) => setTimeout(() => resolve({
        data: {
          ...employee,
          id: v4()
        }
      }), PROMISE_DELAY)
    );
    dispatch(actions.addEmployee.success(response.data));
  } catch {
    dispatch(actions.fetchEmployee.failure('Failed to add new employee'));
  }
};

export const updateEmployee = (employee: EmployeeForm) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.updateEmployee.request());

  try {
    const response: { data: Employee } = await new Promise(
      (resolve) => setTimeout(() => resolve({
        data: {
          id: employee.id!,
          ...employee
        }
      }), PROMISE_DELAY)
    );
    dispatch(actions.updateEmployee.success(response.data));
  } catch {
    dispatch(actions.updateEmployee.failure('Failed to update employee'));
  }
};

export const removeEmployee = (employee: EmployeeForm) => async (
  dispatch: Dispatch
) => {
  dispatch(actions.removeEmployee.request());

  try {
    const response: { data: Employee } = await new Promise(
      (resolve) => setTimeout(() => resolve({
        data: {
          id: employee.id!,
          ...employee
        }
      }), PROMISE_DELAY)
    );
    dispatch(actions.removeEmployee.success(response.data));
  } catch {
    dispatch(actions.removeEmployee.failure('Failed to remove employee'));
  }
};
