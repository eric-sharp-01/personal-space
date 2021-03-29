import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { Container } from '@material-ui/core';

const Resume = (props) => {
  let contactElements = resume.contact.map((elem, index) => {
    return <Box className='contact-detail'>
      {elem.name}: {elem.value}
    </Box>;
  })

  let summaryElements = resume.summary.map((elem, index) => {
    return <Box className="summary-detail">
      {elem}
    </Box>;
  })

  let skillElements = resume.skills.map((elem, index) => {
    let level = [];
    for (let i = 0; i < 5; i++) {
      let styleClass = i < elem.level ? "" : "hidden-star";
      level.push(<StarIcon key={i} className={styleClass} />);
    }
    let levelElem = <span>
      {level}
    </span>;
    return (
      <Box display="flex" flexBasis="50%" justifyContent="space-between">
        <Typography>{elem.name}</Typography>
        <Typography>{levelElem}</Typography>
      </Box>
    );
  });

  let educationElements = resume.education.map((elem, index) => {
    return <Grid item xs={12} key={index}>
      <Hidden xsDown>
        <Box display="flex" paddingTop="10px" fontSize="16px" fontWeight="bold" justifyContent="space-between">
          <div>{elem.degree}</div>
          <div>{elem.time}</div>
        </Box>
      </Hidden>
      <Hidden smUp>
        <Box display="block" paddingTop="10px" fontSize="16px" fontWeight="bold">
          <div>{elem.degree}</div>
          <div>{elem.time}</div>
        </Box>
      </Hidden>
      <Box>{elem.name}</Box>
    </Grid>;
  });

  let employments = resume.employments.sort((a, b) => (b.id - a.id)).map((elem, index) => {
    let descriptionElements = elem.description.map((d, i) => {
      return <div className="description" key={i}>{d}</div>

    })
    return (
      <Grid item xs={12} key={index}>
        <Hidden only="xs">
          <Box display="flex" fontSize="16px" justifyContent="space-between">
            <div>{elem.name}</div>
            <div>{elem.time}</div>
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box display="block" className="bold-font">
            <div>{elem.name}</div>
            <div>{elem.time}</div>
          </Box>
        </Hidden>
        <div className="position">{elem.position}</div>
        <div className="description-block">
          {descriptionElements}
        </div>
      </Grid>
    );
  });

  return <Container className="resume" maxWidth="lg">
    <Box className="section contact">
      <Box className='header'>
        {resume.name}
      </Box>
      {contactElements}
    </Box>

    <Box className="section summary">
      <Box className='header'>
        Summary
      </Box>
      {summaryElements}
    </Box>

    <Box className="section skill-list">
      <Box className='header'>
        Skills
      </Box>
      <Box display="flex" flexWrap="wrap" marginTop="10px">
        {skillElements}
      </Box>
    </Box>

    <Box className="section education">
      <Box className='header'>
        Education
      </Box>
      {educationElements}
    </Box>

    <Box className="section visa">
      <Box className='header'>
        Visa
      </Box>
      <div className="visa-name">Permanent Resident in Australia</div>
    </Box>

    <Box className="section employments">
      <Box className='header'>
        Employment History
      </Box>
      {employments}
    </Box>
  </Container>;
}

export default Resume;


let resume = {
  "contact": [
    {
      "name": "Cell Phone",
      "value": "+61433995186"
    },
    {
      "name": "Email",
      "value": "yu.eric.pan@gmail.com"
    },
    {
      "name": "Address",
      "value": "Melbourne, Australia"
    }
  ],
  "summary": [
    "A creative and highly reliable Bachelor of Science (computer science) graduate having academic training and hands-on experience in computer programming.",
    "A skilled candidate having experience in object-oriented programming languages including C#, Python and website development using HTML5, CSS3, SCSS, LESS, Vue.js, Vuex, React.js, Redux, JavaScript(ES6) ASP.Net MVC, Azure and Django.",
    "A quick learner who is willing and able to learn new technologies fast."
  ],
  "skills": [
    {
      "name": "C#",
      "level": 4
    },
    {
      "name": "ASP.NET Core",
      "level": 4
    },
    {
      "name": "React.js/Redux",
      "level": 4
    },
    {
      "name": "JavaScript(ES6)",
      "level": 4
    },
    {
      "name": "TypeScript",
      "level": 2
    },
    {
      "name": "Vue.js/Vuex",
      "level": 4
    },
    {
      "name": "HTML/CSS3",
      "level": 4
    },
    {
      "name": "Python (Django)",
      "level": 3
    },
    {
      "name": "Java",
      "level": 2
    },
    {
      "name": "C++/C",
      "level": 1
    },
    {
      "name": "SQL Server",
      "level": 2
    },
    {
      "name": "Angular7",
      "level": 3
    },
    {
      "name": "Less",
      "level": 3
    },
    {
      "name": "SCSS",
      "level": 3
    },
    {
      "name": "PHP",
      "level": 1
    }
  ],
  "education": [
    {
      "name": "Flinders University",
      "time": "2012/07 - 2015/12",
      "degree": "Bachelor of Science(Computer Science)"
    }
  ],
  "employments": [
    {
      "id": 1,
      "name": "Sino Ease Pty Ltd, Adelaide, Australia",
      "time": "08/2016 – 02/2017",
      "position": "Programmer",
      "description": [
        "Worked on database design and implementation",
        "Built website using Django Framework",
        "Wrote back-end code in Python and PHP",
        "Developed front-end  using Jquery",
        "Developed plugins using Jquery"
      ]
    },
    {
      "id": 2,
      "name": "Sirius Valley, Qingdao, China",
      "time": "06/2017 – 07/2017",
      "position": "Programmer",
      "description": [
        "Built Mobile Application using Cordova and IONIC",
        "Wrote static web pages using HTML and LESS",
        "Wrote back-end code in PHP"
      ]
    },
    {
      "id": 3,
      "name": "ReSource Pro (RSP) LLC, Qingdao, China",
      "time": "07/2017 - 06/2019",
      "position": "Associate Software Engineer",
      "description": [
        "Designed and developed websites using C#, ASP.NET Core, JavaScript and Vue.js/Vuex",
        "Built WEB APIs using EPPLUS library that read and write excel files",
        "Built WEB APIs using OpenXML library that read and write word files",
        "Wrote SQL code for SQL SERVER",
        "Wrote HTML/LESS for websites",
        "Wrote ducuments for applications"
      ]
    },
    {
      "id": 4,
      "name": "KeyNinja, Melbourne, Australia",
      "time": "08/2019 - 03/2020",
      "position": "Web Developer",
      "description": [
        "Developed management platforms using C#, ASP.NET Core, Javascript(ES6), React.js and Redux",
        "Wrote SQL code for SQL SERVER",
        "Writing HTML/SCSS for websites",
        "Writing Restful Web APIs using ASP.NET Core WEB API",
        "Developing the mobile application using React Native"
      ]
    },
    {
      "id": 5,
      "name": "Onyx Tyres Wholesale, Melbourne, Australia",
      "time": "05/2020 - 11/2020",
      "position": "Web Developer",
      "description": [
        "Developed the front end of the internal management system using Vue2.0/Vuex",
        "Developed Sales Platform using Restful Web APIs and React.js/redux",
      ]
    },
    {
      "id": 6,
      "name": "Stadium Sports, Melbourne, Australia",
      "time": "12/2020 - Present",
      "position": "Developer",
      "description": [
        "Developed ERP system using C#, ASP.NET Core 3.0 and React.js/redux",
        "Designed and maintained the SQL SERVER database"
      ]
    }
  ],
  "name": "Yu Pan"
}


