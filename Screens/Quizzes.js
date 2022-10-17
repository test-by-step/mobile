import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ShortOrg from '../Components/list-items/ShortOrg'
import Header from '../Components/ui/Header'
import Separator from '../Components/ui/Separator'
import Screen from './Screen'
import TestsModel from '../Models/tests/TestsModel'

const QuizzesScreen = ({navigation, route}) => {
    const {t} = useTranslation()

    const [refreshing, setRefreshing] = useState(false)

    const testsModel = new TestsModel()

    const header = <Header icon='glasses' text={t('test-knowledge')}>{t('quizzes-description')}</Header>

    const renderer = ({item}) => {
        return <ShortOrg item={item} />
    }

    const separator = <Separator />

    const onRefresh = () => {}

    return (
        <Screen.List 
            title={t('quizzes')} 
            header={header} 
            navigation={navigation} 
            renderer={renderer} 
            separator={separator} 
            data={testsModel.getOrganizations()} 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            />
    )
}


export default QuizzesScreen