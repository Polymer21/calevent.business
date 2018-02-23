import gql from 'graphql-tag'

export const whoEventMutation = gql`
mutation(
    $id: ID!
    $whoId: [ID!]
){
    updateEvent(
        id: $id
        whoesIds: $whoId
      
    ){
      whoes{
        email id
      }
    }
}
`;

export const deleteEvent = gql`
mutation(
    $id: ID!
){
    deleteEvent(
        id: $id
    )
    {
        id
    }
}
`