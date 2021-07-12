/**
 * TODO ไว้สำหรับสร้าง Header
 */

 import React from 'react';
 import { withNavigation } from 'react-navigation'
 import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
 import { normalize } from '../functions';
 import { size } from '../resource/font';
 import { color, font } from '../resource';
 import LinearGradient from 'react-native-linear-gradient';
 import { Row } from '../styles/styled';
 //import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
 
//  export const HeaderBack = withNavigation(({ navigation, title, _c = color.linearHome, fn, children }) => {
//      const viewStyle = {
//          ...styles.header_main,
//          paddingHorizontal: 0,
//          paddingTop: normalize(20),
//          paddingVertical: 0,
//          paddingBottom: normalize(10),
//          paddingLeft: normalize(8),
//          paddingRight: normalize(12)
//      }
//      return <LinearGradient colors={_c} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[viewStyle]}>
 
//          <Row justifyContent={'space-between'}>
//              <TouchableOpacity onPress={() => {
//                  navigation.goBack(null);
//                  fn && fn();
//              }} style={{ flexDirection: 'row', alignItems: 'center' }}>
//                  <SimpleLineIcons name={'arrow-left'} size={size.label} style={{ marginTop: normalize(3) }} color={color.white} />
//                  <Text style={styles.text_back}>{title}</Text>
//              </TouchableOpacity>
//              {children}
//          </Row>
//      </LinearGradient>
//  })
 
 export const HeaderTitle = ({ title, viewStyle, textStyle }) => {
     return <View style={[viewStyle]}>
         <Text style={[styles.header_title, textStyle]}>{title}</Text>
     </View>
 }
 
 const styles = StyleSheet.create({
     header_title: {
         fontSize: normalize(30),
         color: color.black,
         fontFamily: font.medium,
     },
     header_main: {
         justifyContent: 'center',
         paddingHorizontal: normalize(20),
         height: normalize(80)
     },
     text_back: {
         fontSize: size.label,
         fontFamily: font.semibold,
         marginLeft: normalize(2),
         color: color.white
     },
 })