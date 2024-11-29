import json
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from fuzzywuzzy import process  # Import 

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

def load_qa(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data['questions']

def preprocess(text):
    stop_words = set(stopwords.words('english'))
    lemmatizer = WordNetLemmatizer()
    tokens = word_tokenize(text.lower())
    processed = [lemmatizer.lemmatize(word) for word in tokens if word.isalnum() and word not in stop_words]
    return ' '.join(processed)

def get_best_match(user_input, qa_pairs):
    user_input_processed = preprocess(user_input)
    questions = [pair['question'] for pair in qa_pairs] 
    best_match, score = process.extractOne(user_input_processed, questions) 

    if score > 70: 
        for pair in qa_pairs:
            if pair['question'] == best_match:
                return pair['answer']
    return "Sorry, I don't understand that."

def chatbot():
    qa_pairs = load_qa(r'con.json')  #path
    
    print("Simple Boy Chatbot: Hello! How can I help you today?")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ['exit', 'quit']:
            print("Simple Boy Chatbot: Goodbye!")
            break
        response = get_best_match(user_input, qa_pairs)
        print(f"Simple Boy Chatbot: {response}")

if __name__ == "__main__":
    chatbot()
