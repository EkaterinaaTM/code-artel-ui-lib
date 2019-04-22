import styled from "styled-components";
import Flex from "../Flex/Flex";

interface IButtonGroup {
  vertical: boolean,
  [propName: string]: any,
}

export const ButtonGroup = styled(Flex)<IButtonGroup>`
  
  > * {
    box-shadow: none;
  }
  
  border: 0;
  width: 100%;
  display: flex;

  ${({vertical})=>{
    if(vertical){
      return `
        flex-direction: column;
        >:not(:last-child) {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        >:not(:first-child) {
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }
      `
    } else {
      return `
        flex-direction: row;
        >:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        >:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      `
    }
  }};
  
  flex-wrap: wrap;

  @media (min-width: 576px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }


`;

ButtonGroup.defaultProps = {
  vertical: false,
};

export default ButtonGroup;
