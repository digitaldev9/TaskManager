from sqlalchemy.orm import Session

from src.modules.taskmanager.schemas import TaskCreate, TaskUpdate

from src.modules.taskmanager.services import (create_task_service, get_all_tasks_service, get_single_task_service, update_task_service, delete_task_service)


def create_task_controller(
    db: Session,
    task_data: TaskCreate
):

    return create_task_service(
        db=db,
        task_data=task_data
    )

def update_task_controller(
    db: Session,
    task_id: int,
    task_data: TaskUpdate
):

    return update_task_service(
        db=db,
        task_id=task_id,
        task_data=task_data
    )

def get_all_tasks_controller(
    db: Session
):

    return get_all_tasks_service(
        db=db
    )

def get_single_task_controller(
    db: Session,
    task_id: int
):

    return get_single_task_service(
        db=db,
        task_id=task_id
    )

def delete_task_controller(
    db: Session,
    task_id: int
):

    return delete_task_service(
        db=db,
        task_id=task_id
    )