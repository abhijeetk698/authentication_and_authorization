# CNS PROJECT : IMPLEMENTING AUTHENTICATION SYSTEM 

Authentication is the process of recognizing a user’s identity. It is the mechanism of associating an incoming request with a set of identifying credentials. The credentials provided are compared to those on a file in a database of the authorized user’s information on a local operating system or within an authentication server.
We are going to implement an Authentication API in Node using JWT, Express, and MongoDB.

# Technologies Used
we will be needing these following npm packages.
* Express. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.* *
* Express-Validator. To validate the body data on the server in the Express framework, we will be using this library. It’s a server-side data validation library. So, even if a malicious user bypasses the client-side verification, the server-side data validation will catch it and throw an error.
* Body-parser. It is Node.js middleware for parsing the body data.
* Bcryptjs. This library will be used to hash the password and then store it in the database. This way, even app administrators can’t access the account of a user.
* JsonWebToken. JsonWebToken will be used to encrypt our data payload on registration and return a token. We can use that token to authenticate ourselves to secured pages like the dashboard. There would also an option to set the validity of those tokens, so you can specify how much time that token will last.
* Mongoose. Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
