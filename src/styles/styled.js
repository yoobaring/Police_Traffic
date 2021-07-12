import React from 'react'
import { normalize } from "../functions";
import styled from 'styled-components/native';
import { Platform, Keyboard } from 'react-native';
import { size } from '../resource/font';
import { color } from '../resource';
import { isIphoneX } from 'react-native-iphone-x-helper'

export const Touchable = styled.TouchableOpacity.attrs((props) => ({
    activeOpacity: 0.8
}))`
    padding-vertical: ${normalize(8)};
`

export const Content = styled.View`
    padding-horizontal: ${normalize(8)};
    padding-top: ${normalize(8)};
    flex: 1;
`

export const Footer = styled.View`
    background-color: ${color.crimson};
    height: ${props => props.height || isIphoneX() ? normalize(80) : normalize(70)};
    padding-horizontal: ${normalize(8)};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    padding-bottom:  ${isIphoneX() ? normalize(15) : normalize(5)}
`

export const Row = styled.View`
    flex-direction: row;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
`

export const KeyboardContainer = styled.KeyboardAvoidingView.attrs((props) => ({
    behavior: Platform.OS === "android" ? "" : "padding",
    keyboardVerticalOffset: normalize(84)
}))`
    flex: 1
`

export const ScrollViewContainer = styled.ScrollView.attrs((props) => ({
    bounces: false,
    showsVerticalScrollIndicator: false,
    keyboardShouldPersistTaps: 'always',
    keyboardDismissMode: 'on-drag',
    onScrollBeginDrag: Keyboard.dismiss
}))`
    padding-horizontal: ${normalize(3)};
    background-color: ${color.backgroudcolorS};
`

export default {
    container: {
        paddingHorizontal: normalize(10)
    },
    inputLabelStyle: {
        width: '100%',
        borderRadius: normalize(5),
        borderWidth: 1,
        padding: 0,
        margin: 0,
        paddingVertical: normalize(10),
        paddingHorizontal: normalize(8),
        fontSize: size.head,
        color: color.black,
        height: normalize(48),
        borderColor: color.smoke,
    },
    rbContainerStyle: {
        borderTopRightRadius: normalize(20),
        borderTopLeftRadius: normalize(20),
        paddingHorizontal: normalize(20),
        zIndex: 999
    }
}