const express = require('express')
// Correctly importing express

const app = express(); // Initialize the Express app
const port = 3000; // Define the port

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, world!'); // Respond with a message
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
