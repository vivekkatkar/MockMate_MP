import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState(null);  
  const [answer, setAnswer] = useState('');       
  const [isInterviewComplete, setInterviewComplete] = useState(false);
  const [ssocket, setSsocket] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/gemini/questions')
      .then(response => response.text())
      .then(data => {
        const socket = new WebSocket('ws://localhost:8000');
        setSsocket(socket);

        socket.onopen = () => {
          console.log('WebSocket connection established.');
        };

        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.question) {
            setQuestion(data.question);  
          } else if (data.message) {
            console.log(data.message); 
            setInterviewComplete(true);
          }
        };

        socket.onclose = () => {
          console.log('WebSocket connection closed.');
        };

        return () => {
          socket.close();
        };
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ssocket && ssocket.readyState === WebSocket.OPEN) {  
      ssocket.send(JSON.stringify({ answer }));  
      setAnswer('');  
    } else {
      console.error('WebSocket is not open.');
    }
  };

  return (
    <div className="App">
    <h1>Mock Interview</h1>
  
    {!isInterviewComplete ? (
      <>
        {question ? (
          <div>
            <p className="question"><strong>Question:</strong> {question}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer"
                required
              />
              <button type="submit">Submit Answer</button>
            </form>
          </div>
        ) : (
          <p className="waiting-message">Waiting for the first question...</p>
        )}
      </>
    ) : (
      <p className="completed-message">The interview is complete. Thank you for participating!</p>
    )}
  </div>
  
  );
}

export default App;
