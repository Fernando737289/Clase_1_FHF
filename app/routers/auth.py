from fastapi import APIRouter
from app.models.user import LoginData
from app.services.user_service import find_user_by_email

router = APIRouter(tags=["Auth"])

@router.post("/login")
def login(datos: LoginData):
    user = find_user_by_email(datos.email)

    if user and user.password == datos.password:
        return {"msg": "Login correcto"}

    return {"msg": "Credenciales incorrectas"}