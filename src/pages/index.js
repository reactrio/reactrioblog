/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Link from 'gatsby-link';
import { Box, Flex } from '../components/Layout';
import colors from '../utils/colors';
import ButtonPrimary, { ButtonSecondary } from '../components/Buttons';

export default ({ data }) => {
  // Data recuperado via graphql
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <div>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          align="center"
        >
          <h1>{myData.title}</h1>
          <h3>{myData.subtitle}</h3>
          <Flex justify="center" wrap={['wrap', 'wrap', 'nowrap']}>
            <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
              <Link to="/about">
                <ButtonPrimary>Sobre</ButtonPrimary>
              </Link>
            </Box>
            <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
              <Link to="/about">
                <ButtonSecondary>Sobre</ButtonSecondary>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bg={colors.primary} py={[3, 3, 4]}>
        <Box
          width={[1, 1, 1 / 2]}
          m="0 auto"
          px={[3, 3, 0]}
          color={colors.secondary}
        >
          <h1>Esta pode ser outra parte</h1>
          <p>com algum texto diferente</p>
        </Box>
      </Box>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
