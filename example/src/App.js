import React, { Component } from "react";

import Button from "code-artel-ui-lib";
import Input from "code-artel-ui-lib";

export default class App extends Component {
  render() {
    return (
      <div>
        <Input placeholder={"MICHA"} />
        <Button name={"MICHA"} />
      </div>
    );
  }
}
