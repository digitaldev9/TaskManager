from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from src.app.database import get_db

from src.modules.taskmanager.schemas import (
    TaskCreate,
    TaskUpdate,
    TaskResponse,
    
)

from src.modules.taskmanager.controller import (
    create_task_controller , get_all_tasks_controller, get_single_task_controller, update_task_controller, delete_task_controller
)

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"]
)


@router.post(
    "/",
    response_model=TaskResponse
)
def create_task(
    task_data: TaskCreate,
    db: Session = Depends(get_db)
):

    return create_task_controller(
        db=db,
        task_data=task_data
    )

@router.get(
    "/",
    response_model=list[TaskResponse]
)
def get_all_tasks(
    db: Session = Depends(get_db)
):

    return get_all_tasks_controller(
        db=db
    )

@router.get(
    "/{task_id}",
    response_model=TaskResponse
)
def get_single_task(
    task_id: int,
    db: Session = Depends(get_db)
):

    return get_single_task_controller(
        db=db,
        task_id=task_id
    )

@router.put(
    "/{task_id}",
    response_model=TaskResponse
)
def update_task(
    task_id: int,
    task_data: TaskUpdate,
    db: Session = Depends(get_db)
):

    return update_task_controller(
        db=db,
        task_id=task_id,
        task_data=task_data
    )

@router.delete(
    "/{task_id}"
)
def delete_task(
    task_id: int,
    db: Session = Depends(get_db)
):

    return delete_task_controller(
        db=db,
        task_id=task_id
    )