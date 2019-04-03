import * as React from "react";
import index$4 from "code-artel-ui-lib";

export class App extends React.Component {
  state = {
    value: [],
    valueRadio: ""
  };

  onChange = value => {
    console.log(123, value);
    this.setState({
      value
    });
  };

  onChangeRadio = valueRadio => {
    console.log(1234, valueRadio);
    this.setState({
      valueRadio
    });
  };

  render() {
    const {
      Box,
      ButtonBase,
      Flex,
      Input,
      CheckboxBase,
      Checkbox,
      CheckboxGroup,
      RadioButtonBase,
      RadioButton,
      RadioButtonGroup,
      Tabs,
      TabController,
      TabContent,
      TooltipBase
    } = index$4;
    return (
      <div>
        <Box p={2}>
          <Box
            p={1}
            border={"1px solid black"}
            borderRadius={"5px"}
            width={"70px"}
          >
            Box
          </Box>
        </Box>

        <Box p={2}>
          <ButtonBase
            variant={"default"}
            size={"medium"}
            p={2}
            border={"1px solid black"}
            borderRadius={"5px"}
          >
            ButtonBase
          </ButtonBase>
        </Box>

        <Box p={2}>
          <Flex
            p={5}
            border={"1px solid black"}
            borderRadius={"50px"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"10%"}
          >
            Flex
          </Flex>
        </Box>

        <Box p={2}>
          <Input placeholder={"MICHA"} variant={"default"} />
        </Box>

        <Box p={2}>
          <h4>CheckboxBase</h4>
          <CheckboxBase />
        </Box>

        <Box p={2}>
          <h4>Checkbox</h4>
          <Checkbox label={"check label N1"} />
        </Box>

        <Box p={2}>
          <h4>CheckboxGroup</h4>
          <CheckboxGroup
            labelProp="foo-label"
            valueProp="foo-name"
            value={this.state.value}
            name={"checkbox"}
            onChange={this.onChange}
            options={[
              {
                "foo-label": "Check N1",
                "foo-name": "fooName"
              },
              {
                "foo-label": "Check N2",
                "foo-name": "Foovalue"
              }
            ]}
          />
        </Box>

        <Box p={2}>
          <h4>RadioButtonBase</h4>

          <RadioButtonBase id={"hi"} name={"hi"} />
          <RadioButtonBase id={"hi"} name={"hi"} />
        </Box>

        <Box p={2}>
          <h4>RadioButton</h4>

          <RadioButton id={"his"} name={"his"} label={"radio label"} />
        </Box>

        <Box p={2}>
          <h4>RadioButtonGroup</h4>

          <RadioButtonGroup
            labelProp="button-label"
            valueProp="button-name"
            value={this.state.valueRadio}
            id={"hid"}
            name={"hid"}
            onChange={this.onChangeRadio}
            options={[
              {
                "button-label": "buttonLabel",
                "button-name": "buttonName"
              },
              {
                "button-label": "buttonlabel",
                "button-name": "buttonvalue"
              }
            ]}
          />
        </Box>

        <Box p={2}>
          <TabController>
            <Tabs label="Simple text">
              <Box border={"1px solid black"} borderRadius={"2px"} p={3}>
                Lorem
              </Box>
              <Box border={"1px solid black"} borderRadius={"2px"} p={3}>
                Ipsum
              </Box>
            </Tabs>
            <TabContent label="Image">
              <img
                src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
                width={50}
                height={50}
                alt={"foo"}
              />
              <Box border={"1px solid black"} borderRadius={"2px"} p={3}>
                Text
              </Box>
            </TabContent>
          </TabController>
        </Box>

        <Flex py={2}>
          <Box pr={7}>
            <TooltipBase
              position="bottom"
              isActive={true}
              warning={"Надпись тултипа"}
            >
              Test
            </TooltipBase>
          </Box>

          <TooltipBase
            position="top"
            isActive={true}
            warning={"Надпись тултипа"}
          >
            Test
          </TooltipBase>
        </Flex>
      </div>
    );
  }
}

export default App;
