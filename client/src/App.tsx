import React from 'react';
import './App.css';
import ImageUpload from './upload/ImageUpload';

const App = () => {
  return <div> 
    <h1>v_gallery</h1>
    <h2>Upload an Image</h2>
    <div>
      <ImageUpload />
    </div>;
  </div>
};

export default App;
