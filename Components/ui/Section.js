import {Text, View, useColorScheme, StyleSheet, TouchableHighlight} from 'react-native'
import { Colors } from '../../res/Colors'
const Section = ({children, title, onPress}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <TouchableHighlight sylte={styles.touchable} onPress={onPress}>
        <View style={styles.sectionContainer}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            {title}
          </Text>
          <Text
            style={[
              styles.sectionDescription,
              {
                color: isDarkMode ? Colors.light : Colors.dark,
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
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});
export default Section