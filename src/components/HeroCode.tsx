"use client";

const HeroCode = () => {
  return (
    <div className="flex-1 max-w-2xl">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-2">portfolio.ts</span>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex">
            <span className="text-gray-500 mr-4">1</span>
            <span className="text-blue-400">const</span> <span className="text-yellow-400 mx-2">developer:</span> <span className="text-blue-400 mr-2">Dev</span> = <span className="text-gray-300 ml-2">{"{"}</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">2</span>
            <span className="text-gray-300 ml-4">name:</span> <span className="text-green-400 ml-2">&apos;Gonzalo Balboa&apos;</span>,
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">3</span>
            <span className="text-gray-300 ml-4">role:</span> <span className="text-green-400 ml-2">&apos;Full Stack Developer&apos;</span>,
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">4</span>
            <span className="text-gray-300 ml-4">skills:</span> <span className="text-gray-300 ml-2">{"["}</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">5</span>
            <span className="text-green-400 ml-8">&apos;React&apos;</span>, <span className="text-green-400">&apos;Node.js&apos;</span>,
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">6</span>
            <span className="text-green-400 ml-8">&apos;TypeScript&apos;</span>, <span className="text-green-400">&apos;MongoDB&apos;</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">7</span>
            <span className="text-gray-300 ml-4">{"],"}</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">8</span>
            <span className="text-gray-300 ml-4">passion:</span> <span className="text-green-400 ml-2">&apos;Building scalable solutions&apos;</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">9</span>
            <span className="text-gray-300">{"}"}</span>;
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">10</span>
          </div>
          <div className="flex">
            <span className="text-gray-500 mr-4">11</span>
            <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">&apos;Ready to build amazing things!&apos;</span>);
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCode; 