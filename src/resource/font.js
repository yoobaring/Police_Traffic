import { normalize } from "../functions/normalize";

/**
 * TODO เก็บฟอนต์
 */

export default {
    regular: 'Kanit-Regular',
    bold: 'Kanit-Bold',
    medium: 'Kanit-Medium',
    semibold: 'Kanit-SemiBold',
    light: 'Kanit-Light',

    thaisans_xtralight: 'ThaiSansNeue-ExtraLight',
    thaisans_light: 'ThaiSansNeue-Light',
    thaisans_regular: 'ThaiSansNeue-Regular',
    thaisans_semibold: 'ThaiSansNeue-SemiBold',
    thaisans_bold: 'ThaiSansNeue-Bold',
    thaisans_black: 'ThaiSansNeue-Black',
}

export const size = {
    max: normalize(25),
    s24: normalize(24),
    s22: normalize(22),
    head: normalize(20),
    label: normalize(18),
    title: normalize(16),
    s15: normalize(15),
    s14: normalize(14),
    s13: normalize(13),
    text: normalize(12),
    desc: normalize(12),
    s10: normalize(11),
    radius: normalize(60),
    new_title: normalize(19),
    new_label: normalize(18),
    distance: normalize(17),
    maxgroup: normalize(28),


}