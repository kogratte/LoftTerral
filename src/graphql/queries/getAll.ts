/* eslint-disable import/no-extraneous-dependencies */
import gql from 'graphql-tag';

const GET_ALL = gql`
  query continents {
    continents(filter: { code: { ne: "" } }) {
      code
      name
      countries {
        code
        capital
        name
        languages {
          code
          name
          rtl
        },
        currency
      }
    }
  }`;

export default GET_ALL;
