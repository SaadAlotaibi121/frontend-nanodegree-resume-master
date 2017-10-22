var bio = {
    "name": "Saad",
    "role": "Applaction Developer",
    "contacts": {
        "mobile": 0508090266,
        "email": "saad-alotaibi@outlook.com",
        "github": "github",
        "twitter": "s3d",
        "blog": "SaadBlo",
        "location": "Shaqraa"
    },
    "WelcomeMessage": "Hello, and welocme to my resume I hope you like what you see ",
    "skills": [
        "Programing", "Web Development", ".NET"
    ],
    "bioPic": "./images/fry.jpg"
};


var education = {
    "schools": [{
            "univercity": "MMU",
            "location": "Manchester",
            "city": "Manchester",
            "degree": "BA",
            "majors": ["CS"],
            "dates": 2016,
            "url": "http://www2.mmu.ac.uk/"

        },
        {
            "univercity": "TVTC",
            "location": "Buraydah",
            "city": "Buraydah",
            "degree": "assosited degree",
            "majors": ["Programming"],
            "dates": 2012,
            "url": "http://www.tvtc.gov.sa/Arabic/TrainingUnits/CollegesOfTechnology/bct/Pages/default.aspx"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Order ME",
            "title": "Applcation Developer",
            "dates": "2017",
            "descrition": "Front end Developer",
            "location": "Riyadh"
        },
        {
            "employer": "Saudi commission for tourism and antiquities",
            "title": "Co-operative training",
            "dates": "2011",
            "descrition": "I worked in Saudi commission for tourism and antiquities 2011 for three months; the task was to analyse hotels data and create a system that holds all the details of hotels in Buraydah. I started by analysing hotel data then design and implement a database that manages hotel information for the organisation. I successfully designed the desired database using Microsoft Access. I met deadlines and requirements for all production work orders my grad was A*",
            "location": "Buraydah"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Letting managment System",
            "dates": "2016",
            "descrition": "Final year prject"
        }
    ]
};




var formattedName = HTMLheaderName.replace("%data%", "Saad Alotaibi");
var formattedRole = HTMLheaderRole.replace("%data%", "Applcation Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//contact
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.SaadBlo);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelocmeMes = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelocmeMes);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedBlog);
$("#topContacts").prepend(formattedgithub);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#mapDiv").append(googleMap);


bio.display= function(){
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills:last").append(formattedSkills);
    }
}
};

work.display = function() {
  for (var i = 0; i < work.jobs.length;  i++) {
      $("#workExperience").append(HTMLworkStart);
    var formattedEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle =  HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
    var formatedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
      $(".work-entry:last").append(formatedDates);
    var formatedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
      $(".work-entry:last").append(formatedLocation);
    var formatedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].descrition);
    $(".work-entry:last").append(formatedDescription);
  }
};

education.display = function() {
  for (var i = 0; i < education.schools.length; i++){
    $("#education").append(HTMLschoolStart);
    var formatedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].univercity);
      $(".education-entry:last").append(formatedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
      $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
      $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].city);
      $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);
      $(".education-entry:last").append(formattedSchoolMajor);

}
  }


projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTiltle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").prepend(formattedTiltle);
        var formatttedDescrition = HTMLprojectDescription.replace("%data%", projects.projects[i].descrition);
        $(".project-entry:last").prepend(formatttedDescrition);
        var formatttedDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").prepend(formatttedDate);
    }
};


function inName(name) {
  var   name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);

// this function tells you  where the user clicked
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});



//calling display functions

bio.display();
work.display();
projects.display();
education.display();
