export interface ITextArea {
    variant?: string;
    size?: string;
    [propName: string]: any;
}
export declare const TextArea: import("styled-components").StyledComponent<"div", any, import("../Box/Box").IBox & ITextArea, never>;
export default TextArea;
