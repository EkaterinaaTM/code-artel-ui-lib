import styled from "styled-components";

/** View */
import { Box } from "../Box/Box";
import {variant} from "styled-system";

const CardVariants = variant({
  key: "variant.cardVariants",
  prop: "variant"
});

export const Card = styled(Box)`
  ${CardVariants};
`;

Card.defaultProps = {
  variant: "default",
};

export default Card;
