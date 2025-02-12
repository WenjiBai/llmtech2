# Sentiment Analysis System with Custom Fine-Tuned Model and Llama 3 Integration

## Project Overview

This project implements a full sentiment analysis system featuring:
- Fine-tuning a sentiment analysis model on the IMDB dataset using Hugging Face Transformers.
- Uploading the fine-tuned model and tokenizer to Hugging Face Hub.
- A backend API built with FastAPI that supports two models:
  - A custom fine-tuned model.
  - A Llama 3 model (simulated or integrated via Groq Cloud API).
- A frontend UI built with React for users to input text, select the model, and view sentiment results (including sentiment and confidence score).
- Detailed documentation on how to install dependencies, run the project, and use the API.

## Directory Structure
sentiment-analysis-system/
├── backend/
│   ├── app.py                  # FastAPI backend code
│   ├── requirements.txt        # Python dependencies for backend
│   └── README_backend.md       # (Optional) Backend specific instructions
├── frontend/
│   ├── package.json            # React project configuration
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js              # Main React application
│   │   ├── SentimentAnalyzer.js# React component for sentiment analysis
│   │   └── …                 # Other React files
│   └── README_frontend.md      # (Optional) Frontend specific instructions
├── notebook/
│   └── sentiment_analysis.ipynb  # Jupyter/Colab Notebook for data preprocessing and fine-tuning
├── README.md                   # This file
└── .gitignore



## Installation

### Backend

1. **Prerequisites:**  
   - Python 3.7+  
   - [FastAPI](https://fastapi.tiangolo.com/), [uvicorn](https://www.uvicorn.org/), [transformers](https://github.com/huggingface/transformers), [pyngrok](https://github.com/alexdlaird/pyngrok) (if running on Colab)

2. **Installation Steps:**  
   Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt



 ## How to Run
Start the API server: uvicorn app:app --host 0.0.0.0 --port 8000
(If running on Colab, use ngrok to expose the server.)

2. Frontend:
Navigate to the frontend/ directory.
Install dependencies: npm install
Start the React app: npm start
	
3. Notebook:
   Open notebook/tech week3.ipynb in Jupyter/Colab and run the cells as instructed.

