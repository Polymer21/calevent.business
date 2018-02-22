import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const whoEventMutation = gql`
mutation(
    $id: ID
){
    createEvent(
        id: $id
    )
}
`;