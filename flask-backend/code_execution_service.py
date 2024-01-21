def exec_code(code):
    with open("tempFile.py", "w") as fp:
        fp.write(code)
    return exec("python tempFile.py")
