import * as React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles/DebitCardStyle';


interface DebitCardProps {
    name: string
    debitCard: {
        cardNumber:string,
        validity:string,
        cvv:string
    }
}

const DebitCard : React.FunctionComponent<DebitCardProps> = ({ name, debitCard })=> {
    const renderIcon = () => {
        return (
            <View style={styles.companyContainer}>
                <View style={styles.companyLogo}>
                    <MaterialIcons name={'keyboard-arrow-up'} size={25} color={'#01D167'} />
                </View>
                <Text style={styles.companyName}>{'aspire'}</Text>
            </View>
        );
    };

    const renderName = () => {
        return <Text style={[styles.cardHolderName]}>{name}</Text>;
    };

    const renderCardNumber = () => {
        const cardNo = debitCard?.cardNumber?.match(/.{1,4}/g);
        return (
            <View style={styles.cardNumberContainer}>
                {cardNo?.map((no) => {
                    return (
                        <View style={styles.cardNumberPart}>
                            <Text style={styles.cardNumberText}>{no.toString()}</Text>
                        </View>
                    );
                })}
            </View>
        );
    };

    const renderValidityAndCVV = () => {
        return (
            <View style={styles.footerContainer}>
                <Text style={[styles.text]}>{`Thru: ${debitCard?.validity}`}</Text>
                <Text style={[styles.text]}>{`CVV: ${debitCard?.cvv}`}</Text>
            </View>
        );
    };

    const renderCardType = () => {
        return (
            <View style={styles.typeContainer}>
                <Text style={styles.cardTypeText}>{'VISA'}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderIcon()}
            {renderName()}
            {renderCardNumber()}
            {renderValidityAndCVV()}
            {renderCardType()}
        </View>
    );
}

export default DebitCard;
