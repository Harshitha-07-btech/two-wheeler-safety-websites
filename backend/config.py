import os
from dotenv import load_dotenv

load_dotenv()

OLLAMA_API_KEY = os.getenv("OLLAMA_API_KEY", "")
DATABASE_URL = os.getenv("DATABASE_URL", "")
