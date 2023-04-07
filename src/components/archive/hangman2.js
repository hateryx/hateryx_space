import react, { useState } from "react";

const Hangman = () => {
  const [showHangman, setShowHangman] = useState(false);

  const handleClick = () => {
    setShowHangman(true);
  };

  return (
    <div className="relative h-screen">
      {/* Show Hangman button */}
      {!showHangman && (
        <div className="absolute inset-0 flex justify-center items-center">
          <button
            className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
            onClick={handleClick}
          >
            Show Hangman
          </button>
        </div>
      )}

      {/* Hangman content */}
      {showHangman && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="max-w-lg w-4/5 mx-auto p-8 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Hangman</h1>
            <p className="text-gray-800 mb-4">
              Hangman is a word guessing game where the player tries to guess
              the letters of a secret word before the hangman is fully drawn.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Problem Statement
            </h2>
            <p className="text-gray-800 mb-4">
              The problem with traditional word guessing games is that they can
              become repetitive and boring after a while. Hangman adds an
              element of suspense and challenge by introducing a visual
              representation of the player's progress.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Solution</h2>
            <p className="text-gray-800 mb-4">
              Hangman solves the problem by introducing a hangman figure that is
              gradually drawn as the player guesses incorrect letters. This
              creates a sense of urgency and excitement that keeps the player
              engaged and motivated to keep guessing.
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Features</h2>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-800">Randomly generated secret word</li>
              <li className="text-gray-800">Interactive hangman figure</li>
              <li className="text-gray-800">Letter buttons for guessing</li>
              <li className="text-gray-800">Win and lose messages</li>
            </ul>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Code Repository
            </h2>
            <div className="flex flex-wrap justify-center mb-4"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hangman;
