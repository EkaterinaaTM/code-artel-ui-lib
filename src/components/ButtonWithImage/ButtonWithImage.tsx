import * as React from "react";

import Button from "../Button/Button";
import Image from "../Image/Image";
import Flex from "../Flex/Flex";

export interface IButtonwithImage {
  src?: string;
  alt?: string;
  children?: any;
  left?: boolean;
  right?: boolean;
  size: string;
  variant: string;
}

export class ButtonWithImage extends React.Component<IButtonwithImage> {
  render() {
    const { src, alt, left, children, right, size, variant } = this.props;
    return (
      <Button variant={variant} size={size}>
        <Flex alignItems={"center"}>
          <Flex className={"button_icon"}>
            {left && (
              <Image className={"button_icon--left"} src={src} alt={alt} />
            )}
          </Flex>

          {children}

          <Flex className={"button_icon"}>
            {right && (
              <Image className={"button_icon--right"} src={src} alt={alt} />
            )}
          </Flex>
        </Flex>
      </Button>
    );
  }
}

export default ButtonWithImage;
