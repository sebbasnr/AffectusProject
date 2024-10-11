# app/config.py

import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'mysecretkey')
    MONGODB_URI = os.getenv('MONGODB_URI', 'mongodb://localhost:27017/')
