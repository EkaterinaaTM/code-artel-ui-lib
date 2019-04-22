import { IBadgesPosition } from "../../interfaces";

const stylesAll = {
  backgroundColor: 'red',
  borderRadius: '50%',
  width: '20px',
  textAlign: 'center',
  color: 'white',
  position: 'absolute',
}

export const BadgesPosition = (): IBadgesPosition => {
  return {
    topRight: { 
      ...stylesAll,
      top: 0,
      right: 0,
    },
    topLeft: {   
      ...stylesAll,
      top: 0,
      left: 0,
    },
    bottomLeft: {
      ...stylesAll,
      bottom: 0,
      left: 0,
    },
    bottomRight: {
      ...stylesAll,
      bottom: 0,
      right: 0,
    }
  },
};

export default BadgesPosition;
