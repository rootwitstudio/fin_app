import * as React from 'react';
import { TextField } from 'rn-material-ui-textfield';

const LimitInput = (props) => {
    const onChange = (text) => {
        props.limitChange(text);
    };

    return <TextField autoFocus value={props.value?.toString()} keyboardType="phone-pad" onChangeText={onChange} />;
};

export default React.memo(LimitInput);
