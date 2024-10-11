# app/models/sentiment_model.py

import random


from app.db.database import get_db

def analyze_comment(comment):
    # Aquí puedes integrar un modelo real de análisis de sentimientos
    # Por ahora, devolvemos una predicción aleatoria
    sentiments = ['positivo', 'negativo', 'neutral']
    sentiment = random.choice(sentiments)

    # Guardar en la base de datos
    db = get_db()
    comments_collection = db['comments']
    comments_collection.insert_one({
        'comment': comment,
        'sentiment': sentiment
    })

    return sentiment
