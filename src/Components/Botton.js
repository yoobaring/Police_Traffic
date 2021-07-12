/**
 * TODO ไว้สำหรับสร้าง ปุ่มต่าง ๆ
 */

 import React from 'react';
 import { TouchableOpacity, Text, StyleSheet } from 'react-native'
 import { normalize } from '../functions';
 import { color, font, icon } from '../resource';
 import { size } from '../resource/font';
 import { Touchable } from '../styles/styled'
 import LinearGradient from 'react-native-linear-gradient';
 import { withNavigation } from 'react-navigation';
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 import { Row } from '../styles/styled'
 import * as Animatable from 'react-native-animatable'
 import FastImage from 'react-native-fast-image'
 import { isIphoneX } from 'react-native-iphone-x-helper';
 
 export const Button = ({ title, onPress = () => { }, btnStyle, width = '100%', touchStyle, linearColor }) => {
     const btnMainStyle = {
         ...styles.btnMainStyle,
         width: '100%',
         ...btnStyle
     }
 
     return <Touchable style={[width, touchStyle]} onPress={() => onPress()}>
         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={linearColor ? linearColor : color.linearBack} style={btnMainStyle}>
             <Text style={[styles.textButton]}>{title}</Text>
         </LinearGradient>
     </Touchable>
 }
 
 export const ButtonLink = ({ title, btnStyle, textStyle, onPress = () => { } }) => {
     return <Touchable style={[btnStyle]} onPress={onPress}>
         <Text style={[styles.textLink, textStyle]}>{title}</Text>
     </Touchable>
 }
 
 export const ButtonWhite = ({ title, containerStyle, disabled = false, textStyle, reverse, width = '80%', color,
     onPress = () => { }, }) => {
     containerStyle = {
         width,
         borderColor: reverse ? color : 'transparent',
         backgroundColor: reverse ? '#fff' : color,
         borderRadius: ~~normalize(10),
         ...containerStyle,
         shadowColor: color,
         shadowOpacity: 0.8,
         elevation: 24,
         shadowRadius: 15,
         shadowOffset: { width: 0, height: 13 }
     }
 
     textStyle = {
         color: reverse ? color : '#fff',
         fontFamily: font.regular,
         ...textStyle
     }
     return <Touchable disabled={disabled} style={[styles.contentBtnMain, containerStyle]} onPress={onPress}>
         <Text style={[styles.textBtnMain, textStyle]}>{title}</Text>
     </Touchable>
 }
 
 export const ButtonBlue = ({ title, onPress = () => { }, btnStyle, width = '100%', touchStyle, textStyle }) => {
     const btnMainStyle = {
         ...styles.btnMainStyle,
         ...btnStyle
     }
 
     return <Touchable style={[width, touchStyle]} onPress={() => onPress()}>
         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={color.linearSearch} style={btnMainStyle}>
             <Text style={[styles.textButton, textStyle]}>{title}</Text>
         </LinearGradient>
     </Touchable>
 }
 
 export const ButtonBack = withNavigation(({ navigation, fn, btnStyle, colorIcon, label, textStyle }) => {
     const btnMainStyle = {
         alignItems: 'center',
         justifyContent: 'center',
         paddingVertical: normalize(8),
         ...btnStyle,
         paddingTop: isIphoneX() ? normalize(20) : normalize(15)
     }
 
     return <TouchableOpacity onPress={() => {
         navigation.goBack(null);
         fn && fn();
     }} style={[{ marginRight: normalize(10), marginTop: normalize(3) }, btnMainStyle]}>
         <Row>
             <FontAwesome5 name={'angle-left'} size={normalize(30)} color={colorIcon} />
             <Text style={{ ...textStyle, fontFamily: font.regular, marginLeft: normalize(10) }}>{label}</Text>
         </Row>
     </TouchableOpacity>
 })
 
 export const ButtonAdd = ({ btnStyle, onPress = () => { }, animation = true }) => {
     const SIZE_IMAGE = normalize(30)
 
     const btnMainStyle = {
         ...styles.btnMainStyle,
         paddingVertical: normalize(8),
         ...btnStyle,
         height: normalize(50), width: normalize(50),
         position: 'absolute',
         borderRadius: 50,
     }
 
     const touchStyle = {
         height: normalize(50), width: normalize(50),
         position: 'absolute',
         bottom: 30,
         right: 30,
         borderRadius: 50,
     }
 
     return <Touchable onPress={onPress} style={touchStyle}>
         <Animatable.View animation={animation ? 'rubberBand' : ''} iterationCount={2}>
             <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={color.linearHome} style={btnMainStyle}>
                 <Animatable.View animation={animation ? "fadeInUp" : ''} iterationDelay={1500}>
                     <MaterialIcons
                         name={'add'}
                         color={'#fff'}
                         size={SIZE_IMAGE}
                     />
                 </Animatable.View>
             </LinearGradient>
         </Animatable.View>
     </Touchable>
 }
 
 export const ButtonOption = ({ onAdd = () => { }, label = 'ตัวเลือก' }) => {
     return (<Touchable style={{
         flexDirection: 'row', alignItems: 'center',
         alignSelf: 'flex-start', paddingHorizontal: normalize(10)
     }} onPress={onAdd}>
         <Row style={{ backgroundColor: color.text_blue, borderRadius: normalize(12), paddingHorizontal: normalize(10), paddingVertical: normalize(3) }}>
             <FastImage source={icon.plus} style={{
                 width: normalize(12), height: normalize(12),
             }} tintColor={'white'} resizeMode={FastImage.resizeMode.contain} />
             <ButtonLink title={label}
                 btnStyle={{ paddingVertical: 0, marginLeft: normalize(6) }}
                 textStyle={{ fontSize: size.s14, color: 'white' }}
                 onPress={onAdd}
             />
         </Row>
     </Touchable>)
 }
 
 export const ButtonSelect = ({ title,
     active,
     btnStyle,
     width = '100%',
     onPress = () => { } }) => {
     const btnMainStyle = {
         ...styles.btnMainStyle,
         width,
         borderWidth: 1,
         borderRadius: 0,
         borderColor: active ? 'transparent' : color.bg_place,
     }
 
     const fontInput = {
         flex: 1,
         color: active ? '#fff' : color.black,
         fontFamily: font.bold,
         fontSize: size.s18
     }
 
     const colors = active ? color.linearSearch : [color.under_input, color.under_input]
 
     return <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors} style={{ flex: 1, borderRadius: ~~normalize(5), ...btnStyle }}>
         <Touchable style={btnMainStyle} onPress={onPress}>
             <Text style={fontInput}>{title}</Text>
         </Touchable>
     </LinearGradient>
 }
 
 const styles = StyleSheet.create({
     textButton: {
         fontFamily: font.regular,
         fontSize: normalize(15),
         color: color.white
     },
     textLink: {
         fontFamily: font.regular,
         color: color.text_blue,
         fontSize: size.desc
     },
     contentBtnMain: {
         alignItems: 'center',
         paddingVertical: normalize(6),
         justifyContent: 'center',
         width: '100%'
     },
     textBtnMain: {
         fontSize: normalize(16),
         color: '#fff',
     },
     btnMainStyle: {
         alignItems: 'center',
         justifyContent: 'center',
         paddingVertical: normalize(8),
         borderRadius: ~~normalize(20)
     },
 })