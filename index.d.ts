// Definitions by: Augusto Lopez <https://github.com/augustolopez>
import React from 'react';
declare module '@augustolopez/react-circular-slider' {

  export interface CircularSliderProps {
    label?: string;
    width?: number;
    direction?: number;
    min?: number;
    max?: number;
    knobColor?: string;
    knobPosition?: string;
    knobSize?: number;
    hideKnob?: boolean;
    knobDraggable?: boolean;
    labelColor?: string;
    labelBottom?: boolean;
    labelFontSize?: string;
    valueFontSize?: string;
    appendToValue?: string;
    renderLabelValue?: any;
    prependToValue?: string;
    verticalOffset?: string;
    hideLabelValue?: boolean;
    progressLineCap?: string;
    progressColorFrom?: string;
    progressColorTo?: string;
    progressSize?: number;
    trackColor?: string;
    trackSize?: number;
    data?: any[];
    dataIndex?: number;
    onChange?: Function;
    children?: React.ReactNode;
  }

  const CircularSlider: React.FC<CircularSliderProps>;
  export default CircularSlider;
}