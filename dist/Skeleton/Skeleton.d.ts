import React from 'react';
import { ViewProps, StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type SkeletonProps = {
    circle?: boolean;
    width?: number;
    height?: number;
    animation?: 'none' | 'pulse' | 'wave';
    skeletonStyle?: StyleProp<ViewStyle>;
    LinearGradientComponent?: React.ComponentType<any>;
} & ViewProps;
export declare const Skeleton: RneFunctionComponent<SkeletonProps>;
