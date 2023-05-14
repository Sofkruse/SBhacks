
import sqlite3

# Connect to database
conn = sqlite3.connect('mydatabase.db')
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE logins
             (email text, password text, username text)''')

conn.commit()
conn.close()


### This code makes the sql database
