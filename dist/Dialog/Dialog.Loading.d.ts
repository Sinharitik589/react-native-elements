import { ViewStyle, ActivityIndicatorProps, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type DialogLoadingProps = {
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
};
export declare const DialogLoading: RneFunctionComponent<DialogLoadingProps>;
