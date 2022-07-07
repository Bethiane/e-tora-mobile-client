import { Text } from "react-native"
import { View,Image } from "react-native"
import { styles } from "./style.js"

export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('SignUp')
    },5000)

    return (
        <View style={styles.splash}>
            <Image style={styles.logo} source={require(`../assets/images/logo.png`)} />
        </View>
    )
}