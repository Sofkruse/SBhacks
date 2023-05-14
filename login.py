# login function connected to the sql db mydatabase
import hashlib
import sqlite3


def login(username, email, password):
    authenticate = password.encode()
    auth_hash = hashlib.md5(authenticate).hexdigest()

    # Connect to database
    conn = sqlite3.connect('mydatabase.db')
    c = conn.cursor()

    # Select user with matching email, password, and username
    c.execute("SELECT * FROM logins WHERE email=? AND password=? AND username=?", (email, auth_hash, username))
    user = c.fetchone()

    # Close database connection
    conn.close()

    if user:
        print("Welcome")
        
    else:
        print("Wrong password, username, or email")

if __name__ == "__main__":
    username = input("Enter username: ")
    email = input("Enter email: ")
    password = input("Enter password: ")
    login(username, email, password)