import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fbfbfb;
`;

function Projects() {
  return (
    <ProjectsPage>
      <ProjectCard />
    </ProjectsPage>
  );
}

export default Projects;