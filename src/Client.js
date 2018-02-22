import { ApolloClient } from 'apollo-client'
import  { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag'
import serverUri from './config.json' 

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjdf9384v7ehb0111ljg52jin'}),
    cache: new InMemoryCache()
})



export default client 