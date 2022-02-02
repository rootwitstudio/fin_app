import * as React from 'react';
import { useEffect, useRef, Fragment } from 'react';
import { SafeAreaView, View, Text, Animated } from 'react-native';
import DebitCard from './DebitCard';
import List from './Settings';
import { getAccountData } from '../../../redux/actions/accountAction';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import { currencyFormat } from '../utils/Helpers';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/MainViewStyle';

const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const MainView = (props) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        props.getAccountData();
    }, []);

    useEffect(() => {
        console.log(props.accountData);
    }, [props.accountData]);

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp'
    });

    const renderHeader = () => {
        return (
            <Fragment>
                <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]} />
                <Animated.View style={styles.topBar}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Debit Card</Text>
                        <View style={styles.titleIcon}>
                            <MaterialIcons name={'keyboard-arrow-up'} size={25} color={'black'} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: 'white', marginTop: 20 }}>Available Balance</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.title}>{props.accountData && currencyFormat(props.accountData.balance)}</Text>
                    </View>
                </Animated.View>
            </Fragment>
        );
    };

    const renderHideCard = () => {
        return (
            <View style={styles.hideCardContainer}>
                <Text style={styles.hideCardText}>
                    <Icon name={'eye-off'} size={14} color={'#01D167'} /> Hide card number
                </Text>
            </View>
        );
    };

    const renderCardDetails = () => {
        return (
            <View style={styles.centerView}>
                <DebitCard name={props.accountData?.name} debitCard={props.accountData?.debitCard} />
                {props.accountData?.spendingLimit > 0 && (
                    <View>
                        <ProgressBar limit={props.accountData?.spendingLimit} current={props.accountData?.currentSpending} />
                    </View>
                )}
            </View>
        );
    };

    const renderSettings = () => {
        return (
            <View style={styles.settingsContainer}>
                <List spendLimit={props.accountData?.spendingLimit} navigation={props.navigation} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.saveArea}>
            <Animated.ScrollView
                contentContainerStyle={{ zIndex: 2, paddingTop: HEADER_MAX_HEIGHT - 32 }}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
            >
                {renderHideCard()}
                {renderCardDetails()}
                {renderSettings()}
            </Animated.ScrollView>
            {renderHeader()}
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => ({
    accountData: state.account.accountData
});
const mapDispatchToProps = {
    getAccountData
};
export default connect(mapStateToProps, mapDispatchToProps)(MainView);
