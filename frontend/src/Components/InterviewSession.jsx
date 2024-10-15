import React, { useState, useEffect, useRef } from 'react';
import botImage from '../assets/bot.jpeg';

const InterviewSession = () => {
  const [question, setQuestion] = useState(null);  
  const [answer, setAnswer] = useState('');       
  const [isInterviewComplete, setInterviewComplete] = useState(false);
  const [ssocket, setSsocket] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/gemini/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({ email: localStorage.getItem("email")}) 
    })
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

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPart = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setTranscript((prev) => prev + transcriptPart);
            setAnswer((prev) => prev + transcriptPart); // Also set the answer with the transcript
          } else {
            interimTranscript += transcriptPart;
          }
        }
      };

      recognition.onstart = () => {
        console.log('Speech recognition started');
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };

      recognition.onend = () => {
        console.log('Speech recognition ended');
        setIsListening(false);
      };

      if (isListening) {
        recognition.start();
      } else {
        recognition.stop();
      }

      return () => {
        recognition.stop();
      };
    } else {
      console.error('Speech recognition not supported in this browser');
    }
  }, [isListening]);

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
    <div className="SessionComp h-[100vh] flex flex-col items-center justify-center p-4">
      <div className="bg-gray-100 h-screen flex flex-col items-center justify-center p-4">
        {/* <h1 className="text-3xl font-bold mb-6 text-gray-800">MockMate</h1> */}

        {!isInterviewComplete ? (
          <>
            {question ? (
                <div
                className="bg-white shadow-md rounded-lg p-6 w-full max-w-md relative"
                style={{ width: "800px", maxWidth: "70vw" }}
                >
                <img src={botImage} alt="Bot" className="bot-icon" /> {/* Bot Icon */}
                <p className="text-lg mb-4 text-dark-gray"><strong>Bot:</strong> {question}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <textarea
                    id="speechInput"
                    type="text"
                    placeholder="Your voice will fill this input"
                    style={{ width: '100%', padding: '10px', marginTop: '20px' }}
                    value={answer} 
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full p-2 input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />

                  <div>
                    <button
                      onClick={() => setIsListening((prev) => !prev)}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: isListening ? 'red' : 'blue',
                        color: 'white',
                      }}
                    >
                      {isListening ? 'Submit Answer' : 'Start Listening'}
                    </button>
                  </div>

                  {/* <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Submit Answer
                  </button> */}
                </form>
              </div>
            ) : (
              <>
                <div className="relative flex flex-col items-center justify-center">
                  <img className="bot-icon-1 hover:scale-105 transition-all duration-500" src={botImage} alt="Bot" />
                  <div className="animated-loader mt-[2rem]" style={{marginTop:"3rem"}}></div>
                  <p className="text-light-gray text-lg mt-6 font-semibold animate-pulse">
                    Waiting for the first question...
                  </p>
                </div>
              </>
            )}
          </>
        ) : ( 
          <p className="text-green-500 text-xl font-semibold">The interview is complete. Thank you for participating!</p>
        )}
      </div>
    </div>
  )
}

export default InterviewSession;
