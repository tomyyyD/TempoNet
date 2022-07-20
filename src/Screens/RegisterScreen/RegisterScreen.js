import {Text, TextInput, Image, TouchableOpacity, View, Button} from 'react-native'

const RegisterScreen = ({navigation}) => {
    const LogIn = () => {
        navigation.navigate('Login');
    }

    return (
        <View>
            <Text>Hello</Text>
            <Button title="Log In" onPress={LogIn}></Button>
        </View>
    );
}

export default RegisterScreen;