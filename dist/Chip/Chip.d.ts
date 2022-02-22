import { RneFunctionComponent } from '../helpers';
import { ButtonProps } from '../Button';
export declare type ChipProps = Omit<ButtonProps, 'loading' | 'loadingStyle' | 'loadingProps'> & {
    type?: 'solid' | 'outline';
};
export declare const Chip: RneFunctionComponent<ChipProps>;
