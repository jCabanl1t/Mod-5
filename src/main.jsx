import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Course from './Course.jsx'

let courses = {
  classes: [
    {
      title: "ART110",
      description: "Study of the relationship of form: the elements and the principle of art and organization as an understanding of two-dimensional art design. Instructional methods will include lecture, demonstrations, in-class activities and group discussions."
    },
    {
      title: "DMA120",
      description: "DMA 120 is a beginning class for learning how to use Adobe Photoshop Creative Cloud for a wide variety of purposes."
    },
    {
      title: "CIS258",
      description: "Students will focus on managing and developing Content Management Systems, such as Wordpress. Students will set up a content management system to run on the internet."
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Classes taken at OC</h1>
    {
    courses.classes.map((c)=><Course key={c.title} title={c.title} description={c.description}></Course>)
    }
  </React.StrictMode>,
)
