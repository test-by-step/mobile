import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({children, text, icon, textStyle}) => {
    return <View style={styles.header}>
        <Text style={[styles.text, textStyle]}>
            {icon && <>
                <Icon size={styles.text.fontSize} name={icon} />
                <View style={{width:8}}><Text> </Text></View>
            </>}
            {text}
        </Text>
        {
            children && <Text style={[textStyle,styles.children]}>
                {children}
            </Text>
        }
    </View>
}

const styles = StyleSheet.create({
    header: {
        padding: 8,
        color: 'inherit',
        flex: 1,
        margin: 6
    },
    text : {
        fontSize: 20,
        
    },
    children : {
        marginTop: 6,
        fontSize: 16
    }
})

export default Header