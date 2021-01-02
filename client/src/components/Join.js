import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      {/* Input for username */}
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      {/* Input for room */}
      <input
        type="text"
        placeholder="room"
        onChange={(e) => setRoom(e.target.value)}
      />
      <Link
        onClick={(e) => (!room || !name ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button className="button" type="submit">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Join;
