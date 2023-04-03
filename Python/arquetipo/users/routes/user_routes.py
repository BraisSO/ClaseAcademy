from flask import Blueprint
from repo.user_repo import *
from users.controller.user_controller import *

users_routes = Blueprint('user_routes', __name__)

@users_routes.get("/")
def home():
    return users()