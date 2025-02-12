import React, { useState } from 'react';
import axios from 'axios';

function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [model, setModel] = useState("custom");
  const [result, setResult] = useState(null);
  
  const handleAnalyze = async () => {
    try {
      // API token
      const tokenRes = await axios.get("https://3e63-34-16-247-120.ngrok-free.app/token");
      const apiToken = tokenRes.data.api_token;
      
      //  /analyze/ 
      const response = await axios.post("https://3e63-34-16-247-120.ngrok-free.app/analyze/", {
        text: text,
        model: model,
        token: apiToken
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error analyzing sentiment", error);
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Sentiment Analysis</h1>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        rows={5}
        cols={50}
      />
      <br /><br />
      <select value={model} onChange={(e) => setModel(e.target.value)}>
        <option value="custom">Custom Model</option>
        <option value="llama">Llama 3</option>
      </select>
      <br /><br />
      <button onClick={handleAnalyze}>Analyze Sentiment</button>
      {result && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Result:</h3>
          <p>Sentiment: {result.sentiment}</p>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}
    </div>
  );
}

export default SentimentAnalyzer;