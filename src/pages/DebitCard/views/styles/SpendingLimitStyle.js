import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    saveArea: {
        flex: 1,
        backgroundColor: '#eff3fb'
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold'
    },
    header: { flex: 0.2, backgroundColor: '#0C365A', padding: 20 },
    inputContainer: { borderRadius: 20, flex: 0.8, paddingTop: 10, backgroundColor: 'white' },
    labelContainer: { paddingHorizontal: 20 },
    labelIcon: {
        borderWidth: 1,
        borderColor: '#325BAF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#325BAF',
        borderRadius: 50
    },
    inputInfo: { fontSize: 12, opacity: 0.4 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-evenly' },
    buttonStyle: {
        marginTop: 20,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#EFFCF4',
        borderRadius: 5
    },
    buttonTextStyle: { color: '#01D167', fontSize: 16 },
    saveButton: {
        position: 'absolute',
        bottom: 20,
        width: '80%',
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: '#01D167',
        borderRadius: 50,
        alignSelf: 'center',
        alignItems: 'center'
    },
    saveButtonStyle: { color: '#FFF', fontSize: 24, fontWeight: 'bold' }
});

export default styles;
