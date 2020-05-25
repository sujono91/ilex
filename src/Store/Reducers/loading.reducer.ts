import { ActionType, getType } from 'typesafe-actions';
import actions from 'Store/Actions';

type Action = ActionType<typeof actions>;

interface State {
  loading: boolean;
}

const defaultState: State = {
  loading: false
};

export default (state = defaultState, action: Action): State => {
  switch (action.type) {
    case getType(actions.loading): {
      return {
        ...state,
        loading: action.payload
      };
    }

    default:
      return state;
  }
};
