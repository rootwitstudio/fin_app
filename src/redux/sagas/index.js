import { all } from 'redux-saga/effects';
import accountSaga from "./accountSaga";

export default function* IndexSaga() {
    let saga = [accountSaga()];
    yield all(saga);
}
