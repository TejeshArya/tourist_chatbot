from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sentence_transformers import SentenceTransformer, util
import ollama

app = Flask(__name__)
CORS(app)

# Load the model
def load_model():
    return SentenceTransformer('paraphrase-MiniLM-L6-v2')

model = load_model()

# Load the Excel file
df = pd.read_excel(r'D:\Toursistchatbot\tourist.xlsx')
df["question"] = df["Category"] + df["Location"]
df['question_embedding'] = df['question'].apply(lambda x: model.encode(x, convert_to_tensor=True))

# Function to find the most similar answer
def find_most_similar_answer(user_question):
    user_question_embedding = model.encode(user_question, convert_to_tensor=True)
    df['similarity'] = df['question_embedding'].apply(lambda x: util.pytorch_cos_sim(user_question_embedding, x).item())
    most_similar_row = df.loc[df['similarity'].idxmax()]
    return most_similar_row['question'], most_similar_row['Details']

# Function to generate response using Ollama
def generate_ollama_response(chat_history, relevant_answer):
    prompt = "This is a conversation between a user and a tourist guidance chatbot.\n"
    for entry in chat_history:
        prompt += f"User: {entry['user']}\nBot: {entry['bot']}\n"
    prompt += (
        f"User: {chat_history[-1]['user']}\n"
        f"Based on the following information: \"{relevant_answer}\", provide a professional response.\n"
        "Bot:"
    )
    response = ollama.chat(model="tinyllama",options={"temperature":0.5,"num_predict":150}, messages=[{"role": "user", "content": prompt}])
    return response['message']['content']

# API Endpoint for answering questions
@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    user_question = data.get('question', '')
    
    if not user_question:
        return jsonify({'error': 'No question provided'}), 400
    
    # Handle the greeting "Hi" or similar directly
    if user_question.lower() in ["hi", "hello", "hey"]:
        bot_response = (
            "Thank you for asking! My name is [Vizaga], and I'm a professional tourist guidance chatbot. "
            "I'd be happy to assist you in finding the best options for your trip. "
            "Can I get some more information about your interests or preferences?"
        )
        return jsonify({'response': bot_response})
    
    # For other questions, find the most similar question and answer
    relevant_question, relevant_answer = find_most_similar_answer(user_question)
    
    # Generate the enhanced bot response
    chat_history = data.get('chat_history', [])
    enhanced_answer = generate_ollama_response(chat_history, relevant_answer)
    
    # Only return the bot's response without unnecessary text or explanation
    return jsonify({'response': enhanced_answer})

if __name__ == '__main__':
    app.run(debug=True)
