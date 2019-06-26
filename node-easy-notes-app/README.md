using this guide: https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

- express is a web framework, most popular for node.js.
- mongoose is an ODM (object document mapping tool) for node.js and MongoDB. converts the objects in code into documents in the database.
- middleware is a function that has access to the `request` and `response` objects. It can execute any code, transform the request object, or return a response.

Created server.js
Imported express and body-parser modules. Express is a web framework and body-parser is a module that parses the request (of various content types) and creates a `req.body` object that we can access in our routes.

Created express app and added two `body-parser` middlwares.

```javascript
npm init
npm install express body-parser mongoose --save
```