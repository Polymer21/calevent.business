import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const whoEventMutation = gql`
mutation(
    $emailId: String!
){
    createEvent(
        who: $emailId
        // who is expecting an object and we shouldnt be trying to create an event if
        one already exists. ID is auto generated
    ){
        id 
    }
}
`;