import { Box } from '@chakra-ui/react'

export const NewsCard = ({title, body}) => {
  return (
    <Box mb={15} maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
      <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          px={4} h={8}
        >
          {title}
        </Box>
        <Box p={4}>
          {body}
        </Box>
    </Box>
  )
}
