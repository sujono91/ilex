import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import cloneDeep from 'lodash.clonedeep';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import rootReducer from 'Store/Reducers';
import { defaultState } from 'Store/Reducers/employee.reducer';
import { mockEmployees } from 'Mock';

const middlewares = [thunk];
const makeStore = configureMockStore(middlewares);
const makeMockState = () => cloneDeep(rootReducer({
  employee: {
    ...defaultState,
    data: mockEmployees
  }
}, { type: '----------' } as any));

describe('App', () => {
  let state;
  let store;

  beforeEach(() => {
    state = makeMockState();
    store = makeStore(state);
  });

  it('should render app successfully', async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const app = getByTestId('App');
      expect(app).toBeInTheDocument();
    });

  it('should open add modal', async () => {
      const { getByText, getByTestId, findByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      let button = getByText('Add Employee');
      fireEvent.click(button, new MouseEvent('click'));
      const modal = await findByTestId('actionModal');
      expect(modal).toBeInTheDocument();
      button = getByText('Cancel');
      fireEvent.click(button, new MouseEvent('click'));
      await waitForElementToBeRemoved(() => getByTestId('actionModal'));
      expect(modal).not.toBeInTheDocument();
    });

  it('should open edit modal', async () => {
      const { getAllByTestId, findByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const button = getAllByTestId('edit')[0];
      fireEvent.click(button, new MouseEvent('click'));
      const modal = await findByTestId('actionModal');
      expect(modal).toBeInTheDocument();
    });

  it('should open remove modal', async () => {
      const { getByText, getAllByTestId, getByTestId, findByTestId } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      let button = getAllByTestId('remove')[0];
      fireEvent.click(button, new MouseEvent('click'));
      const modal = await findByTestId('confirmationModal');
      expect(modal).toBeInTheDocument();
      button = getByText('Yes');
      fireEvent.click(button, new MouseEvent('click'));
      await waitForElementToBeRemoved(() => getByTestId('confirmationModal'));
      expect(modal).not.toBeInTheDocument();
    });
});
