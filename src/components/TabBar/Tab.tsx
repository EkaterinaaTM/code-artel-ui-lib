import * as React from "react";
import { Tab as DefaultTab } from "rebass";
import styled from "styled-components";
import { border } from "styled-system";

/**
 * Component Tab
 * @example ./Tab.example.md
 */
export const Tab = styled(DefaultTab)`
  border-bottom: ${props => (props.active ? null : "2px solid #1EA540")};
  ${border};
  cursor: pointer;
`;

export default Tab;
