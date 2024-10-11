from flask import Blueprint, request, jsonify
from app.models.sentiment_model import analyze_comment

api = Blueprint('api', __name__)

@api.route('/analyze', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    comment = data.get('comment', '')
    if not comment:
        return jsonify({"error": "No se proporcionó ningún comentario."}), 400

    sentiment = analyze_comment(comment)
    return jsonify({"sentiment": sentiment})

