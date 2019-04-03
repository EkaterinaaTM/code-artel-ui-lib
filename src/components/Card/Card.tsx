import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";

/**
 * Компонент карточки
 * @example ./Card.example.md
 */
export const Card = styled(Box)`
  margin: 0 auto;
  cursor: pointer;
`;

Card.defaultProps = {
  borderRadius: 2,
  border: "1px solid #AEAEAE",
  minHeight: "150px"
};

export default Card;
