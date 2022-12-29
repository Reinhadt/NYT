import { useLocation } from "react-router-dom";
import { Container, Heading, Tag, Wrap } from "@chakra-ui/react";

const Article = () => {
  const location = useLocation();
  const { headline, snippet, section_name, lead_paragraph } = location.state;
  return (
    <Container>
      <Heading mt={12} mb={5}>{headline.main}</Heading>
      <Tag>{section_name}</Tag>
      <Wrap mt={8} mb={8}>
        <small>{snippet}</small>
      </Wrap>
      <p>{lead_paragraph}</p>
    </Container>
  );
};

export default Article;
