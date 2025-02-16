const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-5xl font-bold text-white mb-8">Countdown Timer</h1>
      <div className="bg-white p-10 rounded-lg shadow-2xl">
        <div className="flex items-center space-x-2 mb-6">
          <input
            id="hours"
            placeholder="HH"
            className="w-20 p-3 text-2xl text-center border border-gray-300 rounded-lg"
          />
          <span className="text-2xl text-gray-700">:</span>
          <input
            id="minutes"
            placeholder="MM"
            className="w-20 p-3 text-2xl text-center border border-gray-300 rounded-lg"
          />
          <span className="text-2xl text-gray-700">:</span>
          <input
            id="seconds"
            placeholder="SS"
            className="w-20 p-3 text-2xl text-center border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-3 text-2xl text-white bg-blue-600 rounded-lg hover:bg-blue-800">
            Start
          </button>
        </div>
        <div>
          <div>
            <div>10</div>
            <span>:</span>
            <div>10</div>
            <span>:</span>
            <div>10</div>
          </div>
          <div>
            <button>Pause</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
