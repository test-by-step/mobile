import React from 'react'
import { Text } from 'react-native'
import Header from '../Components/ui/Header'
import Screen from './Screen'


const HelloScreen = ({navigation, route}) => {
    const header = <Header text="Hello world" />
    return (
        <Screen.Scroll color='lightgreen' variant='dark' navigation={navigation} header={header}>
            <Text>
                Hello World
            </Text>
            <Text>
                Hello World
            </Text>
        </Screen.Scroll>
    )
}

export default HelloScreen