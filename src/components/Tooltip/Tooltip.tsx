import * as React from "react";

export class Tooltip extends React.Component {
  // static defaultProps = {
  //   content: "Tooltip content",
  //   style: {},
  //   position: "top"
  // };

  state = {
    visible: false
  };

  show = () => {
    this.setVisibility(true);
  };

  hide = () => {
    this.setVisibility(false);
  };

  setVisibility = (visible: boolean) => {
    this.setState({ visible });
  };

  render() {
    const { visible } = this.state;
    const { children, content, style }: any = this.props;

    return (
      <span>
        {visible && <span style={style}>{content}</span>}
        <span onMouseEnter={this.show} onMouseLeave={this.hide}>
          {children}
        </span>
      </span>
    );
  }
}

export default Tooltip;
