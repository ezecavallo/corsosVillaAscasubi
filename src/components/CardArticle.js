import Link from "next/link";
import { GridItem, Box, Tag, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CardArticle = ({ slug, frontmatter, content }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
  >
    <GridItem as={Link} href={`/post/${slug}`}>
      <a rel="noreferrer">
        <Box
          as="article"
          boxShadow="xl"
          borderTopRadius="lg"
          borderBottomRadius="lg"
          className="summary_card"
          style={{ cursor: "pointer" }}
        >
          <Box
            bg="#273037"
            width="18.75em"
            height="12.5em"
            p="1.5em"
            m="auto"
            lineHeight={2}
            position="relative"
            borderTopRadius="lg"
            className="summary_card__container"
            overflow="hidden"
          >
            <Box maxH="100%" overflow="hidden">
              {/* <ReactMarkdown {..._mapProps({})} children={content} /> */}
            </Box>
          </Box>
          <Box bg="#F6F6F6" px={4} py={3} color="black" borderBottomRadius="lg">
            <Box
              mt="1"
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              className="summary_card__detail"
            >
              {frontmatter.title}
            </Box>
            <Box className="summary_card__tags">
              <Text className="summary_card__tag">
                {frontmatter.tags.join(" - ")}
              </Text>
            </Box>
            <Tag borderRadius="full" bg="#E7E7E7" color="#565656" px="4">
              {frontmatter.matter}
            </Tag>
          </Box>
        </Box>
      </a>
    </GridItem>
  </motion.div>
);

export default CardArticle;
