const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assigment 1 Home Page</title><head>");
    res.write("<body><h1>Hello User Welcome to the site!</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assigment 1 Users Page</title><head>");
    res.write(
      "<body><ul><li>User 1<li><li>User 2<li><li>User 3<li><li>User 4<li><li>User 5<li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      //   console.log(chunk);
    });
    return req.on("end", () => {
      const message = Buffer.concat(body).toString().split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
};
module.exports = requestHandler;
