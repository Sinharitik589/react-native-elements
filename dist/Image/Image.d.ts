import React from 'react';
import { ImageProps as RNImageProps, StyleProp, ViewStyle } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type ImageProps = RNImageProps & InlinePressableProps & {
    Component?: typeof React.Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: typeof React.Component;
    PlaceholderContent?: React.ReactElement;
    containerStyle?: StyleProp<ViewStyle>;
    childrenContainerStyle?: StyleProp<ViewStyle>;
    placeholderStyle?: StyleProp<ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
};
export declare const Image: RneFunctionComponent<ImageProps>;
