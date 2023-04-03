from dao.user import User
from database.db import db

#Listar usuarios
def find_all_repo():
    users=User.query.all()
    return users