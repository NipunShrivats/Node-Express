## Route Params

1. Route Params in Express are dynamic parts of the URL that can be accessed using req.params
2. They are defined in the route with a colon(:), eg:- /user/:id/view/:artice, where "id" is a route parameter.
3. to access - req.params.id, req.params.article
4. Used to captue values from the URL and pass them to the route handler for processing, like user IDs product names, etc
5. Express automatically parses and makes the values available in req.params as an object where the parameter name is the key.

## Query Params

1. Query params are key-value pairs appended to a URL after a "?" seperated by "&", like
   "/search?query=express&limit=10"
2. In Express.js, they can be accessed by usng "req.query", which returns an object containing the parameters.
3. For Ex, in /search?page=4, req.query.page will give "page".
4. Query parameters are often used to pass optional or filter data to the server withot modifying the route
5. They are always part of the URL and visible in the browser address bar.

## Form Submission

1. You can use the <form> tag with action attribute to specify the URL to which the form data is submitted.
2. By default, a form will use the GET request, and you can handle it with app.get to access form data via req.query, as data is sent through the URL as query strings.
3. Since URL's have length limit, you can use the POSt method for form submisions, which sends the data in the request body, allowing for larger amount of data.
4. To access data from a POST request, you must first use the express.urlencoded() middleware to parse the request.body
5. The urlencoded option {extended:true} uses the "qs" library to parse the query string, allowing for more complex structure like nested objects, which the default parses cannot handle.

## Handling 404 page

1. Use a middleware function with no specific route, like app.use((req, res)=>{...}), to handle unmatched routes.
2. Inside the middleware, send a 404 status uisng res.status(404) and a custom message or HTML response.
3. Place this middleware after all defined routes to catch only unhandled requests

` app.use((req, res)=>{res.status(404).send("Page not found");})` 
