import { TextStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { TextProps } from '../Text';
export declare type DialogTitleProps = {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
};
export declare const DialogTitle: RneFunctionComponent<DialogTitleProps>;
