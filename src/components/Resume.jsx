import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';

export default class Resume extends React.Component {


    render(){

        let contactElements = resume.contact.map((elem, index) => {
            return <Grid item xs={12} key={index}>
                <div className='contact-detail'>
                    {elem.name}: {elem.value}
                </div>
            </Grid>;
        })

        let summaryElements = resume.summary.map((elem, index) => {
            return <Grid item xs={12} md={4} key={index}>
                <Box height="100%" className="summary-detail">
                    {elem}
                </Box>
            </Grid>;
        })

        let skillElements = resume.skills.map((elem, index) => {
            let level = [];
            for(let i = 0; i < 5; i++){
                let styleClass = i < elem.level ? "" : "hidden-star";
                level.push(<StarIcon key={i} className={styleClass}/>);
            }
            let levelElem = <span>
                {level}
            </span>;
            return (
                <Grid item xs={12} sm={6} key={index}>
                    <Box display="flex" justifyContent="space-between">
                        <Typography>{elem.name}</Typography>
                        <Typography>{levelElem}</Typography>
                    </Box>
                </Grid>
            );
        });

        let educationElements = resume.education.map((elem, index) => {
            return <Grid item xs={12} key={index}>
                <Hidden only="xs">
                    <Box display="flex" className="bold-font" justifyContent="space-between">
                        <div>{elem.degree}</div>
                        <div>{elem.time}</div>
                    </Box>
                </Hidden>
                <Hidden smUp>
                    <Box display="block" className="bold-font">
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
                        <Box display="flex" className="bold-font" justifyContent="space-between">
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

        let projects = resume.projects.map((elem, index) => {
            let descriptions = elem.description.map((d, i) => {
            return <Box key={i} className="project-description">{d.title}: {d.value}</Box>;
            })

            return <Grid item xs={12} key={index}>
                <Box className="project-header">{elem.name}</Box>
                {descriptions}
            </Grid>
        })

        

        return <div className="resume">
            <Grid container spacing={1} className="section">
                <Grid item xs={12}>
                    <div className='header'>
                        {resume.name}
                    </div>
                </Grid>
                {contactElements}
            </Grid>
            <Divider className='divider' />
            <Grid container spacing={1} className="section summary">
                <Grid item xs={12}>
                    <div className='header'>
                        Summary
                    </div>
                </Grid>
                {summaryElements}
            </Grid>
            <Divider className='divider' />
            <Grid container spacing={1} className="section skill-list">
                <Grid item xs={12}>
                    <div className='header'>
                        Skills
                    </div>
                </Grid>
                {skillElements}
            </Grid>
            <Divider className='divider' />
            <Grid container spacing={1} className="section education">
                <Grid item xs={12}>
                    <div className='header'>
                        Education
                    </div>
                </Grid>
                {educationElements}
            </Grid>
            <Divider className='divider' />
            <Grid container spacing={1} className="section visa">
                <Grid item xs={12}>
                    <div className='header'>
                        Visa
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="visa-name">Permanent Resident</div>
                </Grid>
            </Grid>
            <Divider className='divider' />
            <Grid container spacing={1} className="section employments">
                <Grid item xs={12}>
                    <div className='header'>
                        Employment History
                    </div>
                </Grid>
                <Grid item container xs={12}>
                    {employments}
                </Grid>
            </Grid>
            <Divider className='divider' />
            <Grid container spacing={1} className="section projects">
                <Grid item xs={12}>
                    <div className='header'>
                        Projects
                    </div>
                </Grid>
                <Grid item container xs={12}>
                    {projects}
                </Grid>
            </Grid>
        </div>;
    }

}


let resume = {
    "contact": [
        {
            "name": "Cell Phone",
            "value": "0433995186"
        },
        {
            "name": "Email",
            "value": "yu.eric.pan@gmail.com"
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
            "name": "TypeScript",
            "level": 3
        },
        {
            "name": "JavaScript(ES6)",
            "level": 4
        },
        {
            "name": "React.js/Redux",
            "level": 4
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
        },
        {
            "name": "Performance Education",
            "time": "2016/01 - 2016/11",
            "degree": "Professional Year"
        }
    ],
    "employments": [
        {
            "id": 1,
            "name": "Sino Ease Pty Ltd, Adelaide, Australia",
            "time": "08/2016 – 02/2017",
            "position": "Programmer",
            "description": [
                "Database Designing and implementation",
                "Building website using Django Framework",
                "Back-end programming using Python and PHP",
                "Front-end development using Jquery",
                "Creating plugins using Jquery"
            ]
        },
        {
            "id": 2,
            "name": "Sirius Valley, Qingdao, China",
            "time": "06/2017 – 07/2017",
            "position": "Programmer",
            "description": [
                "Building cell phone Application using Cordova and IONIC",
                "Writing static web pages using HTML and LESS",
                "Back-end programming using PHP"
            ]
        },
        {
            "id": 3,
            "name": "ReSource Pro (RSP) LLC, Qingdao, China",
            "time": "07/2017 - 06/2019",
            "position": "Associate Software Engineer",
            "description": [
                "Using C#, ASP.NET Core, Javascript and Vue.js/Vuex to develop websites.",
                "Using EPPLUS library to read and write excel files",
                "Using OpenXML library to read and write word files",
                "Writing SQL code for SQL SERVER",
                "Writing HTML/LESS for websites",
                "Writing ducuments for applications"
            ]
        },
		{
            "id": 4,
            "name": "KeyNinja, Melbourne, Australia",
            "time": "08/2019 - 03/2020",
            "position": "Web Developer",
            "description": [
                "Using C#, ASP.NET Core, Javascript(ES6), React.js and Redux to develop websites.",
                "Writing SQL code for SQL SERVER",
                "Writing HTML/SCSS for websites",
                "Writing Restful Web APIs using ASP.NET Core WEB API",
                "Developing the mobile application using React Native"
            ]
        }
    ],
    "projects": [
		{
            "name": "KeyNinja Dashboard",
            "description": [
                {
                    "title": "Description",
                    "value": "A management system for managing tasks, employees' data and accouting"
                },
                {
                    "title": "Technologies",
                    "value": "ASP.NET Core, React.js/Redux, and HTML5/SCSS"
                }
            ]
        },
        {
            "name": "Task Assignment",
            "description": [
                {
                    "title": "Description",
                    "value": "A system for handling business tasks and generating excel files"
                },
                {
                    "title": "Technologies",
                    "value": "ASP.NET Core, Vue.js/Vuex, Jquery and HTML5/CSS3"
                }
            ]
        },
        {
            "name": "Monthly Insight Report",
            "description": [
                {
                    "title": "Description",
                    "value": "A .Net project which provides APIs for generating reports in .DOCX format"
                },
                {
                    "title": "Technologies",
                    "value": "C#, OpenXML library"
                }
            ]
        },
        {
            "name": "Supervisor Portal",
            "description": [
                {
                    "title": "Description",
                    "value": "A website for generating data reports, managing human resource, managing work assignments and so on."
                },
                {
                    "title": "Technologies",
                    "value": "C# .NET Framework, JQuery, SQL Server"
                }
            ]
        }
    ],
    "name": "Yu Pan"
}