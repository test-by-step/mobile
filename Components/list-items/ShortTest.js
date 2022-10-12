import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

const ShortTest = ({item}) => {
    return <View style={styles.item}>
        <View style={styles.grow}>
            <Text style={[styles.bold]}>
                {item.test} | {item.org}
            </Text>
            <Text style={styles.description}>
                {item.description.en}
            </Text>
        </View>
        <View style={styles.shrink}>
            <Icon name='chevron-right' />
        </View>
    </View>
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
    description: {
        paddingTop: 8
    }
})

export default ShortTest