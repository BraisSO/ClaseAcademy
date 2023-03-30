from flask import Flask,request,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root@localhost/flaskmysql'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db=SQLAlchemy(app)
ma=Marshmallow(app)

#Creación del modelo que el URM transformará directamente en una tabla en la base de datos
class Task(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(70),unique=True)
    description=db.Column(db.String(100))
    
#Constructor 
    def __init__(self, title, description):
        self.title=title
        self.description=description
        


#Para ejecutar la base de datos tenemos que darle este contexto, sino no funciona.
with app.app_context():
    db.create_all()


#Define una clase "TaskSchema" que define cómo se serializarán y deserializarán las instancias de "Task" 
# (es decir, cómo se convertirán a y desde JSON). Esta clase Marshmallow tiene un atributo "Meta" que especifica 
# qué campos del modelo deben incluirse en la serialización. En este caso, "id", "title" y "description".
class TaskSchema(ma.Schema):
    class Meta:
        fields=('id','title','description')

task_schema=TaskSchema()

#Crea otra instancia de "TaskSchema" con el argumento many=True y la asigna a la variable 
# "tasks_schema". Esto indica que se espera una lista de objetos de la clase "Task" para ser serializados.
tasks_schema=TaskSchema(many=True)

#CRUD
#Método POST
@app.route('/tasks',methods=['POST'])
def create_task():
    
    title=request.json['title']
    description=request.json['description']
    
    new_task= Task(title,description)
    db.session.add(new_task)
    db.session.commit()
    
    return task_schema.jsonify(new_task)

#Método GET (todo)
@app.route('/tasks',methods=['GET'])
def get_tasks():
        all_tasks=Task.query.all()
        result=tasks_schema.dump(all_tasks)
        return jsonify(result)
    

#Método GET con parámetro
@app.route('/tasks/<id>', methods=['GET'])
def get_task(id):
    task = Task.query.get(id)
    return task_schema.jsonify(task)


#Método PUT
@app.route('/tasks/<id>', methods=['PUT'])
def updateTask(id):
    task = Task.query.get(id)
    
    title=request.json['title']
    description=request.json['description']
    
    task.title=title
    task.description=description
    
    db.session.commit()
    
    return task_schema.jsonify(task)

#Metodo DELETE
@app.route('/tasks/<id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    
    return task_schema.jsonify(task)
    

#Mensaje en ruta por defecto
@app.route('/', methods=['GET'])    
def index():
    return jsonify({'message': 'Welcome to my API'})


#Inicialización de la aplicación (algo así como el MAIN en JAVA)
if __name__ == "__main__":
    app.run(debug=True)
