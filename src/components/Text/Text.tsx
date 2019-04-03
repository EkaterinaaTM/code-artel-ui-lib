import styled from "styled-components";
import { Box } from "../Box/Box";

// /** Style property */
// import { BackgroundColorProperty } from "../../styles/styleProperty/BackgroundColorProperty";
// import { FillSvgProperty } from "../../styles/styleProperty/FillSvgProperty";
// import { FontFamilyProperty } from "../../styles/FontFamilyProperty";
// import { LineHeightProperty } from "../../styles/styleProperty/LineHeightProperty";

/**
 * Компонент текста
 * @example ./Text.example.md
 */
export const Text = styled(Box)`
  cursor: pointer;
`;

Text.defaultProps = {
  color: "#333333"
};

export default Text;
