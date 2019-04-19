import styled from "styled-components";
import {width, height, variant} from "styled-system";
import Box from "../Box/Box";


const ImageVariant = variant({
  key: "variant.imageVariant",
  prop: "variant"
});

export const Image: any = styled(Box)`
  ${width};
  ${height};
  ${ImageVariant};
`;

Image.defaultProps = {
  display: "block",
  as: 'img',
  maxWidth: '100%',
  height: 'auto'
};

export default Image;
