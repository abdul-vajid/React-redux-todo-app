import React from "react";
import InputForm from "./components/InputForm";
function App() {
  return (
    <div className="w-full min-h-screen font-bodyFont bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-600 text-white px-4 flex justify-center items-center">
      <div className="w-[850px] bg-bodyColor p-10">
        <InputForm/>
      </div>
    </div>
  );
}

export default App;


