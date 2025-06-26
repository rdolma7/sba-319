With this SBA, I tried to implement databases for the 3 collections:admins, students and tutors for Masterful Learning Center. 
<br>
Collections and Routes
<br>
Students (/students)
<br>Method	Route	Description
<br>GET	/students 	Get all students
<br>POST	/students	Create a new student
<br>GET	/students/:id	Get students by ID
<br>PUT	/students/:id	Update students by ID
<br>DELETE	/students/:id	Delete students by ID
<br> 
Admins (/admins)
<br>Method	Route	Description
<br>GET	/admins	Get all admins
<br>POST	/admins	Create a new admins
<br>GET	/admins/:id	Get admins by ID
<br>PATCH	/admins/:id	Update admins by ID
<br>DELETE	/admins/:id	Delete admins by ID
<br>
Get and Post route: This route will create students, admins or tutors based on the respective endpoint you choose. 
<br>students: "./students" 
<br>admins: "./admins"
<br>tutors: "./tutors"s
<br>Put and delete route: This route will update and delete the records for either of the 3 collections from the respective endpoint you choose. 
<br>students: "/students/:id" 
<br>admins: "./admins/:id"
<br>tutors: "./tutors/:id"
