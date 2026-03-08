from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Two-wheeler safety AI backend is running"}
