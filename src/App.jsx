import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPosts, setShowPosts] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  return (
    <div className="App">

      <header>
        <h1>Posts and Users</h1>
      </header>

      <main>
        <div className="container">
        
          <div className="button-container">
            <button onClick={() => setShowPosts((prev) => !prev)}>
              {showPosts ? "Hide Posts" : "Add Posts"}
            </button>
            <button onClick={() => setShowUsers((prev) => !prev)}>
              {showUsers ? "Hide Users" : "Add Users"}
            </button>
          </div>

          {showPosts && (
            <section className="posts-section">
              <h2>Posts</h2>
              <div className="card-layout">
                <div className="card">
                  <h3>Post Title 1</h3>
                  <p>This is a brief description of post 1.</p>
                </div>
                <div className="card">
                  <h3>Post Title 2</h3>
                  <p>This is a brief description of post 2.</p>
                </div>
                <div className="card">
                  <h3>Post Title 3</h3>
                  <p>This is a brief description of post 3.</p>
                </div>
              </div>
            </section>
          )}


          {showUsers && (
            <section className="users-section">
              <h2>Users</h2>
              <div className="card-layout">
                <div className="user-card">
                  <h3>User Name 1</h3>
                  <p>Email: user1@example.com</p>
                </div>
                <div className="user-card">
                  <h3>User Name 2</h3>
                  <p>Email: user2@example.com</p>
                </div>
                <div className="user-card">
                  <h3>User Name 3</h3>
                  <p>Email: user3@example.com</p>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <footer>
        <p>© 2024 Posts and Users</p>
      </footer>
    </div>
  );
}

export default App;
