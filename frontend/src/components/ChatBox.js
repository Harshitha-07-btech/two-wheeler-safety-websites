import React from 'react';
import Message from './Message';

const ChatBox = () => {
  return (
    <div className="chat-box">
      {/* messages will go here */}
      <Message text="Welcome! Ask me about two-wheeler safety." />
    </div>
  );
};

export default ChatBox;
