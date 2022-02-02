import * as React from 'react';
import{ useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { updateAccountData } from '../../../redux/actions/accountAction';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LimitInput from './LimitInput';
import { currencyFormat } from '../utils/Helpers';
import { preLoadAmountData } from '../utils/constants';
import styles from './styles/SpendingLimitStyle';

const SpendingLimit = (props) => {
    const [limitValue, setLimitValue] = useState(null);

    const onClick = (amount) => {
        setLimitValue(amount);
    };

    const onBack = () => {
        props.navigation.goBack();
    };

    const onSave = () => {
        props.updateAccountData({ ...props.accountData, ...{ spendingLimit: limitValue } });
        props.navigation.goBack();
    };

    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <MaterialIcons name={'keyboard-arrow-left'} color={'white'} size={32} />
                </TouchableOpacity>
                <Text style={styles.title}>Spending Limit</Text>
            </View>
        );
    };

    const renderInput = () => {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.labelContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.labelIcon}>
                            <Icon name={'speedometer'} size={14} color={'white'} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text>Set a weekly debit card spending limit</Text>
                        </View>
                    </View>
                    <LimitInput value={limitValue} limitChange={onClick} />
                    <Text style={styles.inputInfo}>Here weekly means last 7 days - not a calender week</Text>
                </View>
                <View style={styles.buttonContainer}>
                    {preLoadAmountData.map((data) => {
                        return (
                            <TouchableOpacity onPress={() => onClick(data.amount)} key={data.id} style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>{currencyFormat(data.amount)}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };

    const renderSaveButton = () => {
        return (
            <View style={styles.saveButton}>
                <TouchableOpacity onPress={onSave}>
                    <Text style={styles.saveButtonStyle}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.saveArea}>
            <View style={{ flex: 1 }}>
                {renderHeader()}
                {renderInput()}
                {renderSaveButton()}
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => ({
    accountData: state.account.accountData
});
const mapDispatchToProps = {
    updateAccountData
};
export default connect(mapStateToProps, mapDispatchToProps)(SpendingLimit);
