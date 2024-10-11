from pymongo import MongoClient
import os

def get_db():
    client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017/'))
    db = client['sentiment_db']
    return db
