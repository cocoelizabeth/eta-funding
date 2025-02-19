import { Stack, Card, Flex, Text } from '@sanity/ui'

function CustomNavbar(props) {
    return (
      <Stack>
        <Card padding={3} tone="caution">
          <Flex justify="center">
            <Text>Welcome to ETA Funding Sanity!</Text>
          </Flex>
        </Card>
        <>{props.renderDefault(props)}</>
      </Stack>
    )
  }

  export default CustomNavbar;