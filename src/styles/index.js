import { StyleSheet } from "react-native";
import { normalize } from "../functions/normalize";
import { color, font } from "../resource";
import { size } from "../resource/font";


export const globalStyle = StyleSheet.create({
    content_textinput: {
        paddingVertical: normalize(6),
        padding: 0,
        margin: 0,
        paddingHorizontal: normalize(8),
        backgroundColor: color.bg_place,
        borderRadius: ~~normalize(5),
        fontFamily: font.regular,
        fontSize: size.title,
        marginTop: normalize(3),
        color: color.black
    },
    container_rb: {
        borderTopRightRadius: normalize(20),
        borderTopLeftRadius: normalize(20),
        paddingHorizontal: normalize(20)
    },
    head_menu: {
        fontSize: size.label,
        fontFamily: font.semibold
    },
    text_cus: {
        fontSize: size.head,
        color: color.accent,
        fontFamily: font.thaisans_semibold,
    },
    text_code: {
        fontSize: size.label,
        color: color.black,
        fontFamily: font.thaisans_light,
    }
})