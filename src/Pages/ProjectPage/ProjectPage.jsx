import React from 'react'

const ProjectPage = ({projectType}) => {

    const projectData = [
        {
            imageUrl:'',
            Intro:"",
            skillsUsed:"",
            sorceCode:"",
            demo:"",
            type:"frontend"
        }
    ]

    const filteresProjects = projectData.filter(project => project.type == projectType)

  return (
    <div className="project_page">
        
    </div>
  )
}

export default ProjectPage