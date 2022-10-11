import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import Screen from './Screen'


const SettingsScreen = ({navigation, route}) => {
    const {t} = useTranslation()
    return (
        <Screen.Scroll title={t('settings')} navigation={navigation}>
            <Text>
                {t('settings-description')}
            </Text>
        </Screen.Scroll>
    )
}

export default SettingsScreen