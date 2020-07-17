// Types
import { AnyAction } from 'redux';
import { SET_LANGUAGE } from '../actions/actionTypes';
import { Language } from '../global';

export interface LanguageState {
  data: Language;
}
export const initialState: LanguageState = {
  data: 'spa',
};

const languageReducer = (
  state = initialState,
  action: AnyAction,
): LanguageState => {
  switch (action.type) {
    case SET_LANGUAGE.spa:
      return {
        ...state,
        data: 'spa',
      };
    case SET_LANGUAGE.eng:
      return {
        ...state,
        data: 'eng',
      };
    default:
      return state;
  }
};

export default languageReducer;
