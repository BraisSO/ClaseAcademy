from flask import Blueprint
from repo.user_repo import *
from users.controller.user_controller import *

users_routes = Blueprint('user_routes', __name__, url_prefix="/api")

#Lista de usuarios
@users_routes.get("/users")
def users_list():
    return users()


#Usuarios por id
@users_routes.get("/user/<int:id>")
def users_by_id(id):
    return user(id)

#Usuarios por username
@users_routes.get("/by-username/<string:username>")
def users_by_username(username):
    return by_username(username)


#Guardar usuarios
@users_routes.post("/save")
def save():
    return user_registry()

#Modificar usuario
@users_routes.put("/update/<int:id>")
def update(id):
    return update_user(id)


#Eliminar usuario
@users_routes.delete("/delete/<int:id>")
def delete_user(id):
    delete(id)
    return "Perfect"