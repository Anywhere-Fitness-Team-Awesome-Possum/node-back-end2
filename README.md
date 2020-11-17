# Anywhere Fitness

## Table of contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>

## <a name="overview"></a>Overview



## <a name="api-endpoints"></a>API endpoints


### **_Authentication (for login)_**

| Method        | Endpoint           | Body (required)                       | Body (optional) | Notes                                             |
| ------------- | ------------------ | ------------------------------------- | --------------- | ------------------------------------------------- |
| register POST | /api/auth/register | name, email, username, password, role | N/A             | Creates a new user object in the database.        |
| login POST    | /api/auth/login    | username, password                    | N/A             | Returns a welcome message and the JSON Web Token. |

### **_Additional athunetication for Instructor_**

| Method               | Endpoint                         | Body (required)                                                                     | Body (optional) | Notes                                                                                                                                                    |
| -------------------- | -------------------------------- | ----------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Get classas GET       | /api/auth/instructor/classes     | N/A| N/A             | Gets list of classes|
| Add class POST       | /api/auth/instructor/classes     | name, instructor_name, type, intensity,location, date, max_size, duration,  | N/A             | Creates a new class object in the database. Date has to string in "2020-11-17" format. |
| Update Class PUT     | /api/auth/instructor/classes/:id | any of the field                                                                    | N/A             | Updates the class with given Id                                                                                                                          |
| Removes Class DELETE | /api/auth/instructor/classes/:id | any of the field                                                                    | N/A             | Deletes the class with given Id                                                                                                                          |

### **_Endpoints for the Users_**

| Method                        | Endpoint                           | Body (required) | Body (optional) | Notes                                                            |
| ----------------------------- | ---------------------------------- | --------------- | --------------- | ---------------------------------------------------------------- |
| get classes GET               | /api/auth/users/classes            | N/A             | N/A             | Fetches all the classes from the database                        |
| get classes by search GET         | /api/auth/users/classes/:id        | id              | N/A             | Fetches the class with that given search term                                |
