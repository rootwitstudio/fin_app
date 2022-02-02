import { Platform, StyleSheet } from 'react-native';
const HEADER_MAX_HEIGHT = 350;

const styles = StyleSheet.create({
    saveArea: {
        flex: 1,
        backgroundColor: '#eff3fb'
    },
    hideCardContainer: {
        top: 165,
        width: '40%',
        backgroundColor: 'white',
        right: 20,
        position: 'absolute',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    hideCardText: { color: '#01D167', paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20 },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        backgroundColor: '#0C365A',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT
    },
    topBar: {
        marginTop: Platform.OS === 'ios' ? 80 : 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0
    },
    centerView: {
        marginTop: 200,
        position: 'absolute',
        borderRadius: 10,
        elevation: 50,
        backgroundColor: '#01D167',
        height: 200,
        width: '90%',
        alignSelf: 'center'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    settingsContainer: { backgroundColor: 'white', zIndex: -1 },
    titleIcon: {
        borderWidth: 1,
        borderColor: '#01D167',
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        backgroundColor: '#01D167',
        borderRadius: 50
    }
});

export default styles;
