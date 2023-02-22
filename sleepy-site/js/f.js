  .use(require("express").static(__dirname + "/public"))
  .use((_, res) => {
    res.status(404).sendFile(__dirname + "/public/c/index.html");
  })
  .listen(8080);