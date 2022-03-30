from flask import Flask, request, jsonify 
#from flask_cors import CORS
#import requests as request
app = Flask(__name__, static_folder='./build/', static_url_path='/')

#CORS(app)

db = {"Olanike": "Oyedele"}
finame = {"fname": "null"}

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/name", methods=["GET", "POST"])
def name():
    #get request
    if request.method == "GET":
        #get name from query param
        fname = request.args.get("fname") wasn't working for some reason
        #fname = finame["fname"]
        #print(fname)
        #if name is in db, return last name
        if fname in db:
            return jsonify(lname=db[fname])
        else:
            return jsonify(lname="User Not Found")
    #post request
    elif request.method == "POST":
        #get name from json body
        data = request.json
        #print(data)
        #set fname and lname in db
        #finame["fname"] = data
        return "OK"

if __name__ == 'main':
    app.run()