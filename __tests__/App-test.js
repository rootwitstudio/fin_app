/**
 * @format
 */

import {currency, currencyFormat} from "../src/pages/DebitCard/utils/Helpers";
import renderer from 'react-test-renderer';
import ProgressBar from "../src/pages/DebitCard/views/ProgressBar";


test('renders correctly', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const tree = renderer.create(<ProgressBar />).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('Helpers', () => {
    test('currencyFormat', () => {
        expect(currencyFormat(50)).toBe(`${currency}50`);
        expect(currencyFormat(5000)).toBe(`${currency}5,000`);
    });
});
