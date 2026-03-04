const express = require("express");
const session = require("express-session");
const { regd_users } = require("./router/auth_users.js");
const { general } = require("./router/general.js");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: "session_secret_key_2024",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 3600000 }, // 1 hour
  })
);

// Routes
app.use("/customer", regd_users);   // POST /customer/login, PUT/DELETE /customer/auth/review/:isbn
app.use("/", general);              // GET /, /isbn/:isbn, /author/:author, /title/:title, /review/:isbn
                                    // POST /register

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;