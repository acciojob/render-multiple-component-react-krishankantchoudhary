import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   const projects = [
    {
      name: "AI Personal Assistant",
      description: "A smart AI assistant that helps with daily tasks and planning."
    },
    {
      name: "Smart Home IoT System",
      description: "An IoT-based home automation project controlling lights, fans, and appliances."
    },
    {
      name: "Medical Diagnosis App",
      description: "An app that predicts diseases based on user symptoms using ML."
    }
  ];
  return (
    <div id="main" class="ns-wrapper">
      {projects.map((project,index)=>(
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}


export default App;
