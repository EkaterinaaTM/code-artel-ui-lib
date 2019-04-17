import styled from "styled-components";
import Flex from "../Flex/Flex";

interface IButtonGroup {
  vertical: boolean,
  [propName: string]: any,
}

export const ButtonGroup = styled(Flex)<IButtonGroup>`
  border: 0;
  width: 100%;
  display: flex;

  ${({vertical})=>{
    if(vertical){
      return `
        flex-direction: column;
      `
    } else {
      return `
        flex-direction: row;
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
  
  > {
    box-shadow: none;
  }
  
  >:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  >:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

`

ButtonGroup.defaultProps = {
  vertical: false,
};

export default ButtonGroup;
