import { Theme } from 'wiloke-react-core';
import { ActionTypes, createReducer, handleAction } from 'wiloke-react-core/utils';
import { toggleNightModeAction } from '../actions/toggleNightModeAction';

type ToggleAction = ActionTypes<typeof toggleNightModeAction>;

interface ThemeType extends Theme {}

interface ToggleState {
  isNightMode: ThemeType['nightMode'];
}
const initialState: ToggleState = {
  isNightMode: true,
};

export const toggleReducer = createReducer<ToggleState, ToggleAction>(initialState, [
  handleAction('TOGGLE_SWITCHER', ({ state, action }) => {
    const isNightMode = !action.payload.nightMode;
    return {
      ...state,
      isNightMode,
    };
  }),
]);
