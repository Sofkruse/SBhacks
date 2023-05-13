#kariofofungicsql
import smtplib
import ssl
from email.message import EmailMessage
import random

# Define the sender, receiver, and validation email details
sender_email = "iv.college.housing@gmail.com"
receiver_email = "sofiakruserobertson@ucsb.edu"
validation_subject = "Email validation"
validation_code = random.randint(100000, 999999) # Generate a random 6-digit validation code
validation_body = f"This is a validation email. Your validation code is: {validation_code}. Please enter this code to confirm your email address."

# Create the email message object and set the sender and receiver addresses
msg = EmailMessage()
msg.set_content(validation_body)
msg['Subject'] = validation_subject
msg['From'] = sender_email
msg['To'] = receiver_email

# Create a connection to the email server and enable SSL encryption
context = ssl.create_default_context()
context.check_hostname = False
context.verify_mode = ssl.CERT_NONE
with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
    # Log in to the email server with your email account credentials
    server.login(sender_email, "kariofofungicsql")
    
    # Send the validation email message
    server.send_message(msg)
    
    # Prompt the user to enter the validation code
    user_input = input("Please enter the 6-digit validation code that was sent to your email: ")
    
    # Check if the validation code entered by the user matches the generated code
    if int(user_input) == validation_code:
        print("Email validation successful!")
    else:
        print("Email validation failed.")
    
    # Close the connection to the email server
    server.quit()
