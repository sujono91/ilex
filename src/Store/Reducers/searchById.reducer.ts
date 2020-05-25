import { ActionType, getType } from 'typesafe-actions';
import actions from 'Store/Actions';
import { SearchDataById } from 'Model';

type Action = ActionType<typeof actions>;

interface State {
  data: SearchDataById[];
  error: string | null;
}

const defaultState: State = {
  data: [],
  error: null
};

export default (state = defaultState, action: Action): State => {
  switch (action.type) {
    case getType(actions.searchById.success): {
      return {
        ...state,
        data: action.payload
      };
    }

    case getType(actions.searchById.failure): {
      return {
        ...state,
        error: 'API Error'
      };
    }

    default:
      return state;
  }
};
