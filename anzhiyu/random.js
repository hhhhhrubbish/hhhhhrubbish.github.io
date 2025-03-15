var posts=["2025/03/01/25-3-1c/","2025/03/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };