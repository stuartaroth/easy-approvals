import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import  { buildSchema } from 'graphql';

import { readFileSync } from 'fs';

const typeDefs = readFileSync(__dirname + '/schema.graphql', { encoding: 'utf-8' });

const schema = buildSchema(typeDefs);

// The root provides a resolver function for each API endpoint
const root = {
    getMyApprovals: () => {
        return [];
    },
    getMyUserApprovals: () => {
        return [];
    },
    approveUserApproval: (params: any) => {
        return null;
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');