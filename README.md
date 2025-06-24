For this SBA, I'm trying to implement a database for Masterful Learning Center with tutor, admins and student information. 


Get and Post route: This route will create students, admins or tutors based on the respective endpoint you choose. 
students: "./students" 
admins: "./admins"
tutors: "./tutors"s

Put and delete route: This route will update and delete the records for either of the 3 collections from the respective endpoint you choose. 
students: "/students/:id" 
admins: "./admins/:id"
tutors: "./tutors/:id"