import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, useColorScheme, View } from 'react-native';
import { Colors } from '../res/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';


const ScreenComponent = ({children, buttons, title, navigation, color, variant}) => {

    const variantColor = variant === 'light' ? 'ghostwhite' : 'black'

    const headerButton = (item, index) => {
        return item.action ? 
            <TouchableHighlight onPress={item.action} key={index} >
                <Icon name={item.icon} size={20} color={variantColor} />
            </TouchableHighlight>
        :
            <Icon name={item.icon} size={20} color={variantColor} />
    }

    useEffect(()=>{
        navigation && navigation.setOptions({
            headerStyle: {
                backgroundColor:color
            },
            headerTintColor: variantColor
        })
        buttons && buttons.right && navigation.setOptions({
            headerRight: () => buttons.right.map((item, index)=>{
                return headerButton(item, index)
            })
        })
        buttons && buttons.left && navigation.setOptions({
            headerLeft: () => buttons.left.map((item, index)=>{
                return headerButton(item, index)
            })
        })
        title && navigation.setOptions({
            title: title
        })
    },[])

    const screenColor = {
        backgroundColor: color
    };

    return (
        <View style={styles.screen}>
            <StatusBar
                barStyle={variant === 'light' ? 'light-content' : 'dark-content'}
                backgroundColor={color}
            />
            {children}
        </View>
    )
}

const ScrollScreen = ({children, buttons, navigation, title, color='slategray', variant='light', header}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const screenBG = {
        backgroundColor: color
    }
    const screenColor = {
        color: variant === 'light' ? 'ghostwhite' : 'black'
    }
    const contentColor = {
        color: isDarkMode ? Colors.lighter : Colors.darker,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    return <ScreenComponent color={color} buttons={buttons} variant={variant} navigation={navigation} title={title}>

        <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={[styles.scroll]}
                >
                {Platform.OS === 'ios' && (
                    <View 
                    style={{
                        backgroundColor: color,
                        height: 1000,
                        position: 'absolute',
                        top: -1000,
                        left: 0,
                        right: 0,
                    }} 
                    />
                )}
                {header && <View style={[styles.header,screenColor, screenBG]}>
                    {React.cloneElement(header, {textStyle: screenColor})}
                </View>}
                
                <View
                    style={[styles.contentView, contentColor]}>
                    {children}
                </View>
            </ScrollView>
    </ScreenComponent>
}


const ListScreen = ({
    buttons, 
    navigation, 
    title, 
    color='slategray', 
    variant='light', 
    header,
    separator,
    data,
    renderer
}) => {
    const isDarkMode = useColorScheme() === 'dark';
    const screenBG = {
        backgroundColor: color
    }
    const screenColor = {
        color: variant === 'light' ? 'ghostwhite' : 'black'
    }
    const contentColor = {
        color: isDarkMode ? Colors.lighter : Colors.darker,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }

    return <ScreenComponent color={color} buttons={buttons} variant={variant} navigation={navigation} title={title}>

        <FlatList
            data={data}
            renderItem={renderer}
            keyExtractor={ item => item.index }
            ItemSeparatorComponent={separator}
            ListHeaderComponent={
                header ? 
                <View style={[styles.header,screenColor, screenBG]}>
                    {React.cloneElement(header, {textStyle: screenColor})}

                    {Platform.OS === 'ios' && (
                        <View 
                        style={{
                            backgroundColor: color,
                            height: 1000,
                            position: 'absolute',
                            top: -1000,
                            left: 0,
                            right: 0,
                        }} 
                        />
                    )}
                </View> 
                : null
            }
            />
    </ScreenComponent>
}

const Screen = { Scroll: ScrollScreen, List: ListScreen }

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
    },
    contentView: {
        flex: 1,
        minHeight: '100%'
    },
    scroll: {
        flex: 1,
        display: 'flex'
    }
});

export default Screen