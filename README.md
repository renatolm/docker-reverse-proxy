# docker-reverse-proxy
Reverse proxy toy example using docker-compose.

In this example, we start 3 containers:
- proxy: a Nginx acting as a reverse proxy
- app: a minimal Node.js application
- db: a MySQL database

To run this example, just clone the repository and execute

```bash
docker-compose up -d
```

This will build and start the 3 containers, then access http://localhost:8080 on your browser.

The request will arrive at the Nginx and will be redirected to the Node.js application.

The Node.js app response is just a page with a header and a list of names retrieved from the database.
