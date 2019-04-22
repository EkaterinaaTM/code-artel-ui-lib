import styled from "styled-components";

import {variant} from "styled-system";

const badgesPosition = variant({
  key: "variant.badgePosition",
  prop: "position"
});

const badgeVariants = variant({
  key: "variant.badgeVariants",
  prop: "variant"
});

export interface IBadge {
  children?: any;
  variant?: string;
  position?: string;
}

export const Badge = styled.div<IBadge>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 500px;
  flex-shrink: 0;
  
  ${badgesPosition};
  ${badgeVariants};
  
`;

Badge.defaultProps = {
  variant: 'default',
  position: 'topEnd',
};

export default Badge;
