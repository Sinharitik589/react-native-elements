import React from 'react';
import { TextProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type BadgeProps = {
    containerStyle?: StyleProp<ViewStyle>;
    badgeStyle?: StyleProp<ViewStyle>;
    textProps?: TextProps;
    textStyle?: StyleProp<TextStyle>;
    value?: React.ReactNode;
    Component?: typeof React.Component;
    status?: 'primary' | 'success' | 'warning' | 'error';
} & InlinePressableProps;
export declare const Badge: RneFunctionComponent<BadgeProps>;
