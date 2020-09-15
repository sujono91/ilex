export type Department = 'HR' | 'Finance' | 'Dev' | 'Admin';

export interface DepartmentItem {
  key: Department;
  value: Department;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: Department;
  joinDate: string;
  email: string;
  phone: string;
}

export interface EmployeeForm {
  id?: string;
  firstName: string;
  lastName: string;
  department: Department;
  joinDate: string;
  email: string;
  phone: string;
}
