import * as React from 'react';
import { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const SwitchButton = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        props.onToggleSwitch(!isEnabled, props.id);
        setIsEnabled((previousState) => !previousState);
    };

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#767577', true: '#01D167' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#FFF"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default React.memo(SwitchButton);
