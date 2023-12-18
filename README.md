## A node express project to implement your first middleware
- git clone and npm install your project.
- setup your .env duplicating the .env.sample
- Import the database via the script in the config folder (use workbench data import) : ddl => create tables structures, dml => insert data

## Presentation
At this step, we have a two routes that retrieve a list of user and retrieve a user by id. The goal is, from this information, to post (/users/:id) with the correct role (ADMIN, USER) in the body with the other information email, password. Email should be structured like a email (hint: use regex to validate the format of the email) and password should have a minimum of 8 caracters and contains lowercase/uppercase/numeric (bonus check special caracters too)

## Step by step

- 0/ In your server configuration : use express.json() middleware to parse request body

- 1/ Create a post route ('/users')

- 2/ In your controller, before sending the response, add a check if the body contains a key role. If yes, return the full information, else return a 400 with a message : "should contains a role"

- 3/ Now check if the role is correct (two possible value : "USER" or "ADMIN"), if true, send the information, if not, add a return with incorrect role, try again. Don't forget to standardize the user input with an uppercase.

- 4/ Your code is growing with cascading conditions...So bad!!! In that case, we should use a middlware to clean it. Take the first role condition in your controller and isolate it in a middleware function

    - a/ reminder, a middleware function take three params (req, res, next)
    - b/ check if the body contain a role key, if false send a response with 400 status code and corresponding message
    - c/ check if the body contain a email key and validate the format with a regex, if false send a response with 400 status code and corresponding message
    - d/ check if the body contain a password key and that the password format is valid (check the rule above), if false send a response with 400 status code and corresponding message
    - e/ If all the checks pass call the next method to pass the execution to the controller
    - f/ insert your middleware before your controller function in your route

- 5/ Now in your controller call a method "getOneByEmail" from your model to check that no users already exist in the database for the specified email and send a 400 status error code in case that already exist

- 6/ In your controller, after all the check pass call a "insertOne" method from your model to create the new ressources users.

- BONUS : add a errorHandler middleware ;) 
