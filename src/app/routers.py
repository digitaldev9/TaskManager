from fastapi import APIRouter

from src.modules.taskmanager.routers import router as task_router

router = APIRouter(
    prefix="/api"
)

router.include_router(task_router)