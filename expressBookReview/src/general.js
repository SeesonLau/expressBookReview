/**
 * general.js
 * Node.js client demonstrating Async/Await and Promises with Axios
 * for the Book Review REST API (Task 10)
 *
 * Covers:
 *  1. Get all books          — async/await
 *  2. Search by ISBN         — Promise
 *  3. Search by Author       — async/await
 *  4. Search by Title        — async/await
 */

const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// ─────────────────────────────────────────────
// Task 1: Get ALL books — Using async/await
// ─────────────────────────────────────────────
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("\n📚 Task 1 — All Books (async/await):");
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
};

// ─────────────────────────────────────────────
// Task 2: Search by ISBN — Using Promise
// ─────────────────────────────────────────────
const getBookByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/isbn/${isbn}`)
      .then((response) => {
        console.log(`\n🔍 Task 2 — Book by ISBN ${isbn} (Promise):`);
        console.log(JSON.stringify(response.data, null, 2));
        resolve(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching book by ISBN ${isbn}:`, error.message);
        reject(error);
      });
  });
};

// ─────────────────────────────────────────────
// Task 3: Search by Author — Using async/await
// ─────────────────────────────────────────────
const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    console.log(`\n✍️  Task 3 — Books by Author "${author}" (async/await):`);
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by author "${author}":`, error.message);
  }
};

// ─────────────────────────────────────────────
// Task 4: Search by Title — Using async/await
// ─────────────────────────────────────────────
const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    console.log(`\n📖 Task 4 — Books by Title "${title}" (async/await):`);
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by title "${title}":`, error.message);
  }
};

// ─────────────────────────────────────────────
// Run all methods sequentially
// ─────────────────────────────────────────────
const runAll = async () => {
  await getAllBooks();
  await getBookByISBN(1);
  await getBooksByAuthor("Austen");
  await getBooksByTitle("Pride");
};

runAll();

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };