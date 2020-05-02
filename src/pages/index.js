import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Flex, Link, Heading, Text, List, ListItem } from "@chakra-ui/core"
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa"
import { FiPenTool } from "react-icons/fi"

const IndexPage = () => (
  <Layout>
    <SEO title="Ryo Kato" />
    <Flex justify="center" align="center" m="40px">
      <Flex flexDirection="column">
        <Heading as="h1" size="xl">
          Ryo Kato
        </Heading>
        <List spacing={3} p="0">
          <ListItem>Software Engineer</ListItem>
          <ListItem>Video Game Player</ListItem>
          <ListItem>Novel Reader</ListItem>
          <ListItem>Cooking Lover</ListItem>
          <ListItem>Cat Lover</ListItem>
        </List>
        <Flex flexDirection="row">
          <Link
            href="https://www.linkedin.com/in/ryo-kato-626068103/"
            mr="0.5rem"
            isExternal
          >
            <FaLinkedin size="3rem" />
          </Link>
          <Link href="https://github.com/katryo" mx="0.5rem" isExternal>
            <FaGithub size="3rem" />
          </Link>
          <Link href="https://twitter.com/katryo" mx="0.5rem" isExternal>
            <FaTwitter size="3rem" />
          </Link>
          <Link
            href="https://www.facebook.com/ryo.kato.75"
            mx="0.5rem"
            isExternal
          >
            <FaFacebook size="3rem" />
          </Link>
          <Link href="https://katryo.hatenablog.com/" ml="0.5rem" isExternal>
            <FiPenTool size="3rem" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
)

export default IndexPage
