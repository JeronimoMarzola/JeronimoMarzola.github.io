import os
from flask import Flask, render_template, send_file, abort

app = Flask(__name__, static_folder="public", static_url_path="/")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/health")
def health():
    return {"status": "ok"}

@app.route("/media/jeronimo.jpg")
def media_jeronimo():
    img_path = os.path.join(os.getcwd(), "Multimedia", "Foto_Jeronimo.jpg")
    if os.path.exists(img_path):
        return send_file(img_path, mimetype="image/jpeg")
    return abort(404)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="127.0.0.1", port=port, debug=True)