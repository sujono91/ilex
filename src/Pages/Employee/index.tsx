import React, { memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import useThunkDispatch from 'Shared/Hooks';
import DataTable from './Components/Table';
import {
  fetchEmployee,
  addEmployee,
  removeEmployee,
  updateEmployee
} from 'Store/Actions/thunk';
import * as selector from 'Store/Selectors';
import { StyledFontAwesomeIcon } from './Components/Table/Styles';
import { Employee, EmployeeForm } from 'Model';
import ActionModal from './Components/Modal';
import { ButtonContainer } from 'Pages/Employee/Styles';
import InputField from './Components/InputField';
import DropdownField from './Components/DropdownField';
import { mockDepartments } from 'Mock';
import ConfirmationModal from './Components/ConfirmationModal';

const heads = ['Name', 'Department', 'Join Date', 'Email', 'Phone', 'Actions'];

const defaultValue: EmployeeForm = {
  firstName: '',
  lastName: '',
  department: 'Admin',
  joinDate: new Date().toISOString().slice(0, 10),
  phone: '',
  email: ''
};

const validationSchema = Yup.object<EmployeeForm>().shape({
  firstName: Yup.lazy(() => Yup.string().required('First name is required')),
  lastName: Yup.lazy(() => Yup.string().required('Last name is required')),
  department: Yup.lazy(() => Yup.string().required('Department is required')),
  joinDate: Yup.lazy(() => Yup.string().required('Join date is required')),
  email: Yup.lazy(() =>
    Yup.string()
      .nullable(true)
      .when('phone', {
        is: (phone) => !phone,
        then: Yup.string().required('Email is a required field')
      })
  ),
  phone: Yup.lazy(() =>
    Yup.string()
      .nullable(true)
      .when('email', {
        is: (email) => !email,
        then: Yup.string().required('Phone is a required field')
      })
  )
});

const SearchPage = () => {
  const dispatch = useThunkDispatch();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>();
  const employeeList = useSelector(selector.employeeList);
  const isLoading = useSelector(selector.isLoading);
  const [initialValues, setInitialValues] = useState<EmployeeForm>(defaultValue);

  const openAddModal = () => {
    setShowForm(true);
  };

  const openEditModal = (employee: Employee) => {
    setShowForm(true);
    setSelectedEmployee(employee);
    setInitialValues({
      ...employee
    });
  };

  const openConfirmationModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowConfirm(true);
  };

  const onCloseModal = () => {
    setShowForm(false);
    setShowConfirm(false);
    setSelectedEmployee(undefined);
    setInitialValues(defaultValue);
  };

  const handleSubmit = (values: EmployeeForm) => {
    const actionFunc = selectedEmployee ? updateEmployee(values) : addEmployee(values);

    dispatch(actionFunc);
    onCloseModal();
  };

  const handleRemove = () => {
    if (selectedEmployee) {
      dispatch(removeEmployee(selectedEmployee));
      onCloseModal();
    }
  };

  const employees = useMemo(() => employeeList.map((employee) => ({
    name: `${employee.firstName} ${employee.lastName}`,
    department: employee.department,
    joinDate: employee.joinDate,
    email: employee.email,
    phone: employee.phone,
    actions: (
      <>
        <StyledFontAwesomeIcon icon={['fas', 'pencil-alt']} onClick={() => openEditModal(employee)} />
        &nbsp;
        <StyledFontAwesomeIcon icon={['fas', 'trash']} onClick={() => openConfirmationModal(employee)} />
      </>
    )
  })), [employeeList]);

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  return (
    <>
      <ButtonContainer>
        <Button color="primary" onClick={openAddModal}>Add Employee</Button>
      </ButtonContainer>
      <br />
      <DataTable
        heads={heads}
        rows={employees}
        isLoading={isLoading}
      />
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: EmployeeForm) => handleSubmit(values)}
      >
        {({ resetForm }) => {
          return (
              <ActionModal
                isOpen={showForm}
                title={`${selectedEmployee ? 'Edit' : 'Add'} Employee`}
              >
                <Form>
                  <ModalBody>
                    <InputField name="firstName" label="First Name" type="text" required />
                    <InputField name="lastName" label="Last Name" type="text" required />
                    <DropdownField name="department" label="Department" items={mockDepartments} required />
                    <InputField name="joinDate" label="Join Date" type="date" required />
                    <InputField name="email" label="Email" type="text" />
                    <InputField name="phone" label="Phone" type="text" />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      onClick={() => {
                        resetForm();
                        onCloseModal();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button color="primary" type="submit">Submit</Button>
                  </ModalFooter>
                </Form>
              </ActionModal>
          );
        }}
      </Formik>
      <ConfirmationModal
        isOpen={showConfirm}
        onCancel={onCloseModal}
        onSubmit={handleRemove}
      >
        <div>Are you sure you want to remove this item?</div>
      </ConfirmationModal>
    </>
  );
};

export default memo(SearchPage);
