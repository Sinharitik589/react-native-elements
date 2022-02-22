import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type OverlayProps = Omit<ModalProps, 'visible'> & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: typeof React.Component;
} & Omit<InlinePressableProps, 'onPress'>;
export declare const Overlay: RneFunctionComponent<OverlayProps>;
