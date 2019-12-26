export const initialValue = {
    user: {},
    isAuthorized: false
};

export function userReducer(state = initialValue, action) {
    switch (action.type) {
        case "VERIFIED_USER":
            return {...state, user: action.payload, isAuthorized: true};
        case "fetchUpdateUserSuccess":
            return {...state, user: action.payload};
        default:
            return state
    }
}