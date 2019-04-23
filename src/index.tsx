import Box from "./components/Box/Box";
import Flex from "./components/Flex/Flex";
import Input from "./components/Input/Input";
import TextArea from "./components/TextArea/TextArea";
import SelectBase from "./components/SelectBase/SelectBase";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import RadioButton from "./components/RadioButton/RadioButton";
import RadioButtonGroup from "./components/RadioButtonGroup/RadioButtonGroup";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Tabs from "./components/TabBar/Tabs";
import TabContent from "./components/TabBar/TabContent";
import TabController from "./components/TabBar/TabController";
import TooltipBase from "./components/TooltipBase/TooltipBase";
import Text from "./components/Text/Text";
import SmallPreloader from "./components/SmallPreloader/SmallPreloader";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Image from "./components/Image/Image";
import Link from "./components/Link/Link";
import Badge from "./components/Badge/Badge";
import AccordionToggle from "./components/Accordion/AccordionToggle";
// import PaginationPage from "./components/Pagination/Pagination";
// import PaginationHOC from "./components/Pagination/PaginationHOC";

/** Style */
import StyledThemeProvider, {
  Colors,
  Space,
  BoxShadow,
  Border,
  ThemeCreate,
} from "./styles/StyleThemeProvider";
import GlobalStyle from "./styles/GlobalStyle";

import {ButtonSize} from "./styles/variants/buttons/ButtonSize";
import {ButtonVariant} from "./styles/variants/buttons/ButtonVariant";

import {InputVariant} from "./styles/variants/inputs/InputVariant";
import {InputSize} from "./styles/variants/inputs/InputSize";
import {
  IVariantSize,
  IVariantItem,
  IVariantList,
  IVariant,
  IColors,
  ITheme,
} from "./styles/interfaces";

export {
  AccordionToggle,
  Flex,
  Box,
  Input,
  TextArea,
  Button,
  SelectBase,
  Checkbox,
  CheckboxGroup,
  RadioButton,
  Tabs,
  TabController,
  TabContent,
  TooltipBase,
  Badge,
  ButtonGroup,
  RadioButtonGroup,
  Text,
  SmallPreloader,
  Card,
  Container,
  Image,
  Link,
  // PaginationPage,
  // PaginationHOC,

  /** STYLE */

  StyledThemeProvider,
  Colors,
  Space,
  BoxShadow,
  Border,
  ThemeCreate,
  GlobalStyle,
  ButtonSize,
  ButtonVariant,
  InputVariant,
  InputSize,
  IVariantSize,
  IVariantItem,
  IVariantList,
  IVariant,
  IColors,
  ITheme,
};
