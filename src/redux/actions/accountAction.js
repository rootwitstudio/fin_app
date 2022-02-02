import {GET_ACCOUNT_DATA, UPDATE_ACCOUNT_DATA} from '../types/accountType';

export function getAccountData() {
  return {
    type:GET_ACCOUNT_DATA
  }
}

export function updateAccountData(data) {
  return {
    type:UPDATE_ACCOUNT_DATA,
    payload:data
  }
}
