import { createAction, createDispatchAction } from 'wiloke-react-core/utils';

export const toggleNightModeAction = createAction('TOGGLE_SWITCHER', (nightMode: boolean) => ({ nightMode }));

export const useNightModeAction = createDispatchAction(toggleNightModeAction);
