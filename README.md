# SistemaPQRS_IngSoftwareI

This is the Final Project, Which Create a stable project that meets user expectations, so that we can demonstrate that the project complies with security standards when handling information,.

identifier
Register PQRS

Name
Register PQRS User

Resume
The system must allow the user (Client) to fill out the following information to register their PQRS

Actor
User (Client)
Business process in which you participate


Tickets

Customer information
Identification type LIST STRING (COMBOX)
INT identification number
Full name STRING
E-mail E-MAIL
INT mobile phone
PQRS Information
File number (automatic) INT
Date of filing (automatic) DATE
Filing type - PQRS LISTA STRING (COMBOX)
Comments STRING
Annex (PDF) FILE

Departures
Show Message “PQRS registration successful”
Precondition
The system must allow the user to attach and fill in all the form data


postcondition
Register your PQRS request, and show the PQRS registration form again
assumptions
normal flow of events


actor's action


System response

1
Request registration.
2
The system proceeds to display the registration system
3
Perform registration.
4
The system verifies the correct format of the data and validates if everything is correct
5
Proceed to send the registration
6
When the user files his PQRS:
Validate the existence of the Client in the SuperMarket database, if it does not exist, the system must register it and to confirm the successful registration of the client, the system must send a confirmation email


alternative paths
Validate the existence of the Client in the SuperMarket database, if it does not exist, the system must register it. and to confirm the successful registration of the client, the system must send a confirmation email


exception paths
If the user does not complete the form completely, the system will show that the documentation is missing



Author
Juan Felipe Jimenez Pacheco Juan Pablo Trujillo





![image](https://user-images.githubusercontent.com/72418729/167025060-daaa0553-1cd3-4da2-84f6-949f7b5edb81.png)

![image](https://user-images.githubusercontent.com/72418729/168496836-567ae16a-674d-4d1d-9b89-9dda91ce5daf.png)


![image](https://user-images.githubusercontent.com/72418729/167025122-81643c6f-2b3c-4f3a-8a6f-1e74b5d05d6d.png)


![image](https://user-images.githubusercontent.com/72418729/167025177-157412b8-d542-4064-8b3f-96bb12e42e4f.png)


!![image](https://user-images.githubusercontent.com/72418729/168496819-b2ec72db-d8b8-475a-8a86-fbfa1c21235f.png)





https://stackoverflow.com/questions/53935163/how-can-i-send-one-alert-from-my-node-js-to-my-javascript-client



