import * as React from "react";
import styled from "styled-components";
import * as ReactTooltip from 'react-tooltip';

import {variant} from "styled-system";

export interface ITooltipBase {
  variant?: any;
  place?: any,
  [propName: string]: any
}


const tooltipVariant = variant({
  key: "variant.tooltipVariant",
  prop: "variant"
});

const ReactTooltipStyled = styled(ReactTooltip)`
  ${tooltipVariant};
`;


/**
 * Компонент тултипа (Tooltip)
 * @example ./TooltipBase.example.md
 */
export class TooltipBase extends React.Component<ITooltipBase> {

  static defaultProps = {
    variant: "dark",
    effect: 'solid',
    place: 'top',
    id: 'ReactTooltipGlobal',
  };

  render() {
    const {variant} = this.props;

    return (<ReactTooltipStyled
      variant={variant}
      type={variant}
      {...this.props}
    />);
  }
}

export default TooltipBase;
