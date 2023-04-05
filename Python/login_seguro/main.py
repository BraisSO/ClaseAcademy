from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash #Librerias para hashear y verificar

app = Flask(__name__) 

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root@localhost/login"

db = SQLAlchemy(app)
ma = Marshmallow(app)


class User(db.Model):
    __tablename__= 'users' #Cambio del mapeo de la tabla user a users en plural
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150))
    password = db.Column(db.String(160))
    
    def __init__(self, username, password):
        self.username = username
        self.password = password

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id','username', 'password')
        
with app.app_context():
    db.create_all()  
        
user_schema = UserSchema()
users_schema = UserSchema(many=True)


@app.post("/save-user")
def save_user():
    username = request.json['username']
    password= request.json['password']
    
    password_hash = generate_password_hash(password) #Hasheado de la contraseña
    
    user = User(username, password_hash) #Envio de la contraseña hasheada
    
    db.session.add(user)
    db.session.commit()
    return user_schema.dump(user)


@app.post('/login')
def login():
    username = request.json['username']
    password= request.json['password']
    
    user = User.query.filter_by(username = username).one_or_none()  #Checkeo para ver primero si existe el usuario
    
    if user is not None and check_password_hash(user.password, password): #Si este existe se comprueba que la contraseña coincida con el hash
        return jsonify({'success': 'usuario autorizado'})

    else: 
        return jsonify({'error':'unauthorized'})    


if __name__ == '__main__':
    app.run(debug=True)