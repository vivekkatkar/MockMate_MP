import React, { useState, useEffect } from 'react';
import botImage from '../assets/bot.jpeg';
import Timer from './Timer.jsx'; 
import Stop from './Stop.jsx'
import { useNavigate } from 'react-router-dom';

const InterviewSession = () => {
    const navigate = useNavigate();
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isInterviewComplete, setInterviewComplete] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [ssocket, setSsocket] = useState(null);
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [inputMode, setInputMode] = useState('text');
    const [quoteText, setQuoteText] = useState("");


    const motivationalQuotes = [
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "Don't watch the clock; do what it does. Keep going.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Don't stop when you're tired. Stop when you're done.",
        "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
        "Your limitation—it's only your imagination.",
        "Dream it. Wish it. Do it.",
        "Great things never come from comfort zones.",
        "You are capable of amazing things.",
        "Push yourself, because no one else is going to do it for you.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don't wait for opportunity. Create it.",
        "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Success is what happens after you have survived all of your disappointments.",
        "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
        "It always seems impossible until it's done.",
        "Work hard in silence, let your success be your noise.",
        "Keep going. Everything you need will come to you at the perfect time.",
        "Believe you can and you're halfway there.",
        "The way to get started is to quit talking and begin doing.",
        "What seems to us as bitter trials are often blessings in disguise.",
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "We generate fears while we sit. We overcome them by action.",
        "Don't limit your challenges. Challenge your limits.",
        "If it doesn't challenge you, it won't change you.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Act as if what you do makes a difference. It does.",
        "Success is not in what you have, but who you are.",
        "Believe in your infinite potential. Your only limitations are those you set upon yourself.",
        "Go as far as you can see; when you get there, you'll be able to see further.",
        "The only way to do great work is to love what you do.",
        "You don't have to be great to start, but you have to start to be great.",
        "Do something today that your future self will thank you for.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Don't wish it were easier; wish you were better.",
        "Opportunities don't happen, you create them.",
        "Start where you are. Use what you have. Do what you can.",
        "Doubt kills more dreams than failure ever will.",
        "Failure will never overtake me if my determination to succeed is strong enough.",
        "The man who has confidence in himself gains the confidence of others.",
        "Set your goals high, and don't stop till you get there.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It's not whether you get knocked down, it's whether you get up.",
        "Don't wait for the right moment, create it.",
        "You don't have to see the whole staircase, just take the first step.",
        "The best way to predict the future is to create it."
      ];
      
      useEffect(() => {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        setQuoteText(motivationalQuotes[randomIndex]);
      }, []);


    useEffect(() => {
        fetch('https://mockmate-mp.onrender.com/gemini/questions', {
            // fetch('http://localhost:3000/gemini/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem("email") })
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
                        setIsTimerRunning(true);  
                    } else if (data.message) {
                        console.log(data.message);
                        setInterviewComplete(true);  
                        setIsTimerRunning(false);    
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
              setAnswer((prev) => prev + transcriptPart);
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

    const toggleInputMode = (e) => {
        setInputMode(e.target.checked ? 'audio' : 'text'); 
        setAnswer('');
    };

    const handleStop = (e) => {
        console.log("viki");
        if (ssocket) {
            ssocket.close();  
            
            console.log('WebSocket connection closed.');
            navigate("/dashboard");
        } else {
            console.error('No WebSocket connection to close.');
        }
    };
    

    return (
        <div className="SessionComp h-[100vh] flex flex-col items-center justify-center p-4">
            <div className="bg-gray-100 h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl font-bold mb-6 text-white">MockMate</h1>

                <Timer initialSeconds={60} isRunning={isTimerRunning} />
              
                <Stop StopInterview={handleStop} />

                {!isInterviewComplete ? (
                    <>
                        {question ? (
                            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md relative">
                                <img src={botImage} alt="Bot" className="bot-icon" />
                                <p className="text-lg mb-4 text-dark-gray"><strong>Bot:</strong> {question}</p>
                                
                             
                                {/* <input type="checkbox" onChange={toggleInputMode} className="toggle" defaultChecked /> */}
                                <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", }}>
                                <div className="input-label" style={{ display: "flex", alignItems: "center", gap: "10px", padding : "10px" }}>
                                    <span role="img" aria-label="text">📝</span>
                                    <input type="checkbox" onChange={toggleInputMode} className="toggle" defaultChecked />
                                    <span role="img" aria-label="audio">🎤</span>
                                </div>
                                </div>

                                {/* Conditional Rendering for Text and Audio Input */}
                                {inputMode === 'text' ? (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* <input
                                            type="text"
                                            value={answer}
                                            onChange={(e) => setAnswer(e.target.value)}
                                            placeholder="Type your answer"
                                            className="w-full p-2 input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        /> */}
                                            <textarea
                                                value={answer}
                                                onChange={(e) => setAnswer(e.target.value)}
                                                placeholder="Type your answer"
                                                className="w-full p-2 input border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar"
                                                style={{ height: "100px" }} 
                                                required
                                                />


                                        <button 
                                            type="submit" 
                                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                                            Submit Answer
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <textarea
                                            id="speechInput"
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
                                    </form>
                                )}
                            </div>
                        ) : (
                            <div className="relative flex flex-col items-center justify-center">
                                <img className="bot-icon-1 hover:scale-105 transition-all duration-500" src={botImage} alt="Bot" />
                                <div className="animated-loader mt-[2rem]" style={{ marginTop: "3rem" }}></div>
                                <p className="text-light-gray text-lg mt-6 font-semibold animate-pulse w-full max-w-[300px] break-words">
                                {quoteText}
                                </p>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-green-500 text-xl font-semibold">The interview is complete. Thank you for participating!</p>
                )}
            </div>
        </div>
    );
}

export default InterviewSession;