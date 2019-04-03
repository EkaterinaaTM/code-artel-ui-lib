import styled from "styled-components";
import { color, borderColor } from "styled-system";
// import BorderColorProperty from "../../styles/styleProperty/BorderColorProperty";
// import BackgroundColorProperty from "../../styles/styleProperty/BackgroundColorProperty";

export const Wrapper: any = styled.div`
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 300px;
  min-width: 140px;
  padding: 6px;
  position: absolute;
  right: 0;

  ${({ position }: any) => {
    switch (position) {
      case "bottom": {
        return `
          left: 14px;
          top: calc(100% + 10px);
        `;
      }
      case "top": {
        return `
          left: 14px;
          bottom: calc(100% + 10px);
        `;
      }
      default: {
        return `
          left: 14px;
          top: calc(100% + 10px);
        `;
      }
    }
  }}

  z-index: 1;
  text-align: left;
  border: 1px solid;
  border-radius: 3px;

  ${(props: any) => {
    return borderColor({ ...props, borderColor: "#B71C1C" });
  }}
`;

/* ${props => BorderColorProperty({ ...props, borderColor: "color12" })}
  ${props =>
    BackgroundColorProperty({
      ...props,
      backgroundColor: "color0"
    })} */

export const OutsideTriangle: any = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  z-index: 1;
  border-style: solid;
  border-width: 6.5px 14px 6.5px 0;
  border-color: transparent #b71c1c transparent transparent;

  ${({ position }: any) => {
    switch (position) {
      case "bottom": {
        return `
            transform: rotate(90deg);
            top: -14px;
            left: 15%;
          `;
      }
      case "top": {
        return `
          transform: rotate(-90deg);
          bottom: -14px;
          left: 15%;
        `;
      }
      default: {
        return `
          -webkit-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
          top: -14px;
          left: 15%;
        `;
      }
    }
  }}
`;
/* ${props => BorderColorProperty({ ...props, borderTopColor: "color12" })} */

export const InsideTriangle: any = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  z-index: 2;
  border-style: solid;
  border-width: 6.5px 14px 6.5px 0;
  border-color: transparent #fff transparent transparent;

  ${({ position }: any) => {
    switch (position) {
      case "bottom": {
        return `
          transform: rotate(90deg);
          top: -12px;
          left: 15%;
        `;
      }
      case "top": {
        return `
          transform: rotate(-90deg);
          bottom: -12px;
          left: 15%;
        `;
      }
      default: {
        return `
          transform: rotate(90deg);
          top: -12px;
          left: 15%;
        `;
      }
    }
  }}
`;
/* ${props => BorderColorProperty({ ...props, borderTopColor: "color12" })} */

export const Warning: any = styled.div`
  ${(props: any) => {
    return color({ ...props, color: "#B71C1C" });
  }}
  font-size:14px;
  line-height: 22px;
`;
