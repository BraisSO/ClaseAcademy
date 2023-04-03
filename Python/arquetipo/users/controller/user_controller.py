from repo.user_repo import *
from dao_schema.user_schema import *
from flask import jsonify,request

user_schema= UserSchema
users_schema= UserSchema(many=True)


#Lista de usuarios

def users():
    data= find_all_repo()
    return users_schema.dump(data)