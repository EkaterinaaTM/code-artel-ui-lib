import { FlexBasisProps, FlexDirectionProps, FlexProps, FlexWrapProps } from 'styled-system';
/**View */
import { IBox } from '../Box/Box';
export interface IFlex extends IBox, FlexBasisProps, FlexDirectionProps, FlexProps, FlexWrapProps {
    [propName: string]: any;
}
export declare const Flex: import("styled-components").StyledComponent<"div", any, IBox & IFlex, never>;
export default Flex;
