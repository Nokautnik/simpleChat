import React from "react";

function MessageForm({
  message,
  username,
  handleSubmit,
  handleUsernameChange,
  handleContentChange
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          name="content"
          value={message}
          onChange={handleContentChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MessageForm;
