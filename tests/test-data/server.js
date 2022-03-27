const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('tests/test-data/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
//server.get('/echo', (req, res) => {
//  res.jsonp(req.query)
//})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

function responseInterceptor(req, res, next) {
  var originalSend = res.send;

  res.send = function () {
    let body = arguments[0];

    if (req.method === 'DELETE') {
      let urlSegms = req.url.split('/');
      let idStr = urlSegms[urlSegms.length - 1];
      let id = parseInt(idStr);
      id = isNaN(id) ? idStr : id;

      let newBody = Object.assign({}, JSON.parse(body));
      newBody.id = id;
      arguments[0] = JSON.stringify(newBody);
    }
    originalSend.apply(res, arguments);
  };

  next();
}

// Use default router
server.use(responseInterceptor);

server.use((request, response, next) => {
  const author = Number(request.query.author);
  if (
    request.method === 'GET' &&
    request.path === '/books' &&
    !Number.isNaN(author)
  ) {
    const books = router.db
      .get('books')
      .filter((b) => b.authorId === author)
      .map((book) => {
        book.reviews = router.db
          .get('reviews')
          .filter((r) => r.bookId === book.id)
          .value();

        return book;
      })
      .value();

    response.json(books);
  } else {
    next();
  }
});
server.use(router);
