import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ShortTest from '../Components/list-items/ShortTest'
import Header from '../Components/ui/Header'
import Separator from '../Components/ui/Separator'
import Screen from './Screen'

const defaultTests = require('../defaults/tests.json')

const AddTestScreen = ({navigation, route}) => {
    const {t} = useTranslation()

    const [refreshing, setRefreshing] = useState(false)

    const header = <Header icon='book-open' text={t('find-test')}>{t('add-test-description')}</Header>

    const renderer = ({item}) => {
        return <ShortTest item={item} />
    }

    const separator = <Separator />

    const onRefresh = () => {}

    return (
        <Screen.List 
            title={t('add-test')} 
            header={header} 
            navigation={navigation} 
            renderer={renderer} 
            separator={separator} 
            data={defaultTests} 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            />
    )
}


export default AddTestScreen