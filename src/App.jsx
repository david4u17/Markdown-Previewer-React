
import React from "react";
import './App.css';
import MarkdownPreviewer from './MarkdownPreviewer'

const App = () => {
  return (
    <>
    <div className="App">
      <div className="text-center">Markdown Previewer</div>
      
      <MarkdownPreviewer />
    </div>
      </>
  );
};

export default App;