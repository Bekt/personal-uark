var app = angular.module('app', ['ngSanitize']);

app.controller('MainCtrl', function ($scope) {
  // Order: about, experience, coursework
  $scope.views = [true, false, false];

  var job = function(company, company_url, title, team, duration, location) {
    return {
      'company': company,
      'company_url': company_url,
      'title': title,
      'team': team,
      'duration': duration,
      'location': location
    };
  };

  $scope.jobs = [
    job('Google', 'https://www.google.com/', 'Software Engineering Intern',
        'Google Knowledge', 'April - August, 2014', 'Mountain View, CA'),
    job('Amazon Web Services', 'http://aws.amazon.com/', 'SDE Intern',
        'Amazon Silk', 'January - April, 2014', 'Palo Alto, CA'),
    job('Amazon', 'http://www.amazon.com/', 'Software Development Engineer Intern',
        'Amazon Payments', 'May - August, 2013', 'Seattle, WA'),
    job('SOAPware', 'http://www.soapware.com/', 'Software Development Intern',
        'myHEALTHware.com', 'May, 2012 - May, 2013', 'Fayetteville, AR'),
  ];

  $scope.facts = [
    ['Sport', 'Beach Volleyball, Surfing, Snowboarding, Basketball'],
    ['Favorite Languages', 'Python, JavaScript, Java'],
    ['Favorite Editor', 'vim, anything by <a href="https://www.jetbrains.com/products.html">JetBrains</a>'],
    ['Favorite Class', '<a href="http://uaf46365.ddns.uark.edu/dm/">Data Mining</a>'],
    ['Favorite Place', 'San Francisco, CA'],
    ['Who To Follow',
        '<a href="http://www.youtube.com/user/BigBeeDOH">bigbeedoh</a>, ' +
         '<a href="http://instagram.com/blakegriffin32">blakegriffin32</a>, ' +
         '<a href="https://twitter.com/TheOnion">The Onion</a>'],
    ['Favorite Subs',
        '<a href="http://www.reddit.com/r/imgoingtohellforthis">r/imgoingtohellforthis</a>, ' +
         '<a href="http://www.reddit.com/r/showerthoughts">r/showerthoughts</a>, ' +
         '<a href="http://www.reddit.com/r/ProgrammerHumor">r/ProgrammerHumor</a>, ' +
         '<a href="http://www.reddit.com/r/cscareerquestions">r/cscareerquestions</a>'],
    ['Favorite Memes', 'Anti-Joke Chicken, Scumbag Steve'],
  ];

  $scope.courses = [
    [
      'CSCE 2014 Data Structures',
      'CSCE 2004 Programming I',
      'CSCE 2114 Digital Design',
      'CSCE 2574 Multivariable Calculus',
      'MATH 2603 Discrete Math',
      'ENGL 2013 Technical Composition II',
      'CHEM 1103 Chemistry I',
      'SOCI 2013 Sociology',
      'ARHS 1003 Art History',
      'GNEG 1111 Intro to Engr I-II (Honors)',
    ],
    [
      'CSCE 3313 Algorithms',
      'CSCE 3513 Software Engineering',
      'CSCE 3193 Programming Paradigms',
      'CSCE 2214 Computer Organization',
      'MATH 3103 Combinatorics',
      'INEG 2313 Probability and Statistics',
      'PHYS 2054 Physics I (Honors)',
      'PLSC 2003 American Government',
    ],
    [
      'CSCE 5003 Data Mining (graduate)',
      'CSCE 4123 Programming Challenges',
      'CSCE 4513 Database Management',
      'MATH 3083 Linear Algebra',
      'PHIL 3013 Ethics and The Professions',
    ],
    [
      'CSCE 5063 Machine Learning (graduate)',
      'CSCE 4013 Information Retrieval',
      'CSCE 3613 Operating Systems',
      'CSCE 4561 Capstone I',
      'ECON 2143 Basic Economic Theory',
    ],
  ]

  $scope.toggle = function(show_ind) {
    angular.forEach($scope.views, function(value, ind) {
      $scope.views[ind] = ind == show_ind ? true : false;
    });
  };

});
