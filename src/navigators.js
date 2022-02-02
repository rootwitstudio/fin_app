import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MainView from './pages/DebitCard/views/MainView';
import SpendingLimit from './pages/DebitCard/views/SpendingLimit';

const DebitTabStackNav = createStackNavigator();
function DebitTabStack() {
    return (
        <DebitTabStackNav.Navigator
            initialRouteName="TabA"
            screenOptions={{
                headerShown: false
            }}
        >
            <DebitTabStackNav.Screen name="TabADetails" component={MainView} />
            <DebitTabStackNav.Screen name="Spendinglimit" component={SpendingLimit} />
        </DebitTabStackNav.Navigator>
    );
}

const FinTabNav = createBottomTabNavigator();
function FinTab() {
    return (
        <FinTabNav.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#01D167',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home-circle' : 'home-circle-outline';
                            break;
                        case 'Debit Card':
                            iconName = focused ? 'credit-card' : 'credit-card-outline';
                            break;
                        case 'Payments':
                            iconName = focused ? 'account-cash' : 'account-cash-outline';
                            break;
                        case 'Credit':
                            iconName = focused ? 'arrow-up-drop-circle' : 'arrow-up-drop-circle-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'account-circle' : 'account-circle-outline';
                            break;
                        default:
                            break;
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                }
            })}
        >
            <FinTabNav.Screen name="Home" component={DebitTabStack} />
            <FinTabNav.Screen name="Debit Card" component={DebitTabStack} />
            <FinTabNav.Screen name="Payments" component={DebitTabStack} />
            <FinTabNav.Screen name="Credit" component={DebitTabStack} />
            <FinTabNav.Screen name="Profile" component={DebitTabStack} />
        </FinTabNav.Navigator>
    );
}

function RootContainer() {
    return (
        <NavigationContainer>
            <FinTab />
        </NavigationContainer>
    );
}

export default RootContainer;
