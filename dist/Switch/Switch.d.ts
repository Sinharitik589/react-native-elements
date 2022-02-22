import { SwitchProps as NativeSwitchProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type SwitchProps = NativeSwitchProps & {
    color?: string;
};
export declare const Switch: RneFunctionComponent<SwitchProps>;
