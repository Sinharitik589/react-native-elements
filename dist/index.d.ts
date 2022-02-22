import React from 'react';
export declare type CircularSliderProps = {
    trackRadius?: number;
    thumbRadius?: number;
    trackWidth?: number;
    value?: number;
    onChange?: (value: number) => void;
    trackColor?: string;
    thumbColor?: string;
    trackTintColor?: string;
    thumbTextColor?: string;
    thumbTextSize?: number;
    noThumb?: boolean;
    showText?: boolean;
    showThumbText?: boolean;
    textColor?: string;
    textSize?: number;
    minimumValue?: number;
    maximumValue?: number;
    maxAngle?: number;
    minAngle?: number;
    theme?: {
        colors: {
            primary?: string;
            grey5?: string;
            white?: string;
        };
    } & any;
};
declare const CircularSlider: React.FC<CircularSliderProps>;
export default CircularSlider;
