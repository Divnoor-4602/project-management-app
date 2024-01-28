import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <>
      <div className="flex font-mono">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
