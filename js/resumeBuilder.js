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



var name = "Yilen Pan";
var role = "Front end newbie";
var skills = ["Ruby",  
              "Javascript",
              "HTML", "Python", "Ruby on Rails",
              "Twitter Bootstrap"];

var projects = {
	"projects" :	[
			{
				"title" : "Personal Blog",
				"datesWorked" : "6/2014-7/2014",
				"description" : "Built with Google App Engine and Python: http://skillful-elf-757.appspot.com/",
				"projectImages" : "images/blog.png"
			},
			{
				"title" : "Pantomics",
				"datesWorked" : "1/2015-Present",
				"description" : "Built with Google App Engine and Python",
				"projectImages" : "images/pantomics.png"
			},
			{
				"title" : "Ask a Fighter",
				"datesWorked" : "2011",
				"description" : "Video Blogging the LA Fight Scene: www.youtube.com/yiplandar",
				"projectImages" : "images/askafighter.png"
			}
		]
};

var bio = {
    "name" : name,
    "role" : role,
    "skills" : skills,
    "contact" : {
        "email" : "Yilen.Pan@gmail.com",
        "phone" : "510-207-9833",
        "github" : "yilenpan",
        "twitter" : "@YiPz",
        "location" : "Oakland, CA"
        },
    "picture" : "images/fry.jpg",
    "welcomeMessage" : "Welcome to my resume!"
};

bio.display = function(){
	formatName = HTMLheaderName.replace("%data%", this.name);
	formatRole = HTMLheaderRole.replace("%data%", this.role);
	formatImage = HTMLbioPic.replace("%data%", this.picture);
	formatMessage = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
	$('#header').prepend(formatName + formatRole);
	$('#header').append(formatImage);
	$('#header').append(formatMessage);
	contacts = [];
	for (var key in this.contact) {
  		if (this.contact.hasOwnProperty(key)) {
    		var c = HTMLcontactGeneric.replace("%contact%", key);
    		c = c.replace("%data%", this.contact[key]);
    		contacts.push(c);
  		}
	}
	contacts.each(function(contact){
		$("#topContacts").append(contact);
	});

	if (this.skills){
		$("#header").append(HTMLskillsStart);
		this.skills.each(function(x){
			HTMLskillsPost = HTMLskills.replace("%data%", x);
			$("#skills").append(HTMLskillsPost);
		});
	}
};
bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "Pantomics",
			"title" : "Marketing Consultant",
			"location" : "Richmond, CA",
			"dates" : "Jan 2015 - Present",
			"description" : "Marketing strategist for a leading Tissue Array company" 
		},
		{
			"employer" : "Juren Motion Pictures",
			"title" : "Staff Writer",
			"location" : "Beijing, China",
			"dates" : "May 2014 - Jan 2015",
			"description" : "Headed screenwriting team for a Chinese Film/TV production company, resulting in eight short films and a feature length screenplay" 
		},
		{
			"employer" : "Lyft",
			"title" : "Driver",
			"location" : "Los Angeles, CA",
			"dates" : "June 2013 - April 2014",
			"description" : "Driver for popular Lyft ride-sharing service" 
		},
		{
			"employer" : "Paul Pompian Productions",
			"title" : "Assistant to Producer",
			"location" : "Los Angeles, CA",
			"dates" : "Mar 2010 - Aug 2011",
			"description" : "Assistant to the Producer" 
		},
		{
			"employer" : "Valhalla Motion Pictures",
			"title" : "Intern",
			"location" : "Los Angeles, CA",
			"dates" : "Oct 2009 - Mar 2010",
			"description" : "Development Intern / Receptionist for The Walking Dead" 
		}
	]
};


var education = {
    "schools" : [
        { 
            "name" : "American Film Institute",
            "city" : "Los Angeles, CA",
            "major" : "Screenwriting Fellow",
            "degree" : "MFA",
            "minor" : "",
            "years" : "2011-2013"
         },
         {
            "name" : "UC Riverside",
            "city" : "Riverside, CA",
            "major" : "Creative Writing",
            "minor" : "Film and Media",
            "degree" : "BA",
            "years" : "2005-2009"
         },
         {
            "name" : "Udacity",
            "city" : "San Francisco",
            "major" : "Front-End Nanodegree",
            "degree" : "Nanodegree",
            "minor" : "",
            "years" : "2015"
         }
    	]
};

education.display = function(){
	this.schools.each(function(school){
		$("#education").append(HTMLschoolStart);
		formatSchoolName = HTMLschoolName.replace("%data%", school.name);
		formatSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		formatSNameSDegree = formatSchoolName + formatSchoolDegree;
		formatSchoolDates = HTMLschoolDates.replace("%data%", school.years);
		formatSchoolLocation = HTMLschoolLocation.replace("%data%", school.city);
		formatSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
		$('.education-entry:last').append(formatSNameSDegree);
		$('.education-entry:last').append(formatSchoolDates);
		$('.education-entry:last').append(formatSchoolLocation);
		$('.education-entry:last').append(formatSchoolMajor);
	});
};
education.display();

work.display = function(){
	this.jobs.each(function(job){
		$("#workExperience").append(HTMLworkStart);
		formatEmp = HTMLworkEmployer.replace("%data%",job.employer);
		formatTitle = HTMLworkTitle.replace("%data%", job.title);
		formatEmpTitle = formatEmp + formatTitle;
		formatDates = HTMLworkDates.replace("%data%", job.dates);
		formatDescription = HTMLworkDescription.replace("%data%", job.description);
		formatLocation = HTMLworkLocation.replace("%data%", job.location)
		$(".work-entry:last").append(formatEmpTitle);
		$(".work-entry:last").append(formatDates);
		//$(".work-entry:last").append(formatLocation);
		$(".work-entry:last").append(formatDescription);
	});
};	
if (work.jobs){
	work.display();
}

projects.display = function(){
	this.projects.each(function(project){
		$("#projects").append(HTMLprojectStart);
		formatTitle = HTMLprojectTitle.replace("%data%", project.title);
		formatDates = HTMLprojectDates.replace("%data%", project.datesWorked);
		formatDescription = HTMLprojectDescription.replace("%data%", project.description);
		formatImage = HTMLprojectImage.replace("%data%", project.projectImages);
		$(".project-entry:last").append(formatTitle);
		$(".project-entry:last").append(formatDates);
		$(".project-entry:last").append(formatDescription);
		$(".project-entry:last").append(formatImage);
	});
};

projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);









