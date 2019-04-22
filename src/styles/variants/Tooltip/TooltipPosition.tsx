// TooltipPosition.tsx
import { IPosition } from "../../interfaces";

export const TooltipPosition = (): IPosition => {
  return {
    topStart: {
      top: 0,
      left: 0,
      transform: 'scale(1) translate(50%, -100%)',
    },
    top: {
      top: 0,
      left: 0,
      transform: 'translate3d(47px, 44px, 0px)',
    },
    topEnd: {
      top: 0,
      right: 0,
      transform: 'scale(1) translate(50%, -50%)',
    },
    bottomStart: {
      bottom: 0,
      left: 0,
      transform: 'scale(1) translate(-50%, 50%)',
    },
    bottomEnd: {
      bottom: 0,
      right: 0,
      transform: 'scale(1) translate(50%, 50%)',
    }
  }
};

export default TooltipPosition;
