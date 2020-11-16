# Anywhere Fitness

## Table of contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>

## <a name="overview"></a>Overview

AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs.
AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness
classes wherever they might be held.

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
| Add class POST       | /api/auth/instructor/classes     | name, instructor_name, type, intensity,location, date, max_size, duration, signedUp | N/A             | Creates a new class object in the database. Date has to string in "04/19/2020" format. Duration is a float and signedUp is a boolean(false as a default) |
| Update Class PUT     | /api/auth/instructor/classes/:id | any of the field                                                                    | N/A             | Updates the class with given Id                                                                                                                          |
| Removes Class DELETE | /api/auth/instructor/classes/:id | any of the field                                                                    | N/A             | Deletes the class with given Id                                                                                                                          |

### **_Endpoints for the Users_**

| Method                        | Endpoint                           | Body (required) | Body (optional) | Notes                                                            |
| ----------------------------- | ---------------------------------- | --------------- | --------------- | ---------------------------------------------------------------- |
| get classes GET               | /api/auth/users/classes            | N/A             | N/A             | Fetches all the classes from the database                        |
| get classes by Id GET         | /api/auth/users/classes/:id        | id              | N/A             | Fetches the class with given Id.                                 |
| get classes by Location GET   | /api/auth/users/classes/location   | location        | N/A             | Gets all the class in that location                              |
| get classes by intensity GET  | /api/auth/users/classes/intensity  | intensity       | N/A             | Gets all the class in that intensity. "low", "medium", or "high" |
| get classes by duration GET   | /api/auth/users/classes/duration   | duration        | N/A             | Gets all the class of that duration. Has to be double.           |
| get classes by type GET       | /api/auth/users/classes/type       | type            | N/A             | Gets all the class of that type.                                 |
| get classes by instructor GET | /api/auth/users/classes/instructor | instructor_name | N/A             | Gets all the class by that instructor.                           |
