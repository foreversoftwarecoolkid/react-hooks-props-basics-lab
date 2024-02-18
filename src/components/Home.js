// Home.js
import React from "react";

function Home({ user }) {
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
    </div>
  );
}

export default Home;
