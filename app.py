from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import MarianMTModel, MarianTokenizer
import secrets

app = FastAPI()

# Generate or set a fixed API token for demonstration
API_TOKEN = secrets.token_hex(16)  # or use a fixed token like "your_api_token_here"

# Load the translation model and tokenizer (English-to-Chinese)
translation_tokenizer = MarianTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-zh")
translation_model = MarianMTModel.from_pretrained("Helsinki-NLP/opus-mt-en-zh")

class TranslationRequest(BaseModel):
    text: str
    token: str  # Include the API token in the request for authentication

@app.post("/translate")
def translate_text(request: TranslationRequest):
    # Verify the token
    if request.token != API_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized: Invalid API token")
    
    inputs = translation_tokenizer(request.text, return_tensors="pt", padding=True, truncation=True)
    outputs = translation_model.generate(**inputs)
    translated_text = translation_tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"translated_text": translated_text}

@app.get("/token")
def get_api_token():
    # Return the token (in a real application, this endpoint might be protected)
    return {"api_token": API_TOKEN}
