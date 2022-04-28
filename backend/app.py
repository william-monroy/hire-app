from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import datetime
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# pymysql error: https://stackoverflow.com/questions/22252397/importerror-no-module-named-mysqldb
# Servidor Remoto
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://admin:admin@34.123.4.134:3306/densodb"
# Servidor Local
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:@localhost/densodb"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

#MODELOS
class Administrator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(255), nullable=False)
    lname = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Date)
    email = db.Column(db.String(255), nullable=False)
    phoneNumber = db.Column(db.String(20), nullable=False)
    passwordHash = db.Column(db.String(300), nullable=False)
    candidates = db.relationship("Candidate", back_populates="administrator")

    def __init__(self, id, fname, lname, age, email, phoneNumber, passwordHash):
        self.id = id
        self.fname = fname
        self.lname = lname
        self.age = age
        self.email = email
        self.phoneNumber = phoneNumber
        self.passwordHash = passwordHash

class Candidate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(255), nullable=False)
    lname = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Date)
    email = db.Column(db.String(255), nullable=False)
    phoneNumber = db.Column(db.String(20), nullable=False)
    passwordHash = db.Column(db.String(300), nullable=False)
    # Foreign Key
    idAdministrator = db.Column(db.Integer, db.ForeignKey('administrator.id'))
    # administrator = db.relationship("Administrator", backref="candidates")
    administrator = db.relationship("Administrator", back_populates="candidates")
    test1 = db.relationship("Test1", back_populates="candidate", uselist=False)
    test2 = db.relationship("Test2", back_populates="candidate", uselist=False)
    test3 = db.relationship("Test3", back_populates="candidate", uselist=False)

    def __init__(self, id, fname, lname, age, email, phoneNumber, passwordHash, idAdministrator):
        self.id = id
        self.fname = fname
        self.lname = lname
        self.age = age
        self.email = email
        self.phoneNumber = phoneNumber
        self.passwordHash = passwordHash
        self.idAdministrator = idAdministrator

class Test1(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer1 = db.Column(db.Integer, nullable=False)
    answer2 = db.Column(db.Integer, nullable=False)
    answer3 = db.Column(db.Integer, nullable=False)
    answer4 = db.Column(db.Integer, nullable=False)
    answer5 = db.Column(db.Integer, nullable=False)
    answer6 = db.Column(db.Integer, nullable=False)
    idCandidate = db.Column(db.Integer, db.ForeignKey('candidate.id'))
    candidate = db.relationship("Candidate", back_populates="test1")

    def __init__(self, answer1, answer2, answer3, answer4, answer5, answer6, idCandidate):
        self.answer1 = answer1
        self.answer2 = answer2
        self.answer3 = answer3
        self.answer4 = answer4
        self.answer5 = answer5
        self.answer6 = answer6
        self.idCandidate = idCandidate

class Test2(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer1 = db.Column(db.Integer, nullable=False)
    answer2 = db.Column(db.Integer, nullable=False)
    answer3 = db.Column(db.Integer, nullable=False)
    answer4 = db.Column(db.Integer, nullable=False)
    answer5 = db.Column(db.Integer, nullable=False)
    idCandidate = db.Column(db.Integer, db.ForeignKey('candidate.id'))
    candidate = db.relationship("Candidate", back_populates="test2")

    def __init__(self, answer1, answer2, answer3, answer4, answer5, idCandidate):
        self.answer1 = answer1
        self.answer2 = answer2
        self.answer3 = answer3
        self.answer4 = answer4
        self.answer5 = answer5
        self.idCandidate = idCandidate

class Test3(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer1 = db.Column(db.Integer, nullable=False)
    answer2 = db.Column(db.Integer, nullable=False)
    answer3 = db.Column(db.Integer, nullable=False)
    answer4 = db.Column(db.Integer, nullable=False)
    answer5 = db.Column(db.Integer, nullable=False)
    answer6 = db.Column(db.Integer, nullable=False)
    idCandidate = db.Column(db.Integer, db.ForeignKey('candidate.id'))
    candidate = db.relationship("Candidate", back_populates="test3")

    def __init__(self, answer1, answer2, answer3, answer4, answer5, answer6, idCandidate):
        self.answer1 = answer1
        self.answer2 = answer2
        self.answer3 = answer3
        self.answer4 = answer4
        self.answer5 = answer5
        self.answer6 = answer6
        self.idCandidate = idCandidate

# SCHEMAS
class AdministratorSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model =  Administrator
        include_fk = True

class CandidateSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model =  Candidate
        include_fk = True

class Test1Schema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model =  Test1
        include_fk = True

class Test2Schema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model =  Test2
        include_fk = True

class Test3Schema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model =  Test3
        include_fk = True

# ROUTES
@app.route("/administrator")
def index_administrator():
    administradores = Administrator.query.all()
    administrador_schema = AdministratorSchema(many=True)
    output = administrador_schema.dump(administradores)
    return jsonify({"datos": output})

@app.route("/candidate")
def index_candidate():
    candidates = Candidate.query.all()
    candidate_schema = CandidateSchema(many=True)
    output = candidate_schema.dump(candidates)
    return jsonify({"datos": output})

@app.route("/test1")
def index_test1():
    tests1 = Test1.query.all()
    test1_schema = Test1Schema(many=True)
    output = test1_schema.dump(tests1)
    return jsonify({"datos": output})

@app.route("/test2")
def index_test2():
    tests2 = Test2.query.all()
    test2_schema = Test2Schema(many=True)
    output = test2_schema.dump(tests2)
    return jsonify({"datos": output})

@app.route("/test3")
def index_test3():
    tests3 = Test3.query.all()
    test3_schema = Test3Schema(many=True)
    output = test3_schema.dump(tests3)
    return jsonify({"datos": output})

@app.route("/api/auth/login", methods=["GET", "POST"])
def index_login():
    if request.method == "POST": 
        email = request.json["email"]
        password = request.json["password"]

        #Revisar si el candidate existe
        try:
            raw_email = db.session.execute("SELECT email FROM candidate WHERE email = '" + email + "'").fetchall()
            raw_email = raw_email[0][0]
            if raw_email == email:
                raw_password = db.session.execute("SELECT passwordHash FROM candidate WHERE passwordHash = '" + password + "'").fetchall()
                raw_password = raw_password[0][0]
                if raw_password == password:
                    id = db.session.execute("SELECT id FROM candidate WHERE email = '" + raw_email + "'").fetchall()
                    id = id[0][0]
                    fname = db.session.execute("SELECT fname FROM candidate WHERE email = '" + raw_email + "'").fetchall()
                    fname = fname[0][0]
                    lname = db.session.execute("SELECT lname FROM candidate WHERE email = '" + raw_email + "'").fetchall()
                    lname = lname[0][0]
                    phone_number = db.session.execute("SELECT phoneNumber FROM candidate WHERE email = '" + raw_email + "'").fetchall()
                    phone_number = phone_number[0][0]
                    birthday = db.session.execute("SELECT age FROM candidate WHERE email = '" + raw_email + "'").fetchall()
                    birthday = birthday[0][0]
                    return jsonify({
                        "id": id,
                        "fname": fname, 
                        "lname": lname,
                        "email": email,
                        "cellphone": phone_number,
                        "birthday": birthday,
                        "admin": False
                    })
                return "Error", 204
            return "Error", 204
        
        # Revisar si el administrador existe    
        except IndexError:
            try:
                raw_email = db.session.execute("SELECT email FROM administrator WHERE email = '" + email + "'").fetchall()
                raw_email = raw_email[0][0]
                if raw_email == email:
                    raw_password = db.session.execute("SELECT passwordHash FROM administrator WHERE passwordHash = '" + password + "'").fetchall()
                    raw_password = raw_password[0][0]
                    if raw_password == password:
                        id = db.session.execute("SELECT id FROM administrator WHERE email = '" + raw_email + "'").fetchall()
                        id = id[0][0]
                        fname = db.session.execute("SELECT fname FROM administrator WHERE email = '" + raw_email + "'").fetchall()
                        fname = fname[0][0]
                        lname = db.session.execute("SELECT lname FROM administrator WHERE email = '" + raw_email + "'").fetchall()
                        lname = lname[0][0]
                        phone_number = db.session.execute("SELECT phoneNumber FROM administrator WHERE email = '" + raw_email + "'").fetchall()
                        phone_number = phone_number[0][0]
                        birthday = db.session.execute("SELECT age FROM administrator WHERE email = '" + raw_email + "'").fetchall()
                        birthday = birthday[0][0]
                        return jsonify({
                            "id": id,
                            "fname": fname, 
                            "lname": lname,
                            "email": email,
                            "cellphone": phone_number,
                            "birthday": birthday,
                            "admin": True
                        })
                    return "Error", 204
                return "Error", 204
            except IndexError:
                return jsonify({"Message": "Invalid Credentials"}), 401



@app.route("/api/route/signup", methods=["POST"])
def index_signup():
    try: 
        f_name = request.json["f_name"]
        l_name = request.json["l_name"]
        email = request.json["email"]
        phone = request.json["phone"]
        password = request.json["password"]
        # YYYY-MM-DD
        birthday = request.json["birthday"]

        ids = db.session.execute("SELECT id FROM candidate").fetchall()

        max_id = 0

        for i in range(len(ids)):
            if ids[i][0] > max_id:
                max_id = ids[i][0]

        candidate = Candidate(
            id = max_id+1,
            fname = f_name,
            lname = l_name,
            age = birthday,
            email = email,
            phoneNumber = phone,
            passwordHash = password,
            idAdministrator= 1
        )

        db.session.add(candidate)
        db.session.commit()

        return "Exito", 201
    except:
        return jsonify({"Message": "Error"}), 400

@app.route("/api/get/candidate", methods=["POST"])
def index_canidate_sing():
    try:
        id_candidate = request.json["id"]

        id_candidate = db.session.execute("SELECT id FROM candidate WHERE id = " + str(id_candidate) + "").fetchall()

        if len(id_candidate) == 0:
            return jsonify({"Message": "Error"}), 400
        
        id_candidate = str(id_candidate[0][0])

        fname = db.session.execute("SELECT fname FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
        fname = fname[0][0]
        lname = db.session.execute("SELECT lname FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
        lname = lname[0][0]
        phone_number = db.session.execute("SELECT phoneNumber FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
        phone_number = phone_number[0][0]
        # birthday formateado
        birthday = db.session.execute("SELECT age FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
        birthday_day = str(birthday[0][0].day)
        if int(birthday_day) <= 9:
            birthday_day = "0" + str(birthday_day)
        birthday_month = str(birthday[0][0].month)
        if int(birthday_month) <= 9:
            birthday_month = "0" + str(birthday_month)
        birthday = birthday_day + "/" + birthday_month + "/" + str(birthday[0][0].year)
        password = db.session.execute("SELECT passwordHash FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
        password = password[0][0]
        id_admin = db.session.execute("SELECT idAdministrator FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
        id_admin = id_admin[0][0]

        return jsonify({
            "id": id_candidate,
            "fname": fname,
            "lname": lname, 
            "phone": phone_number,
            "birthday": birthday,
            "password": password,
            "admin": False,
            "idAdmin": id_admin
        }), 201
    except:
        return jsonify({"Message": "Error"}), 400

@app.route("/api/get/administrator", methods=["POST"])
def index_administrator_sing():
    try:
        id_administrator = request.json["id"]

        id_administrator = db.session.execute("SELECT id FROM administrator WHERE id = " + str(id_administrator) + "").fetchall()

        if len(id_administrator) == 0:
            return jsonify({"Message": "Error"}), 400
        
        id_administrator = str(id_administrator[0][0])

        fname = db.session.execute("SELECT fname FROM administrator WHERE id = '" + id_administrator + "'").fetchall()
        fname = fname[0][0]
        lname = db.session.execute("SELECT lname FROM administrator WHERE id = '" + id_administrator + "'").fetchall()
        lname = lname[0][0]
        phone_number = db.session.execute("SELECT phoneNumber FROM administrator WHERE id = '" + id_administrator + "'").fetchall()
        phone_number = phone_number[0][0]
        # Birthday formateado
        birthday = db.session.execute("SELECT age FROM administrator WHERE id = '" + id_administrator + "'").fetchall()
        birthday_day = str(birthday[0][0].day)
        if int(birthday_day) <= 9:
            birthday_day = "0" + str(birthday_day)
        birthday_month = str(birthday[0][0].month)
        if int(birthday_month) <= 9:
            birthday_month = "0" + str(birthday_month)
        birthday = birthday_day + "/" + birthday_month + "/" + str(birthday[0][0].year)
        password = db.session.execute("SELECT passwordHash FROM administrator WHERE id = '" + id_administrator + "'").fetchall()
        password = password[0][0]

        return jsonify({
            "id": id_administrator,
            "fname": fname,
            "lname": lname, 
            "phone": phone_number,
            "birthday": birthday,
            "password": password,
            "admin": True
        }), 201
    except:
        return jsonify({"Message": "Error"}), 400

@app.route("/api/get/results", methods=["POST"])
def index_results():
    id_candidate = request.json["id"]
    id_candidate = db.session.execute("SELECT id FROM candidate WHERE id = " + str(id_candidate) + "").fetchall()

    if len(id_candidate) == 0:
        return jsonify({"Message": "Error"}), 400
    
    id_candidate = str(id_candidate[0][0])

    test1 = db.session.execute("SELECT ((SUM(test1.answer1 + test1.answer2 + test1.answer3 + test1.answer4 + test1.answer5 + test1.answer6)*100)/6) As ResultadoTest1 FROM candidate JOIN test1 ON candidate.id = test1.idCandidate WHERE candidate.id = " + id_candidate + "").fetchall()
    try:
        test1 = round(float(test1[0][0]),2)
    except TypeError:
        test1 = None

    test2 = db.session.execute("SELECT ((SUM(test2.answer2 + test2.answer2 + test2.answer3 + test2.answer4 + test2.answer5)*100)/5) As ResultadoTest2 FROM candidate JOIN test2 ON candidate.id = test2.idCandidate WHERE candidate.id = " + id_candidate + "").fetchall()
    try:
        test2 = round(float(test2[0][0]), 2)
    except TypeError:
        test2 = None

    test3 = db.session.execute("SELECT ((SUM(test3.answer3 + test3.answer2 + test3.answer3 + test3.answer4 + test3.answer5 + test3.answer6)*100)/6) As ResultadoTest3 FROM candidate JOIN test3 ON candidate.id = test3.idCandidate WHERE candidate.id = " + id_candidate + "").fetchall()
    try:
        test3 = round(float(test3[0][0]), 2)
    except TypeError:
        test3 = None

    fname = db.session.execute("SELECT fname FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
    fname = fname[0][0]
    lname = db.session.execute("SELECT lname FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
    lname = lname[0][0]
    phone_number = db.session.execute("SELECT phoneNumber FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
    phone_number = phone_number[0][0]
    birthday = db.session.execute("SELECT age FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
    birthday_day = str(birthday[0][0].day)
    if int(birthday_day) <= 9:
        birthday_day = "0" + str(birthday_day)
    birthday_month = str(birthday[0][0].month)
    if int(birthday_month) <= 9:
        birthday_month = "0" + str(birthday_month)
    birthday = birthday_day + "/" + birthday_month + "/" + str(birthday[0][0].year)
    password = db.session.execute("SELECT passwordHash FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
    password = password[0][0]
    id_admin = db.session.execute("SELECT idAdministrator FROM candidate WHERE id = '" + id_candidate + "'").fetchall()
    id_admin = id_admin[0][0]

    return jsonify({
        "id": id_candidate,
        "fname": fname,
        "lname": lname, 
        "phone": phone_number,
        "birthday": birthday,
        "password": password,
        "admin": False,
        "idAdmin": id_admin,
        "test1": test1,
        "test2": test2,
        "test3": test3
    })

    
@app.route("/api/game/scores", methods=["POST"])
def index_score():
    try:
        answer1 = request.json["answer1"]
        answer2 = request.json["answer2"]
        answer3 = request.json["answer3"]
        answer4 = request.json["answer4"]
        answer5 = request.json["answer5"]
        id_candidate = request.json["id_candidate"]
        
        result_test2 = Test2(
            answer1 = answer1,
            answer2 = answer2,
            answer3 = answer3,
            answer4 = answer4,
            answer5 = answer5,
            idCandidate = id_candidate
        )

        db.session.add(result_test2)
        db.session.commit()

        return "Exito", 201
    except:
        return jsonify({"Message": "Error"}), 400

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))