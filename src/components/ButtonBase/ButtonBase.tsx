import styled from "styled-components";
import { variant } from "styled-system";

/** Enum constants */
import { ButtonEnum } from "../../styles/variants/ButtonVariant";

/**View */
import Box from "../Box/Box";

const buttonsVariant = variant({
  key: "variant.buttons",
  prop: "variant"
});
const buttonsSize = variant({
  key: "variant.buttonSize",
  prop: "size"
});

export interface IButtonBase {
  // // variant?: ButtonEnum;
  variant?: ButtonEnum;
  // // size button - property ?
  size?: string;
  [propName: string]: any;
}

/**
 * Компонента обычная кнопка
 * @example ./ButtonBase.example.md
 */
export const ButtonBase = styled(Box)<IButtonBase>`
  ${buttonsVariant};
  ${buttonsSize};
`;

ButtonBase.defaultProps = {
  variant: "default",
  size: "small",
  as: "button"
};

export default ButtonBase;