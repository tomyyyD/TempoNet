import React, {useState} from 'react'
import {Text, TextInput, Image, TouchableOpacity, View, Button} from 'react-native'
import {styles, colors} from '../../Styles'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [events, setEvents] = useState('');
    const [personalBests, setPersonalBests] = useState('');
    const [pace, setPace] = useState('')
    const [runDistance, setRunDistance] = useState('');
    const [weeklyDistance, setWeeklyDistance] = useState('')

    const BACKGROUND_COLOR = '#2F2F2F';
    const MAIN_COLOR = "#B0B3EB";
    const HIGHLIGHT_COLOR_PINK = "#D1ACF6";
    const LIGHTER_COLOR = "#A294D4";
    const HIGHLIGHT_COLOR_BLUE = "#ACD7F6";
    const DARKER_COLOR = "#94A8D4";    

    const LogIn = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={[styles.contentContainer, colors.bcBackground]}>
            <View style={[styles.decoration, colors.hcpBackground]}></View>
            <Text style={[styles.titleText, colors.hcpText]}>Register!</Text>
            <View style={styles.registerContainer}>
                <View style={[styles.horizontalContainer, styles.fullContainer]}>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.lcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.lcText]}
                            placeholder='Email'
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholderTextColor={LIGHTER_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.lcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.lcText]}
                            placeholder='Username'
                            onChangeText={(text) => setUsername(text)}
                            value={username}
                            placeholderTextColor={LIGHTER_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'                        
                        />
                    </View>
                </View>
                <View style={[styles.horizontalContainer, styles.fullContainer]}>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.lcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.lcText]}
                            placeholder='password'
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            placeholderTextColor={LIGHTER_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.lcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.lcText]}
                            placeholder='Confirm Password'
                            onChangeText={(text) => setConfPassword(text)}
                            value={confPassword}
                            placeholderTextColor={LIGHTER_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'                        
                        />
                    </View>
                </View>
                <View style={[styles.horizontalContainer, styles.fullContainer]}>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.mcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.mcText]}
                            placeholder='First Name'
                            onChangeText={(text) => setFirstName(text)}
                            value={firstName}
                            placeholderTextColor={MAIN_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.mcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.mcText]}
                            placeholder='Last Name'
                            onChangeText={(text) => setLastName(text)}
                            value={lastName}
                            placeholderTextColor={MAIN_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'                        
                        />
                    </View>
                </View>
                <View style={[styles.inputContainer, styles.largeContainer, colors.mcBorder]}>
                    <TextInput 
                        style={[styles.inputText, colors.mcText]}
                        placeholder='Events'
                        onChangeText={(text) => setEvents(text)}
                        value={events}
                        placeholderTextColor={MAIN_COLOR}
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'                        
                    />
                </View>
                <View style={[styles.inputContainer, styles.largeContainer, colors.dcBorder]}>
                    <TextInput 
                        style={[styles.inputText, colors.dcText]}
                        placeholder='Personal Bests'
                        onChangeText={(text) => setPersonalBests(text)}
                        value={personalBests}
                        placeholderTextColor={DARKER_COLOR}
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'                        
                    />
                </View>
                <View style={[styles.horizontalContainer, styles.fullContainer]}>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.dcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.dcText]}
                            placeholder='Run Pace (mm:ss)'
                            onChangeText={(text) => setPace(text)}
                            value={pace}
                            placeholderTextColor={DARKER_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={[styles.inputContainer, styles.smallContianer, colors.dcBorder]}>
                        <TextInput 
                            style={[styles.inputText, colors.dcText]}
                            placeholder='Avg. Run Disance'
                            onChangeText={(text) => setRunDistance(text)}
                            value={runDistance}
                            placeholderTextColor={DARKER_COLOR}
                            autoCapitalize='none'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                </View>
                <View style={[styles.inputContainer, styles.smallContianer, colors.hcbBorder]}>
                    <TextInput 
                        style={[styles.inputText, colors.dcText]}
                        placeholder='Weekly Distance'
                        onChangeText={(text) => setWeeklyDistance(text)}
                        value={weeklyDistance}
                        placeholderTextColor={HIGHLIGHT_COLOR_BLUE}
                        autoCapitalize='none'
                        underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={[styles.button, colors.hcbBackground]}>
                    <Text style={[styles.headerText, colors.bcText]}>Sign-Up!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonAlt, colors.hcbBorder]} onPress={LogIn}>
                    <Text style={[styles.headerText, colors.hcbText]}>Back</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default RegisterScreen;