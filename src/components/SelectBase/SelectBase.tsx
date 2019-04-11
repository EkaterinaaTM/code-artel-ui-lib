import * as React from "react";
// import  PropTypes  from "prop-types";
import Select from "react-select";
// import DeepEqual from 'fast-deep-equal';

export interface ISelectBase {
  placeholder?: any;
  options?: any;
  isLoading?: any;
  disabled?: any;
  input?: any;
  value?: any;
  name?: any;
}

export interface ISelectBaseState {
  selectedOption?: any;
}

export class SelectBase extends React.Component<ISelectBase, ISelectBaseState> {
  state = {
    selectedOption: null
  };

  // static propTypes = {
  //   /** input */
  //   input: PropTypes.object.isRequired,
  //   options: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  //   loading: PropTypes.bool,
  //   placeholder: PropTypes.string
  // };

  static defaultProps = {
    options: [],
    placeholder: ""
  };

  // handleChange = selectedOption => {
  //   const { value } = this.props;
  //   this.setState(
  //     () => ({ selectedOption }),
  //     () => {
  //       return this.state.selectedOption
  //         ? this.state.selectedOption[value]
  //         : null;
  //     }
  //   );
  //   console.log(`Option selected:`, selectedOption["value"]);
  // };

  render() {
    const { selectedOption } = this.state;

    const {
      placeholder,
      options,
      isLoading,
      disabled,
      input,
      name
    } = this.props;

    return (
      <Select
        value={selectedOption}
        name={name || input.name}
        options={options}
        placeholder={placeholder}
        blurInputOnSelect={true}
        isLoading={isLoading}
        disabled={disabled}
        // onChange={this.handleChange}
      />
    );
  }
}

export default SelectBase;
