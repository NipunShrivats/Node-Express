## Route Params

1. Route Params in Express are dynamic parts of the URL that can be accessed using req.params
2. They are defined in the route with a colon(:), eg:- /user/:id/view/:artice, where "id" is a route parameter.
3. to access - req.params.id, req.params.article
4. Used to captue values from the URL and pass them to the route handler for processing, like user IDs product names, etc
5. Express automatically parses and makes the values available in req.params as an object where the parameter name is the key.

## Query Params
1. Query params are key