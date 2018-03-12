---
  layout: post
  title: "Building a Website Using Express.js Part I &mdash; The Basic"
  image: "/img/njs.jpg"
  author: "Yusril Herlian Syah"
  tech: "Javascript"
  description: "Express.js is one of the popular web frameworks written in javascript programming language. One of the factors that makes express.js popular is its simple concept, and also has a lot of opensource middleware that will help your web development speed."
  comments: true
---

Express.js is one of the popular web frameworks written in javascript programming language. One of the factors that makes express.js popular is its simple concept, and also has a lot of opensource middleware that will help your web development speed. Express.js has the slogan "Fast, unopinionated, minimalist web framework for Node.js". Express.js is currently used as the basis for loopback projects, loopback is one of the open source enterprise versions of Node.js acquired by IBM in 2015.

## Basic Setup
`package.json`
```json
{
  "name": "express-basic",
  "version": "1.0.0",
  "description": "Express.js basic",
  "main": "index.js",
  "dependencies": {
    "express": "^4.16.2"
  }
}
```

The express.js we have used in this tutorial is express.js version 4.16.2. After you create the `package.json` file now you open your terminal then type: 
```bash
npm install
```

Now we have express.js ready for use. Now we will run our web server powered by express.js. Write the code below into the `index.js` file, then run with `node index.js`
```js
const express = require('express')

let app = express()

app.listen(3000, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Express running on port: 3000")
  }
})
```

Open your browser, then type localhost: 3000. Then you will see an output like this in your browser.
```
Cannot GET /
```

`GET` is an HTTP method and `/` is a resource location on your web. This happens because we not have a resource at that location. This is more commonly called `404 Not Found error` on web server where we not have resource at that location. We must create a resource first if you want to use that resource location. Now add the code below before `app.listen` and run it again.

```js
app.get('/', function(req, res) {
   res.send('Hello world')
})
```

As you can see now we can use the resource for HTTP method `GET` with location `/`. In the code there are 2 parameters on the function that is `req` and `res`. Where `req` is a request and `res` is a response. For more simple request is what is requested from the client application and response is what is sent by the server to the client application. Client application here can be browser, curl, wget and so on. Let's try further how to use `express.js`. Now add the code below to the `index.js` file, and run it again. Then open your browser, and type `localhost:3000/hello?name=John`

```js
app.get('/hello', function(req, res) {
   res.send('Hello ' + req.query.name)
})
```

Now we use HTTP resource `GET` method with location `/hello`. You do not worry about `?` After `/hello`, it's called a query string in HTTP. You can change it to suit your needs without modifying the resource location. Suppose you need a query string `search` in your resource then you just change it to `req.query.search` and in url you just access `localhost:3000/hello?search=Do what ever do you want`.

## Conclusion

By learning the basics of express.js you can also learn how HTTP works, because as you know a website is running on HTTP, so you have to master it.

If you have any questions, feel free to contact us at <a href="mailto:support@unquez.com">support@unquez.com</a>.
