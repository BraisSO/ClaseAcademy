from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from werkzeug.security import generate_password_hash, check_password_hash 
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity #Importes para la reación y verificación de los tokens


app = Flask(__name__) 
app.config['JWT_SECRET_KEY'] = 'clave_secreta' #Clave secreta (?)

app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root@localhost/login"

db = SQLAlchemy(app)
ma = Marshmallow(app)
jwt= JWTManager(app) #Instanciación de JWT


class User(db.Model):
    __tablename__= 'users'
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
    
    password_hash = generate_password_hash(password)
    
    user = User(username, password_hash) 
    
    db.session.add(user)
    db.session.commit()
    return user_schema.dump(user)


@app.post('/login')
def login():
    username = request.json['username']
    password= request.json['password']
    
    user = User.query.filter_by(username = username).one_or_none() 
    
    if user is not None and check_password_hash(user.password, password): 
        access_token = create_access_token(identity=username) #Si el login es correcto se crea el token y se asocia a un usuario
        return jsonify({access_token: access_token},200) #Retorno de dicho token (no recomendable ni necesario - solo a modo de prueba)

    else: 
        return jsonify({'error':'unauthorized'})    
    

@app.get('/protected')
@jwt_required() #Le decimos que para acceder a esta ruta es necesario el token
def protected():
    current_user = get_jwt_identity() #Recuperamos el usuario asociado a traves del gestor del propio gestor de tokens
    return jsonify(logged_in_as=current_user)

if __name__ == '__main__':
    app.run(debug=True)

