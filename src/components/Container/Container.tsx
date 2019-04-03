import styled from "styled-components";

/**View */
import { Box } from "../Box/Box";

export const Container = styled(Box)``;

Container.defaultProps = {
  mt: 0,
  mb: 0,
  ml: "auto",
  mr: "auto",
  maxWidth: "992px"
};

export default Container;
