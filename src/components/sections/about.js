/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = ['Python','JavaScript', 'Solidity', 'Pinata', 
                 'Hardhat','Tensorflow', 'Numpy', 'R'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Akshay and I enjoy analyzing Data and exploring
              the Web3 stack. I started my career as an Electrical
              Engineer in the Silicon Valley, working on custom hardware for companies like Waymo.
              Working at Waymo sparked my interest in Data Science that led me to pursue my graduate studies at the {''} 
              <a href ='https://uwaterloo.ca/electrical-computer-engineering/'> University of Waterloo</a>
              {' '}where I am specializing in Machine Learning.
            </p>
            <p>
              After graduating from Waterloo, I am currently working at <a href ="https://alpaca.markets">Alpaca Markets</a> as a Growth Engineer. At Alpaca, I am building
              custom integrations to add more channels for our users to trade on. I am also building trading algorithms that can be used by
              our users to automate their trading strategies. Check out some of my trading strategies in this <a href="https://alpaca.markets/learn/author/akshay/">blog</a>.
            </p>
            <p>
              Over the course of last 7 months, I have been actively participating in Web3 Hackathons. My team and I have built projects
              

              <a href = "">Time Limited Tokens</a>, a reference implementaion of smart contracts that allow users to atomically
              limit rights to their ERC-721 assets. We won the 3rd place bounty from IPFS/Filecoin for our implementation and 
              were also granted a <a href ="https://github.com/ipfs/devgrants/issues/167">Microgrant</a> to further the development of this project. We intend to submit an Ethereum Improvement Proposal (EIP) 
              soon.
            </p>

            <p>
              My team and I also built a NFT marketplace. Check it out {' '} 
              <a href="https://github.com/connie-ho/beginner-blocs">
                here
              </a>.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
