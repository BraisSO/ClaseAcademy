from flask import Flask, jsonify ;

app = Flask(__name__)

@app.get('/')
def defaultPage():
    return 'Este es el default'

@app.get('/home')
def home():
    return jsonify({'message':'Este es el home'})

if __name__ == '__main__':
    app.run(debug=True)
    
    