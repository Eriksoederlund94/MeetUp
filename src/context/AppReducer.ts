interface AppState {
    isLoggedIn: boolean;
    sortBy: string;
}

export type AppAction =
    | { type: 'SET_LOGGED_IN' }
    | { type: 'SET_SORT_BY'; payload: string };

export function AppReducer(state: AppState, action: AppAction) {
    switch (action.type) {
        case 'SET_LOGGED_IN':
            return {
                ...state,
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload,
            };
        default:
            return state;
    }
}
