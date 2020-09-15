import { createAsyncAction as asyncAction } from 'typesafe-actions';
import { Employee } from 'Model';

const fetchEmployee = asyncAction(
  'employees/FETCH',
  'employees/FETCH_SUCCESS',
  'employees/FETCH_FAILED',
)<void, Employee[], string>();

const addEmployee = asyncAction(
  'employees/ADD',
  'employees/ADD_SUCCESS',
  'employees/ADD_FAILED'
)<void, Employee, string>();

const updateEmployee = asyncAction(
  'employees/UPDATE',
  'employees/UPDATE_SUCCESS',
  'employees/UPDATE_FAILED'
)<void, Employee, string>();

const removeEmployee = asyncAction(
  'employees/REMOVE',
  'employees/REMOVE_SUCCESS',
  'employees/REMOVE_FAILED'
)<void, Employee, string>();

export default { fetchEmployee, addEmployee, updateEmployee, removeEmployee };
