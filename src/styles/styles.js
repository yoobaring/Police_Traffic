import styled from 'styled-components'
import color from '../resource/color'
import { View, Image, Text} from 'react-native'
import Constants  from 'expo-constants'
import { normalize } from '../functions/normalize';

const StatusBarHight = Constants.statusBarHeight;

export const StyledContainer = styled.View`
padding: 25px;
background-color: ${color.primary};
padding-top: ${StatusBarHight + 10}px
flex: 1;
`
export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
`
export const PageLogo = styled.Image`
width: 200px;
height: 250px;
`
export const Pageicon = styled.Image`
width: 200px;
height: 200px;
`
export const PageTitle = styled.Text`
font-size: ${normalize(25)};
text-align: center;
font-weight: bold;
color: ${color.crimson};
padding: 10px;
`