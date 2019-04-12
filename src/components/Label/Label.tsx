import styled from "styled-components";
import { Box } from "../Box/Box";

/**
 * Компонент текста
 * @example ./Text.example.md
 */
export const Label = styled(Box)`
  cursor: pointer;
`;

Label.defaultProps = {
  color: "#333333",
  as: 'label'
};

export default Label;
