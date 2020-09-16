import { ActionType, getType } from 'typesafe-actions';
import actions from 'Store/Actions';
import { Employee } from 'Model';

type Action = ActionType<typeof actions>;

interface State {
  data: Employee[];
  error: string | null;
  isLoading: boolean;
}

const defaultState: State = {
  data: [],
  error: null,
  isLoading: false
};

export default (state = defaultState, action: Action): State => {
  switch (action.type) {
    case getType(actions.fetchEmployee.request):
    case getType(actions.addEmployee.request):
    case getType(actions.updateEmployee.request):
    case getType(actions.removeEmployee.request): {
      return {
        ...state,
        isLoading: true
      };
    }

    case getType(actions.fetchEmployee.success): {
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    }

    case getType(actions.addEmployee.success): {
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false
      };
    }

    case getType(actions.updateEmployee.success): {
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }

          return item;
        }),
        isLoading: false
      };
    }

    case getType(actions.removeEmployee.success): {
      const index = state.data.findIndex((item) => item.id === action.payload.id);

      return {
        ...state,
        data: state.data.slice(0, index).concat(state.data.slice(index + 1, state.data.length)),
        isLoading: false
      };
    }

    case getType(actions.fetchEmployee.failure):
    case getType(actions.addEmployee.failure):
    case getType(actions.updateEmployee.failure):
    case getType(actions.removeEmployee.failure): {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
