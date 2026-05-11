from pydantic import BaseModel
from typing import Optional


class TaskCreate(BaseModel):

    title: str

    description: Optional[str] = None


class TaskResponse(BaseModel):

    id: int

    title: str

    description: Optional[str] = None

    completed: bool

    class Config:

        from_attributes = True

class TaskUpdate(BaseModel):

    title: str

    description: Optional[str] = None

    completed: bool

class TaskDelete(BaseModel):
    id: int
    confirm: bool