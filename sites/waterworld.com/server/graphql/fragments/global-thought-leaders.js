const gql = require('graphql-tag');

module.exports = gql`

fragment GlobalThoughtLeadersContentFragment on Content {
  id
  type
  name
  siteContext {
    path
  }
  ... on ContentCompany {
    primaryImage {
      id
      src
      alt
      isLogo
    }
  }
  ... on ContentVideo {
    embedCode
    company {
      id
      name
      siteContext {
        path
      }
      primaryImage {
        id
        src
        alt
        isLogo
      }
    }
  }
  ... on ContentWhitepaper {
    body
    company {
      id
      name
    }
  }
}
`;
