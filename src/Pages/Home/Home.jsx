import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const skillsData = ["HTML5","CSS3","React.Js","Redux.Js","Node.Js","Express.Js","Responsive Design","JavaScript (ES6+)","Core Java","DataStructures","Algorithms","Git","GitHub"]

  const projectData = [
    {
      Image:"https://images.unsplash.com/photo-1537111355507-1f73d87ecadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbm5lcnN8ZW58MHx8MHx8fDA%3D",
      projectName:"Full Stack",
      projectLink:'/fullstack'
    },
    {
      Image:"https://images.unsplash.com/photo-1537111355507-1f73d87ecadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbm5lcnN8ZW58MHx8MHx8fDA%3D",
      projectName:"FrontEnd",
      projectLink:'/frontend'
    },
    {
      Image:"https://images.unsplash.com/photo-1537111355507-1f73d87ecadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbm5lcnN8ZW58MHx8MHx8fDA%3D",
      projectName:"Backend",
      projectLink:'/backend'
    }
  ]
  return (
    <div>
      <div id="page1">
        <div className="intro">
          <h2>Hello!</h2>
          <h1>I'm Devanshi Bilthare</h1>
          <h3>A Developer</h3>
        </div>
      </div>
      <div id="page2">
        {/* Your content here */}
                <h1>I'm a passionate programmer who loves 
                crafting elegant solutions through code.
                For me, programming is more than just a 
                profession – it's a creative journey of
                problem-solving and exploration. With a
                curious mind and a love for learning, I'm
                constantly pushing boundaries and 
                embracing new technologies. Join me on
                this exciting journey through my projects,
                where I showcase my dedication to the
               art of programming.</h1>
      </div>
      <div id="page3">
          <div className="skills">
            {skillsData.map((skill,idx)=>(
              <h2 key ={idx}>{skill}</h2>
            ))}
          </div>
      </div>
      <div id="page4">
              {
                projectData.map((elem,idx)=>(
                  <Link to={elem.projectLink}>
                      <div className="projects-contain">
                        <div className="img_contain">
                          <img key={idx} src={elem.Image} alt="" />
                          <h1 key={elem.projectName} >{elem.projectName}</h1>
                        </div>
                      </div>
                  </Link>
                ))
              }
      </div>
    </div>
  );
};

export default Home;
