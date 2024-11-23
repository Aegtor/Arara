from flask import Flask, request, jsonify

app = Flask(__name__)

# Örnek veri (Veritabanı yerine kullanılabilir)
content = [
    {"id": "1", "title": "React Native Tutorial", "description": "Learn React Native."},
    {"id": "2", "title": "Django Basics", "description": "Learn Django framework."},
    {"id": "3", "title": "Python for Data Science", "description": "Data science with Python."}
]

# Arama endpoint
@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')  # Kullanıcının girdiği arama terimi
    results = [item for item in content if query.lower() in item['title'].lower()]
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
