import { NavigationActions } from 'react-navigation';

import Navigator  from '../routes/navigation-configuration';

const initialState = Navigator.router.getStateForAction(NavigationActions.init);

export default (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || state;
};