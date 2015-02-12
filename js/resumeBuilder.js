/*
work contains an array of jobs. Each job object in jobs should contain an
employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects
should contain a title, dates worked, description, and an images array
with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array.
The contacts object should contain (but doesn"t have to) a mobile number,
email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains
a name, location, degree, majors array, dates attended and a url for the school"s
website. education also contains an onlineCourses array. Each onlineCourse
object in onlineCourses should contain a title, school, dates attended and a
url for the course

*/
Array.prototype.each = function(callback) {
  for (var i = 0; i < this.length; i++)
    callback(this[i]);
}


var projects = {
    "projects" :    [
            {
                "title" : "Personal Blog",
                "datesWorked" : "6/2014-7/2014",
                "description" : "Built with Google App Engine and Python: http://skillful-elf-757.appspot.com/",
                "images" : "images/blog.png"
            },
            {
                "title" : "Pantomics",
                "datesWorked" : "1/2015-Present",
                "description" : "Built with Google App Engine and Python",
                "images" : "images/pantomics.png"
            },
            {
                "title" : "Ask a Fighter",
                "datesWorked" : "2011",
                "description" : "Video Blogging the LA Fight Scene: www.youtube.com/yiplandar",
                "images" : "images/askafighter.png"
            }
        ]
};

var bio = {
    "name" : "Yilen Pan",
    "role" : "Front-End/Full-Stack wannabe",
    "skills" : ["Ruby", "Javascript",
                "HTML", "Python", "Ruby on Rails",
                "Twitter Bootstrap"],
    "contact" : {
        "email" : "Yilen.Pan@gmail.com",
        "phone" : "510-207-9833",
        "github" : "yilenpan",
        "twitter" : "@YiPz",
        "location" : "Oakland, CA, USA"
        },
    "biopic" : "images/fry.jpg",
    "welcomeMessage" : "Welcome to my resume!"
};

var work = {
    "jobs" : [
        {
            "employer" : "Pantomics",
            "title" : "Marketing Consultant",
            "location" : "Richmond, CA, USA",
            "dates" : "Jan 2015 - Present",
            "description" : "Marketing strategist for a leading Tissue Array company"
        },
        {
            "employer" : "Juren Motion Pictures",
            "title" : "Staff Writer",
            "location" : "Beijing, China",
            "dates" : "May 2014 - Jan 2015",
            "description" : "Headed screenwriting team for a Junren Motion Pictures, resulting in eight short films and a feature length screenplay"
        },
        {
            "employer" : "Lyft",
            "title" : "Driver",
            "location" : "Los Angeles, CA, USA",
            "dates" : "June 2013 - April 2014",
            "description" : "Driver for popular Lyft ride-sharing service"
        },
        {
            "employer" : "Paul Pompian Productions",
            "title" : "Assistant to Producer",
            "location" : "Los Angeles, CA, USA",
            "dates" : "Mar 2010 - Aug 2011",
            "description" : "Assistant to the Producer"
        },
        {
            "employer" : "Valhalla Motion Pictures",
            "title" : "Intern",
            "location" : "Los Angeles, CA, USA",
            "dates" : "Oct 2009 - Mar 2010",
            "description" : "Development Intern / Receptionist for The Walking Dead"
        }
    ]
};


var education = {
    "schools" : [
        {
            "name" : "American Film Institute",
            "location" : "Los Angeles, CA, USA",
            "major" : "Screenwriting Fellow",
            "degree" : "MFA",
            "minor" : "",
            "years" : "2011-2013"
         },
         {
            "name" : "UC Riverside",
            "location" : "Riverside, CA, USA",
            "major" : "Creative Writing",
            "minor" : "Film and Media",
            "degree" : "BA",
            "years" : "2005-2009"
         }
        ],
    "onlineCourses" : [
         {
            "title" : "Front-End Nanodegree",
            "school" : "Udacity",
            "location" : "San Francisco, CA, USA",
            "date" : "2015",
            "url" : "www.udacity.com"
         }
    ]
};

bio.display = function(){
    var formatName = HTMLheaderName.replace("%data%", this.name);
    var formatRole = HTMLheaderRole.replace("%data%", this.role);
    var formatImage = HTMLbioPic.replace("%data%", this.biopic);
    var formatMessage = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
    $('#header').prepend(formatName + formatRole);
    $('#header').append(formatImage);
    $('#header').append(formatMessage);
    var contacts = [];
    for (var key in this.contact) {
          if (this.contact.hasOwnProperty(key)) {
            var c = HTMLcontactGeneric.replace("%contact%", key);
            c = c.replace("%data%", this.contact[key]);
            contacts.push(c);
          }
    }
    contacts.each(function(contact){
        $("#topContacts").append(contact);
        $('#footerContacts').append(contact);
    });

    if (this.skills){
        $("#header").append(HTMLskillsStart);
        this.skills.each(function(x){
            var HTMLskillsPost = HTMLskills.replace("%data%", x);
            $("#skills:last").append(HTMLskillsPost);
        });
    }
};

education.display = function(){
    this.schools.each(function(school){
        $("#education").append(HTMLschoolStart);
        var formatSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formatSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formatSNameSDegree = formatSchoolName + formatSchoolDegree;
        var formatSchoolDates = HTMLschoolDates.replace("%data%", school.years);
        var formatSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formatSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        $('.education-entry:last').append(formatSNameSDegree);
        $('.education-entry:last').append(formatSchoolDates);
        $('.education-entry:last').append(formatSchoolLocation);
        $('.education-entry:last').append(formatSchoolMajor);
    });
    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.each(function(course){
        $("#education").append(HTMLschoolStart);
        var formatOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formatOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formatOnlineDates = HTMLonlineDates.replace("%data%", course.date);
        var formatOnlineUrl = HTMLonlineURL.replace("%data%", course.url)
        $('.education-entry:last').append(formatOnlineTitle+formatOnlineSchool);
        $('.education-entry:last').append(formatOnlineDates);
        $('.education-entry:last').append(formatOnlineUrl);

    });
};

work.display = function(){
    this.jobs.each(function(job){
        $("#workExperience").append(HTMLworkStart);
        var formatEmp = HTMLworkEmployer.replace("%data%",job.employer);
        var formatTitle = HTMLworkTitle.replace("%data%", job.title);
        var formatEmpTitle = formatEmp + formatTitle;
        var formatDates = HTMLworkDates.replace("%data%", job.dates);
        var formatDescription = HTMLworkDescription.replace("%data%", job.description);
        var formatLocation = HTMLworkLocation.replace("%data%", job.location)
        $(".work-entry:last").append(formatEmpTitle);
        $(".work-entry:last").append(formatDates);
        $(".work-entry:last").append(formatLocation);
        $(".work-entry:last").append(formatDescription);
    });
};

projects.display = function(){
    this.projects.each(function(project){
        $("#projects").append(HTMLprojectStart);
        var formatTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formatDates = HTMLprojectDates.replace("%data%", project.datesWorked);
        var formatDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formatImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(formatTitle);
        $(".project-entry:last").append(formatDates);
        $(".project-entry:last").append(formatDescription);
        $(".project-entry:last").append(formatImage);
    });
};

bio.display();
education.display();
projects.display();
if (work.jobs){
    work.display();
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);









