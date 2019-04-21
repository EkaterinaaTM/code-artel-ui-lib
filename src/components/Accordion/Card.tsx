import * as React from "react";
import styled from "styled-components";

import Box from "../Box/Box";

const BlockTitle = styled(Box)`
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
  cursor: pointer;
`;

const BlockSubtitle = styled(Box)`
  border: 1px solid #333;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  color: #a52cda96;
`;

export interface ICardProps {
  title?: string;
  subtitle?: string;
  index?: any;
  open?: string;
}

export class Card extends React.Component<ICardProps> {
  state = this.initialState;

  get initialState() {
    return {
      open: false
    };
  }

  handleClick = (index: any, event: any): any => {
    if (index === +event.target.id) {
      this.setState(
        ({ open }: any): any => {
          return {
            open: !open
          };
        }
      );
    }
  };

  render() {
    const { title, subtitle, index } = this.props;
    return (
      <Box>
        <BlockTitle
          id={index}
          onClick={(event: any) => this.handleClick(index, event)}
        >
          {title}
        </BlockTitle>
        {this.state.open && <BlockSubtitle>{subtitle}</BlockSubtitle>}
      </Box>
    );
  }
}

export default Card;
