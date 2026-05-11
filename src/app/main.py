from fastapi import FastAPI

from src.app.routers import router
from sqlalchemy import text
from src.app.database import engine
from src.modules.taskmanager.models import Task

from src.app.database import Base
from src.app.database import engine

from src.app.auth import create_access_token
from src.app.auth import verify_access_token

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Task Manager API",
    version="1.0.0"
)

app.add_middleware(

    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)

app.include_router(router)


@app.get("/")
def health_check():
    return {
        "status": "running"
    }

Base.metadata.create_all(bind=engine)

@app.get("/db-test")
def db_test():

    with engine.connect() as connection:

        result = connection.execute(
            text("SELECT 1")
        )

        return {
            "database": "connected",
            "result": [row[0] for row in result]
        }
    
@app.get("/generate-token")
def generate_token():

    token = create_access_token({
        "user_id": 1,
        "email": "admin@test.com"
    })

    return {
        "token": token
    }


@app.get("/verify-token")
def verify_token():

    token = create_access_token({
        "user_id": 1
    })

    payload = verify_access_token(token)

    return {
        "payload": payload
    }