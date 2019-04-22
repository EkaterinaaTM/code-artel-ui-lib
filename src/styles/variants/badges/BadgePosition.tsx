import { IPosition } from "../../interfaces";

export const BadgePosition = (): IPosition => {
  return {
    topStart: {
      top: 0,
      left: 0,
      transform: 'scale(1) translate(-50%, -50%)',
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

export default BadgePosition;
