import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../Components/ui/Header'
import Screen from './Screen'

const defaultTests = require('../defaults/tests.json')

const AddTestScreen = ({navigation, route}) => {
    const {t} = useTranslation()

    const header = <Header icon='book-open' text={t('find-test')}>{t('add-test-description')}</Header>

    const renderer = ({item}) => {
        return <View style={styles.item}>
            <View style={styles.grow}>
                <Text style={[styles.bold]}>
                    {item.test} | {item.org}
                </Text>
                <Text>
                    {item.description.en}
                </Text>
            </View>
            <View style={styles.shrink}>
                <Icon name='chevron-right' />
            </View>
        </View>
    }

    const separator = <View style={styles.separator} />

    return (
        <Screen.List title={t('add-test')} header={header} navigation={navigation} renderer={renderer} separator={separator} data={defaultTests} />
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold'
    },
    grow : {
        alignSelf: "stretch",
        flex: 1,
        padding: 4
    }, 
    shrink: {
        display: 'flex',
        flexDirection: 'column',
        opacity: 0.4,
        justifyContent: 'center',
    },
    separator : {
        borderBottomColor: 'lightgray',
        marginHorizontal: 12,
        borderBottomWidth: 1
    }
})

export default AddTestScreen