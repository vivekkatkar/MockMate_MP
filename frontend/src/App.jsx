import React, { useState, useEffect } from 'react';
import './App.css';
import botImage from './assets/bot.png'; // Assuming you place the bot image in the assets folder

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
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Mock Interview</h1>

      {!isInterviewComplete ? (
        <>
          {question ? (
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md relative">
              <img src={botImage} alt="Bot" className="bot-icon" /> {/* Bot Icon */}
              <p className="text-lg mb-4 text-dark-gray"><strong>Bot:</strong> {question}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer"
                  className="w-full p-2 input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                  Submit Answer
                </button>
              </form>
            </div>
          ) : (
            <p className="text-gray-600 text-lg">Waiting for the first question...</p>
          )}
        </>
      ) : (
        <p className="text-green-500 text-xl font-semibold">The interview is complete. Thank you for participating!</p>
      )}
    </div>
  );
}

export default App;
