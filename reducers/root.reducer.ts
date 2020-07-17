import { combineReducers } from 'redux';

// Types
import { AnyData } from '../global';

// Reducers
import languageReducer, {
  LanguageState,
  initialState as initialLanguageState,
} from './language.reducer';

type PreloadStateType = (
  appData: AnyData,
) => {
  language: LanguageState;
};

const preloadedState: PreloadStateType = (appData) => ({
  language: initialLanguageState,
  ...appData,
});

export const initialState = { ...preloadedState({}) };

export interface State {
  language: LanguageState;
}

export { preloadedState };

export default combineReducers<State>({
  language: languageReducer,
});
