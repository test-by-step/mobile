import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import Header from '../Components/ui/Header'
import Section from '../Components/ui/Section'
import Screen from './Screen'


const MainScreen = ({ navigation }) => {
    const { t } = useTranslation()

    const [recentlyAdded, setRecentlyAdded] = useState(null)
    const [recentlyStudied, setRecentlyStudied] = useState(null)

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

            { recentlyAdded && <>
                <Section title={t('recently-added')} icon='stopwatch'>
                    {t('recently-added-description')}
                </Section>

                <Separator />
            </>}
            
            { recentlyStudied && <>
                <Section title={t('recently-studied')} icon='graduation-cap'>
                    {t('recently-studied-description')}
                </Section>

                <Separator />
            </>}
            
            <Section 
                title={t('step-one')} 
                onPress={() => navigation.navigate('AddTest')}
                icon='folder-plus'
            >
                {t('step-one-description')}
            </Section>

            <Separator />

            <Section 
                title={t('step-two')}
                onPress={() => navigation.navigate('StudyBinder')}
                icon='book'
            >
                {t('step-two-description')}
            </Section>

        </Screen.Scroll>
    )
}

const Separator = () => {
    return <View style={{
        borderBottomWidth:1, 
        borderBottomColor: 'lightgray',
        marginHorizontal: 12
    }}></View>
}

export default MainScreen