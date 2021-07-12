import React,{ Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { normalize } from '../src/functions';
import { width } from '../src/functions/normalize';
import { color, } from '../src/resource';
import { size } from '../src/resource/font';
import icon from './resource/icon';
import { InnerContainer, PageLogo, StyledContainer, PageTitle, Pageicon } from './styles/styles';
import { Touchable, KeyboardContainer, ScrollViewContainer } from './styles/styled'


class LoginScreen extends Component {
    render() {
        return (
            <StyledContainer>
                <InnerContainer>
                  <PageLogo source={icon.logo} style={[styles.logo]} resizeMode='cover' /> 
                  <PageTitle style={{paddingTop: normalize(10)}} >POLICE TRAFFIC</PageTitle>
                  <Text style={styles.text_login}>Account Login</Text>
                  <View>
                    <Text style={[styles.text_login,{fontSize: size.s13, marginTop: normalize(10)}]}>Email Address</Text>
                    <TextInput
                        //onChangeText={value => setEmail(value)}
                        name="email"
                        style={styles.btn_input}
                       // value={email}
                        autoCapitalize="none"
                        placeholderTextColor={color.borderColor}
                        placeholder={'arsdin.7866@gmail.com'}
                    />
                  </View>
                  <View>
                    <Text style={[styles.text_login,{fontSize: size.s13, marginTop: normalize(10)}]}>Password</Text>
                    <TextInput
                        //onChangeText={value => setEmail(value)}
                        name="Password"
                        style={[styles.btn_input, {fontSize: size.s15}]}
                       // value={email}
                        autoCapitalize="none"
                        placeholderTextColor={color.borderColor}
                        placeholder={'********'}
                    />
                  </View>
                  <Touchable style={{ alignContent:  'flex-end', paddingStart: '70%' }}>
                  <Text style={{color: color.blue, fontSize: size.s15 }}>Sing up</Text>     
                  </Touchable>
                  <Touchable style={[styles.btn_google_login,{backgroundColor: color.crimson}]}>
                     <Text style={styles.text_logo}>Login</Text> 
                  </Touchable> 
                  <Touchable style={styles.btn_google_login}>
                     <Image source={icon.google} style={styles.logo_google} resizeMode='contain'/>
                     <Text style={styles.text_login}>Sign in with Google</Text> 
                  </Touchable> 
                </InnerContainer>
            </StyledContainer>
        )
    }
}


const SIZE_LOGO = normalize(140);
const SIZE_GOOGLE = normalize(20)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_google_login: {
        marginTop: normalize(15),
        backgroundColor: color.primary,
        paddingHorizontal: normalize(10),
        height: normalize(45),
        width: width * 0.8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: ~~normalize(7),
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 18,
    },
    logo_google: {
        width: SIZE_GOOGLE,
        height: SIZE_GOOGLE,
    },
    text_login: {
        fontSize: size.title,
        marginLeft: normalize(7),
    },
    logo: {
        width: SIZE_LOGO,
        height: SIZE_LOGO,
        marginTop: -normalize(25),
    },
    text_logo: {
        fontSize: size.head,
        marginLeft: normalize(7),
        fontWeight: 'normal',
        color: color.primary
    },
    btn_input: {
        marginTop: normalize(10),
        height: normalize(45),
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(10),
        width: width * 0.8,
        backgroundColor: color.input,
        borderWidth: normalize(1),
        borderColor: color.borderColor
        
    },
    eye: {
        position: "absolute",
        right: 0,
        bottom: 0,
        fontSize: 25,
        color: color.smoke,
        padding: 20,
        paddingRight: 15
      },
})

export default LoginScreen
