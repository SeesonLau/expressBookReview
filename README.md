# expressBookReview — IBM Full Stack Final Project

A RESTful book review API built with Node.js, Express, JWT, and Session authentication.

---

## 🚀 Setup

```bash
# 1. Fork & clone the repo, then:
cd expressBookReview
npm install

# 2. Start the server
node index.js
# → Server running on http://localhost:5000
```

---

## 📋 cURL Commands — Option 1 Submission

> Run the server first: `node index.js`
> Open a second terminal for cURL commands.

---

### Task 1 — Get all books (`getallbooks`)
```bash
curl -s http://localhost:5000/ | json_pp
```

---

### Task 2 — Get book by ISBN (`getbooksbyISBN`)
```bash
curl -s http://localhost:5000/isbn/1 | json_pp
```

---

### Task 3 — Get books by Author (`getbooksbyauthor`)
```bash
curl -s http://localhost:5000/author/Austen | json_pp
```

---

### Task 4 — Get books by Title (`getbooksbytitle`)
```bash
curl -s http://localhost:5000/title/Pride | json_pp
```

---

### Task 5 — Get book review (`getbookreview`)
```bash
curl -s http://localhost:5000/review/1 | json_pp
```

---

### Task 6 — Register new user (`register`)
```bash
curl -s -X POST http://localhost:5000/register \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}' | json_pp
```

---

### Task 7 — Login (`login`)
> Uses a cookie jar to persist the session for subsequent requests.
```bash
curl -s -X POST http://localhost:5000/customer/login \
  -H "Content-Type: application/json" \
  -d '{"username": "testuser", "password": "testpass123"}' \
  -c cookies.txt | json_pp
```

---

### Task 8 — Add/Modify a review (`reviewadded`)
> Must be logged in. Uses the session cookie from Task 7.
```bash
curl -s -X PUT "http://localhost:5000/customer/auth/review/1?review=GreatBook!" \
  -b cookies.txt | json_pp
```

---

### Task 9 — Delete a review (`deletereview`)
> Must be logged in. Uses the session cookie from Task 7.
```bash
curl -s -X DELETE http://localhost:5000/customer/auth/review/1 \
  -b cookies.txt | json_pp
```

---

### Task 10 — Run general.js (Async/Await + Promises with Axios)
```bash
node general.js
```

---

## 🗂 Project Structure

```
expressBookReview/
├── index.js              ← Express server entry point
├── general.js            ← Axios client (Task 10: async/await + Promises)
├── package.json
└── router/
    ├── booksdb.js        ← Books database (10 classic books)
    ├── auth_users.js     ← Authenticated routes (login, add/modify/delete review)
    └── general.js        ← Public routes (get books, register)
```

---

## 🔑 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | No | Get all books |
| GET | `/isbn/:isbn` | No | Get book by ISBN |
| GET | `/author/:author` | No | Get books by author |
| GET | `/title/:title` | No | Get books by title |
| GET | `/review/:isbn` | No | Get reviews for a book |
| POST | `/register` | No | Register new user |
| POST | `/customer/login` | No | Login (returns JWT + sets session) |
| PUT | `/customer/auth/review/:isbn?review=text` | Yes (Session+JWT) | Add/modify review |
| DELETE | `/customer/auth/review/:isbn` | Yes (Session+JWT) | Delete own review |

---

## 🧪 Task 10 — Axios Methods (general.js)

| Task | Method | Implementation |
|------|--------|---------------|
| Get all books | `getAllBooks()` | async/await |
| Search by ISBN | `getBookByISBN(isbn)` | Promise `.then()/.catch()` |
| Search by author | `getBooksByAuthor(author)` | async/await |
| Search by title | `getBooksByTitle(title)` | async/await |
