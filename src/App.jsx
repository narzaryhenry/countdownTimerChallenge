import { useEffect, useState } from "react";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const handleStart = () => {
    setIsStarted(true);
  };
  const handleReset = () => {
    setIsStarted(false);
  };
  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHrs(value);
    } else if (id === "minutes") {
      setMins(value);
    } else if (id === "seconds") {
      setSecs(value);
    }
  };

  // useEffect(() => {
  //   setInterval(())
  // }, [isStarted, hrs, mins, secs]);

  console.log(hrs, mins, secs);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-bold text-white mb-8">Countdown Timer</h1>
      <div className="bg-white p-10 rounded-lg shadow-2xl">
        {!isStarted && (
          <div className="flex items-center space-x-2 mb-6">
            <input
              onChange={handleInput}
              id="hours"
              placeholder="HH"
              className="w-20 p-3 text-2xl text-center border border-gray-300 rounded-lg"
            />
            <span className="text-2xl text-gray-700">:</span>
            <input
              onChange={handleInput}
              id="minutes"
              placeholder="MM"
              className="w-20 p-3 text-2xl text-center border border-gray-300 rounded-lg"
            />
            <span className="text-2xl text-gray-700">:</span>
            <input
              onChange={handleInput}
              id="seconds"
              placeholder="SS"
              className="w-20 p-3 text-2xl text-center border border-gray-300 rounded-lg"
            />
          </div>
        )}
        <div className="flex justify-center">
          {!isStarted && (
            <button
              onClick={handleStart}
              className="px-6 py-3 text-2xl text-white bg-blue-600 rounded-lg hover:bg-blue-800"
            >
              Start
            </button>
          )}
          {isStarted && (
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-5xl">10</div>
                <span className="text-4xl">:</span>
                <div className="text-5xl">10</div>
                <span className="text-4xl">:</span>
                <div className="text-5xl">10</div>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 text-xl text-white bg-yellow-500 rounded-lg hover:bg-yellow-700">
                  Pause
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xl text-white bg-red-500 rounded-lg hover:bg-red-700"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
