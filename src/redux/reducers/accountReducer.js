import { GET_ACCOUNT_DATA_SUCCESS, UPDATE_ACCOUNT_DATA_SUCCESS } from '../types/accountType';

const initialState = {
    accountData: {},
};

const accountInfo = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNT_DATA_SUCCESS:
            return {
                ...state,
                accountData: { ...action.payload }
            };
        case UPDATE_ACCOUNT_DATA_SUCCESS:
            return {
                ...state,
                accountData: { ...action.payload }
            };
        default:
            return state;
    }
};

export default accountInfo;
