import React from 'react';
import styled from 'styled-components';

const NapmProjectCard = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
`;

const CardHeader = styled.div`
  display: flex;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 7px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  width: 0%;
  height: 100%;
  background-color: #2ee265;
`;

const ProjectIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 5px;
  background-image: linear-gradient(45deg, #9e1794, #ff5af3);
  margin-right: 16px;
`;

const ProjectName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
`;

function ProjectCard() {
  return (
    <NapmProjectCard>
      <CardHeader>
        <ProjectIcon><span>🚀</span></ProjectIcon>
        <Details>
          <ProjectName>Project Almanac</ProjectName>
          <span style={{fontSize: '12px', marginTop: '7px', color: '#888'}}>0%</span>
          <ProgressBar>
            <ProgressBarFill />
          </ProgressBar>
        </Details>
      </CardHeader>
    </NapmProjectCard>
  );
}

export default ProjectCard;