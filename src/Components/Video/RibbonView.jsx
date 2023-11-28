import { Flex } from "antd";

// how do I monitor screen changes and redraw
// what kind of math needs to happen for this?

const RibbonView = () => {
  return (
    <Flex vertical>
      <Flex>
        <h1>Ribbon View Here</h1>
      </Flex>
      <Flex>
        <h1>Active Speaker Here</h1>
      </Flex>
    </Flex>
  );
};

export default RibbonView;

// this will need to have the main speaker video presenter view
