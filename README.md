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
