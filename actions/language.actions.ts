import { SET_LANGUAGE } from './actionTypes';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

// Types
import { Language } from '../global';

export const setLanguage = (language: Language) => (
  dispatch: Dispatch<AnyAction>,
): AnyAction => {
  dispatch({ type: SET_LANGUAGE[language] });
  return;
};
