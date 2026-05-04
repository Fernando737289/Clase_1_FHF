from app.models.user import User

# Base de datos simulada
fake_db = []

def create_user(user: User):
    # Evitar IDs duplicados
    if any(u.id == user.id for u in fake_db):
        return None
    fake_db.append(user)
    return user

def list_users():
    return fake_db

def find_user_by_email(email: str):
    for user in fake_db:
        if user.email == email:
            return user
    return None