import { request, gql } from 'graphql-request';

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getToken = async () => {
  const query = gql`
    query TokenQuery {
        tokensConnection {
          edges {
            node {
              id
              buyTax
              buyTokenomics
              contract
              decimals
              description
              extraLinks
              slug
              name
              sellTax
              sellTokenomics
              telegram
              ticker
              totalSupply
              twitter
              tokenImage {
                url
              }
              tokenLogo {
                url
              }
              catchPhrase
              isHot
              isMain
              isTrending
              isLaunched
            }
          }
        }
      }
         
    `;

  const results = await request(graphqlApi, query);
  return results.tokensConnection.edges;
}


export const getTokenInfo = async (slug) => {
  const query = gql`
    query GetTokenInfo($slug: String!) {
        token(where: {slug: $slug}) {
          id
          buyTax
          buyTokenomics
          contract
          decimals
          description
          extraLinks
          slug
          name
          sellTax
          sellTokenomics
          telegram
          ticker
          totalSupply
          twitter
          tokenImage {
            url
          }
          tokenLogo {
            url
          }
          catchPhrase
          isHot
          isMain
          isTrending
          isLaunched
        }
      }
         
    `;

  const results = await request(graphqlApi, query, { slug });

  return results.token;
}