from flask import Flask, request
from code_execution_service import exec_code

app = Flask(__name__)


@app.route("/")
def hello_world():
    print("asshole")
    return "<p>Hello, World!</p>"


@app.post("/exec")
def exec_router_function():
    print(f"received data: {request.data}")
    exec_code(request.data.code)
