import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FunnyLoadingMessages = () => {
  const messages = [
    "Hold on, we're herding the code cats... 🐱",
    "Brewing a fresh pot of JavaScript... ☕",
    "Counting to infinity (almost there)... 🚀",
    "Spinning up the hamster wheel... 🐹",
    "Assembling the Avengers of algorithms... 🦸‍♂️",
    "Teaching AI to tell better jokes... 🤖",
    "Unboxing your dreams... 📦",
    "Polishing the pixels... ✨",
    "Convincing the server to cooperate... 🖥️",
    "Summoning the coding wizards... 🧙‍♂️",
  ];

  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }, 6000); // Change message every 3 seconds

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
   <div>
    <Link to='/'>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center animate-pulse">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Were Working on It!
        </h1>
        <p className="text-lg text-gray-600 mb-6">{message}</p>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold">Click And Go To Home</h2>
      </div>
    </div>
    </Link>
   </div>
  );
};

export default FunnyLoadingMessages;