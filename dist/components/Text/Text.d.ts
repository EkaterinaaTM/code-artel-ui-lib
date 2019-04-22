interface IText {
    variant: string;
    [propName: string]: any;
}
export declare const Text: import("styled-components").StyledComponent<"div", any, import("../Box/Box").IBox & IText, never>;
export default Text;
