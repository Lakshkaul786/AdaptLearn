from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/learn/<disability>')
def learn(disability):
    if disability == 'dyslexia':
        return render_template('dyslexia.html')
    elif disability == 'blind':
        return render_template('blind.html')
    elif disability == 'deaf':
        return render_template('deaf.html')
    else:
        return "Error: Invalid Path"

if __name__ == '__main__':
    app.run(debug=True)
