import { all, put, takeLatest, call } from 'redux-saga/effects';
import { account } from '../network/accountNetwork';
import { GET_ACCOUNT_DATA, GET_ACCOUNT_DATA_SUCCESS, UPDATE_ACCOUNT_DATA, UPDATE_ACCOUNT_DATA_SUCCESS } from '../types/accountType';

function* getAccountApiCall() {
    try {
        const response = yield call(account.getAccountData);
        if (response && response.data) {
            yield put({ type: GET_ACCOUNT_DATA_SUCCESS, payload: response.data });
        }
    } catch (e) {}
}

function* updateAccountApiCall(action) {
    try {
        const response = yield call(account.updateAccountData, action);
        if (response && response.data) {
            yield put({ type: UPDATE_ACCOUNT_DATA_SUCCESS, payload: response.data });
        }
    } catch (e) {}
}

function* accountSaga() {
    yield all([takeLatest(GET_ACCOUNT_DATA, getAccountApiCall), takeLatest(UPDATE_ACCOUNT_DATA, updateAccountApiCall)]);
}

export default accountSaga;
