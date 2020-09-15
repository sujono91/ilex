import { RootState } from 'Store/Reducers';

export const isLoading = (state: RootState) => state.employee.isLoading;

export const employeeList = (state: RootState) => state.employee.data;

export const error = (state: RootState) => state.employee.error;
