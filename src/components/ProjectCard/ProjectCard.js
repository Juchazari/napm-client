import React from 'react';
import styled from 'styled-components';

const NapmProjectCard = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #d0d0d0;
  background-color: #f2f2f2;
`;

function ProjectCard() {
  return <NapmProjectCard />;
}

export default ProjectCard;