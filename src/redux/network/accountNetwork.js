import API from '../../network/ApiCofig';

export const account = {
    getAccountData: () => API.get('account/1'),
    updateAccountData: (action) => API.put('account/1', { ...action.payload })
};
