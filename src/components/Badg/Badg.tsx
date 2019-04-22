import * as React from "react";
import styled from "styled-components";

import { variant } from "styled-system";

const badgesPosition = variant({
  key: "variant.badgesPosition",
  prop: "position"
});

const Div = styled.div`
  position: absolute;
  ${badgesPosition};
`;

export interface IBadg {
  children?: any;
}

// export const Badg = (): IBadg => {
//   return <Div>1</Div>;
// };

export class Badg extends React.Component<IBadg> {
  render() {
    const { children } = this.props;
    return <Div>{children}</Div>;
  }
}

export default Badg;
