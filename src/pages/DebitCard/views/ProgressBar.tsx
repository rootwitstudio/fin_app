import * as React from 'react';
import { FunctionComponent,useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { currencyFormat } from '../utils/Helpers';


interface ProgressProps {
    limit: number
    current: number
}

const Progress : FunctionComponent<ProgressProps> = ({ limit, current }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setPercent((current / limit) * 100);
    }, [limit, current]);
    const counter = useRef(new Animated.Value(0)).current;
    const countInterval = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        countInterval.current = setInterval(() => setCount((old) => old + 5), 1000);
        return () => {
            clearInterval(countInterval);
        };
    }, []);

    useEffect(() => {
        load(count);
        if (count >= percent) {
            setCount(percent);
            clearInterval(countInterval);
        }
    }, [count]);

    const load = (count) => {
        Animated.timing(counter, {
            toValue: count,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const width = counter.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.container}>
            <View style={styles.limitDetails}>
                <Text>Debit card spending limit</Text>
                <View style={styles.flexRow}>
                    <View>
                        <Text style={styles.cl}>{currencyFormat(current)}</Text>
                    </View>
                    <View style={styles.verticalLine} />
                    <View>
                        <Text style={styles.tl}>{currencyFormat(limit)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.progressBar}>
                <Animated.View style={([StyleSheet.absoluteFill], { backgroundColor: '#01D167', width })} />
            </View>
        </View>
    );
};

export default React.memo(Progress);

const styles = StyleSheet.create({
    container: { marginTop: 30 },
    limitDetails: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5 },
    progressBar: {
        height: 20,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#01D167',
        borderWidth: 2,
        borderRadius: 20
    },
    verticalLine: {
        marginHorizontal: 10,
        height: '70%',
        width: 1,
        backgroundColor: '#909090'
    },
    flexRow: {
        flexDirection: 'row'
    },
    cl: { color: '#01D167', fontWeight: 'bold' },
    tl: { opacity: 0.5 }
});
