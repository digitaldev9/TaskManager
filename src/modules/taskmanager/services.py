from sqlalchemy.orm import Session

from src.modules.taskmanager.models import Task
from src.modules.taskmanager.schemas import TaskCreate, TaskUpdate, TaskDelete


def create_task_service(
        
    db: Session,
    task_data: TaskCreate
):

    new_task = Task(
        title=task_data.title,
        description=task_data.description
    )

    db.add(new_task)

    db.commit()

    db.refresh(new_task)

    return new_task

def get_all_tasks_service(
    db: Session
):

    tasks = db.query(Task).all()

    return tasks

from fastapi import HTTPException


def get_single_task_service(
    db: Session,
    task_id: int
):

    task = db.query(Task).filter(
        Task.id == task_id
    ).first()

    if not task:

        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    return task

def update_task_service(
    db: Session,
    task_id: int,
    task_data: TaskUpdate
):

    task = db.query(Task).filter(
        Task.id == task_id
    ).first()

    if not task:

        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    task.title = task_data.title

    task.description = task_data.description

    task.completed = task_data.completed

    db.commit()

    db.refresh(task)

    return task

def delete_task_service(
    db: Session,
    task_id: int
):

    task = db.query(Task).filter(
        Task.id == task_id
    ).first()

    if not task:

        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    db.delete(task)

    db.commit()

    return {
        "message": "Task deleted successfully"
    }
