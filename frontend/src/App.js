import React from 'react';
import ChatBox from './components/ChatBox';
import SafetyButtons from './components/SafetyButtons';

function App() {
  return (
    <div className="App">
      <h1>Two-Wheeler Safety AI</h1>
      <SafetyButtons />
      <ChatBox />
    </div>
  );
}

export default App;
