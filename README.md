With this SBA, I tried to implement databases for the 3 collections:admins, students and tutors for Masterful Learning Center. 

Collections and Routes
//
Students (/students)
//
Method	Route	Description
//
GET	/students 	Get all students
//
POST	/students	Create a new student
//
GET	/students/:id	Get students by ID
//
PUT	/students/:id	Update students by ID
//
DELETE	/students/:id	Delete students by ID
//
 
Admins (/admins)
//
Method	Route	Description
//
GET	/admins	Get all admins
//
POST	/admins	Create a new admins
//
GET	/admins/:id	Get admins by ID
//
PATCH	/admins/:id	Update admins by ID
//
DELETE	/admins/:id	Delete admins by ID
//

Get and Post route: This route will create students, admins or tutors based on the respective endpoint you choose. 
//
students: "./students" 
//
admins: "./admins"
//
tutors: "./tutors"s
//
Put and delete route: This route will update and delete the records for either of the 3 collections from the respective endpoint you choose. 
//
students: "/students/:id" 
//
admins: "./admins/:id"
//
tutors: "./tutors/:id"
//