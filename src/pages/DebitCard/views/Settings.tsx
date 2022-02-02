import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Switch from './Switch';
import { updateAccountData } from '../../../redux/actions/accountAction';
import { connect } from 'react-redux';
import { currencyFormat } from '../utils/Helpers';
import { settingsData } from '../utils/constants';

const Settings = (props) => {
    const onSwitchClick = (value, id) => {
        if (id === 1 && value) {
            props.navigation.navigate('Spendinglimit');
        } else if (id === 1 && !value) {
            props.updateAccountData({ ...props.accountData, ...{ spendingLimit: 0 } });
        }
    };

    const getDesc = (item) => {
        if (item.id === 1 && props.spendLimit > 0) {
            return `Your weekly spending limit is ${currencyFormat(props.spendLimit)}`;
        } else {
            return item.desc;
        }
    };

    const renderIcon = (item) => {
        return (
            <View style={styles.logo}>
                <Icon name={item.icon} size={14} color={'white'} />
            </View>
        );
    };

    const renderLabel = (item) => {
        return (
            <View>
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.desc}>{getDesc(item)}</Text>
                </View>
            </View>
        );
    };

    const renderSwitch = (item) => {
        return (
            <View style={{ marginLeft: 'auto' }}>
                <Switch id={item.id} onToggleSwitch={onSwitchClick} />
            </View>
        );
    };

    return (
        <View style={{ paddingTop: 180, paddingLeft: 15, backgroundColor: 'white' }}>
            {settingsData.map((item, index) => (
                <TouchableOpacity key={item.id} style={styles.container}>
                    {renderIcon(item)}
                    {renderLabel(item)}
                    {renderSwitch(item)}
                </TouchableOpacity>
            ))}
        </View>
    );
};
const mapStateToProps = (state) => ({
    accountData: state.account.accountData
});
const mapDispatchToProps = {
    updateAccountData
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        paddingHorizontal: 10
    },
    logo: {
        borderWidth: 1,
        borderColor: '#325BAF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#325BAF',
        borderRadius: 50
    },
    desc: { padding: 10, fontSize: 12, color: 'grey' }
});
