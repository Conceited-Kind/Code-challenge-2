// Fetch posts from your JSON Server API
fetch('/api/posts')
  .then(response => response.json())
  .then(posts => {
    console.log(posts)
    // Render your posts
  })