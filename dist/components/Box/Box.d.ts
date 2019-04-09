import { SpaceProps, DisplayProps, MaxWidthProps, MinWidthProps, HeightProps, MinHeightProps, OverflowProps, OpacityProps } from "styled-system";
export interface IBox extends SpaceProps, DisplayProps, MaxWidthProps, MinWidthProps, HeightProps, MinHeightProps, OverflowProps, OpacityProps {
    [propName: string]: any;
}
export declare const Box: import("styled-components").StyledComponent<"div", any, IBox, never>;
export default Box;
