const gql = require('graphql-tag');

module.exports = gql`

fragment Top100LandingPageFragment on ContentTop100 {
  id
  shortName
  rank
  revenueCurrent
  city
  state
}

`;
