import { ActionType, getType } from 'typesafe-actions';
import actions from 'Store/Actions';
import { SearchDataResponse } from 'Model';

type Action = ActionType<typeof actions>;

interface State {
  data: SearchDataResponse | null;
  error: string | null;
}

const defaultState: State = {
  data: null,
  error: null
};

export default (state = defaultState, action: Action): State => {
  switch (action.type) {
    case getType(actions.search.success): {
      return {
        ...state,
        data: action.payload
      };
    }

    case getType(actions.search.failure): {
      return {
        ...state,
        error: 'API Error'
      };
    }

    default:
      return state;
  }
};
