import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Components/ui/Header'
import Section from '../Components/ui/Section'
import Screen from './Screen'


const MainScreen = ({ navigation }) => {
    const { t } = useTranslation()
    const header = <Header icon='university' text={t('start-learning')}>{t('start-learning-description')}</Header>

    return (
        <Screen.Scroll 
            navigation={navigation}
            header={header} 
            title={t('welcome')}
            buttons={{
                left: [ {icon: 'cog', action: () => navigation.navigate('Settings')} ],
                right: [ {icon: 'plus', action: () => navigation.navigate('AddTest')}]
            }}
            >
            
            <Section title="Step One" onPress={() => navigation.navigate('Hello')}>
                {t('get-started')}
            </Section>
        </Screen.Scroll>
    )
}

export default MainScreen