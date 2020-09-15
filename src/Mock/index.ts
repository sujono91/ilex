import { Employee, DepartmentItem } from 'Model';

export const mockEmployees: Employee[] = [{
  id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000',
  firstName: 'John',
  lastName: 'Doe',
  department: 'HR',
  email: 'sujonochen91@gmail.com',
  joinDate: '2014-08-18',
  phone: ''
}, {
  id: '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc001',
  firstName: 'Mary',
  lastName: 'Watson',
  department: 'Finance',
  email: 'mary91@gmail.com',
  joinDate: '2018-04-04',
  phone: ''
}];

export const mockDepartments: DepartmentItem[] = [{
  key: 'Admin',
  value: 'Admin'
}, {
  key: 'HR',
  value: 'HR'
}, {
  key: 'Finance',
  value: 'Finance'
}, {
  key: 'Dev',
  value: 'Dev'
}];
