import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { OverlayProps } from '../Overlay';
import { RneFunctionComponent } from '../helpers';
export declare type DialogBaseProps = Omit<OverlayProps, 'fullScreen'> & {
    children?: ReactNode;
    isVisible?: boolean;
    overlayStyle?: StyleProp<ViewStyle>;
};
export declare const DialogBase: RneFunctionComponent<DialogBaseProps>;
