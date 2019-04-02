/// <reference types="react" />
import SelectBase from "./components/SelectBase/SelectBase";
import RadioCheckboxBase from "./components/RadioCheckboxBase/RadioCheckboxBase";
import RadioCheckbox from "./components/RadioCheckbox/RadioCheckbox";
import TabBar from "./components/TabBar/TabBar";
import Tooltip from "./components/Tooltip/Tooltip";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import RadioCheckboxGroup from "./components/RadioCheckboxGroup/RadioCheckboxGroup";
declare const _default: {
    Box: import("styled-components").StyledComponent<"div", any, import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Box/Box").IBox, never>;
    Flex: import("styled-components").StyledComponent<"div", any, import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Box/Box").IBox & import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Flex/Flex").IFlex, never>;
    Input: import("styled-components").StyledComponent<"div", any, import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Box/Box").IBox & import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Input/Input").IInput, never>;
    TextArea: import("styled-components").StyledComponent<"div", any, import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Box/Box").IBox & import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/TextArea/TextArea").ITextArea, never>;
    ButtonBase: import("styled-components").StyledComponent<"div", any, import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/Box/Box").IBox & import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/ButtonBase/ButtonBase").IButtonBase, never>;
    SelectBase: typeof SelectBase;
    CheckboxBase: (props: {
        [propName: string]: any;
        id?: string | undefined;
        name?: string | undefined;
        disabled?: boolean | undefined;
        checked?: boolean | undefined;
        defaultChecked?: boolean | undefined;
    }) => JSX.Element;
    RadioCheckboxBase: typeof RadioCheckboxBase;
    RadioCheckbox: typeof RadioCheckbox;
    TabBar: typeof TabBar;
    TabBarItem: ({ children, label, activeTab, ...attrs }: import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/TabBar/TabBarItem").ITabBarItem) => JSX.Element;
    TabBarNav: ({ navLabel, onChangeActiveTab }: import("../../../../MICHA/\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430/code-artel-ui-lib/src/components/TabBar/TabBarNav").ITabBarNav) => JSX.Element;
    Tooltip: typeof Tooltip;
    CheckboxGroup: typeof CheckboxGroup;
    RadioCheckboxGroup: typeof RadioCheckboxGroup;
};
export default _default;
