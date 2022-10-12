import {Text, View, useColorScheme, StyleSheet, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../res/Colors'
const Section = ({children, title, onPress, icon}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <TouchableHighlight 
        style={styles.touchable} 
        onPress={onPress} 
        underlayColor='lightgray'
        >
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
              {icon && <><Icon name={icon} size={styles.sectionTitle.fontSize} style={styles.icon} /><Text> </Text> </>} 
              {title}
          </Text>
          <Text
            style={[
              styles.sectionDescription,
              {
                color: isDarkMode ? Colors.lighter : Colors.darker,
              },
            ]}>
            {children}
          </Text>
        </View>
      </TouchableHighlight>
    );
};


const styles = StyleSheet.create({
    sectionContainer: {
      marginVertical: 20,
      paddingHorizontal: 18,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    icon: {
    },
    spacer: {
      margin: 0,
      padding: 0,
    }
});
export default Section