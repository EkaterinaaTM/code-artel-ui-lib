import * as React from "react";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import Box from "../Box/Box";
import ButtonBase from "../ButtonBase/ButtonBase";
import SmallPreloader from "../SmallPreloader/SmallPreloader";

export interface IPaginationPage {
  pagination?: any;
  data?: any;
  loading?: any;
  Consumer?: any;
  src?: any;
  alt?: any;
}

export class PaginationPage extends React.Component<IPaginationPage> {
  static defaultProps = {
    data: []
  };

  render() {
    const { pagination, data, loading, Consumer, src, alt } = this.props;
    return (
      <Box>
        {loading && <SmallPreloader />}

        {!loading && <Consumer data={data} />}
        <Flex justifyContent={"center"} mt={[4]}>
          <ButtonBase
            fontSize={4}
            onClick={pagination.prevPage}
            disabled={pagination.disabledToPrevPage}
            size={"xsmall"}
            variant={"large"}
            style={{ transform: "rotate(180deg)" }}
          >
            <img src={src} alt={alt} />
          </ButtonBase>

          <Text
            fontSize={6}
            lineHeight={8}
            color={"color7"}
            textAlign={"center"}
            px={[4]}
            fontFamily={"primary500"}
          >
            {pagination.pageNumber}
          </Text>

          <ButtonBase
            fontSize={4}
            onClick={pagination.nextPage}
            disabled={pagination.disabledToNextPage}
            size={"xsmall"}
            variant={"large"}
          >
            <img src={src} alt={alt} />
          </ButtonBase>
        </Flex>
      </Box>
    );
  }
}

export default PaginationPage;
