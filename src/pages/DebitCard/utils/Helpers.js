const currency = 'S$';
export const currencyFormat = (amount) => {
    let _amount = amount?.toString();
    return currency + _amount?.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
