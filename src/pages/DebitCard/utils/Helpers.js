export const currency = 'S$';
export const currencyFormat = (amount) => {
    // eslint-disable-next-line no-underscore-dangle
    let _amount = amount?.toString();
    return currency + _amount?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
