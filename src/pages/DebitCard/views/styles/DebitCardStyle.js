import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 10,
        width: '100%',
        position: 'relative'
    },
    companyLogo: {
        borderWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 50
    },
    companyName: { paddingLeft: 5, fontSize: 16, fontWeight: 'bold', color: 'white' },
    logoContainer: { position: 'relative', marginBottom: 24 },
    circle: { width: 34, height: 34, borderRadius: 17 },
    rightCircle: { backgroundColor: '#f9a000', position: 'absolute', left: 20 },
    leftCircle: { backgroundColor: '#ed0006', zIndex: 999 },
    cardNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 18
    },
    cardNumberPart: { flexDirection: 'row', paddingRight: 20 },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 4
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    typeContainer: {
        alignItems: 'flex-end'
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        paddingRight: 20,
        color: 'white',
        letterSpacing: 1.3
    },
    cardHolderName: {
        color: 'white',
        fontFamily: 'Courier',
        fontSize: 24,
        letterSpacing: 0.35,
        fontWeight: 'bold'
    },
    cardNumberText: { fontSize: 16, letterSpacing: 1.3, color: 'white', fontWeight: '600' },
    cardTypeText: { fontSize: 26, fontWeight: 'bold', color: 'white' }
});

export default styles;
