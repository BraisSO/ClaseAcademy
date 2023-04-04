from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow import Schema, fields

app = Flask (__name__)

#Database config
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root@localhost/escuela'
app.config['SQL_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Alumno(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    
    def __init__(self, nombre):
        self.nombre=nombre

class Nota(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    nota_alumno= db.Column(db.Float, nullable=False)
    alumno_id = db.Column(db.Integer, db.ForeignKey('alumno.id'))
    alumno = db.relationship('Alumno', backref='notas')
    
    def __init__(self, nota_alumno, alumno_id):
        self.nota_alumno=nota_alumno
        self.alumno_id=alumno_id


class NotaSchema(Schema):
    id = fields.Integer()
    nota_alumno = fields.Float()
    
    
class AlumnoSchema(Schema):
    id = fields.Integer()
    nombre = fields.String()
    notas = fields.Nested(NotaSchema, many=True)
    
    
alumno_schema = AlumnoSchema()
alumnos_schema = AlumnoSchema(many=True)

nota_schema = NotaSchema()
notas_schema = NotaSchema(many=True)

@app.get("/")
def get_alumnos():
    alumnos=Alumno.query.all()
    return alumnos_schema.dump(alumnos)


@app.get("/notas")
def get_notas():
    notas=Nota.query.all()
    return notas_schema.dump(notas)

@app.post("/save-alumno")
def save_alumno():
    nombre= request.json['nombre']
    alumno = Alumno(nombre)
    db.session.add(alumno)
    db.session.commit()
    return alumno_schema.dump(alumno)

@app.post("/save-nota")
def save_nota():
    nota_alumno = request.json['nota_alumno']
    alumno_id = request.json['alumno_id']
    nota = Nota(nota_alumno, alumno_id)
    db.session.add(nota)
    db.session.commit()
    return nota_schema.dump(nota)
    


if __name__ == '__main__':
    app.run(debug=True)  