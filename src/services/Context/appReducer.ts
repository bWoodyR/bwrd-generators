export enum ACTION_TYPES {
  SET_SELECTED_SECTION = "SET_SELECTED_SECTION",
}

export type Action = {
  type: ACTION_TYPES;
  payload: string;
};

export type State = {
  selectedSection: string;
};

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.SET_SELECTED_SECTION:
      return { ...state, selectedSection: action.payload };

    default:
      throw new Error(`No action type ${action.type} found`);
  }
};

export default appReducer;
