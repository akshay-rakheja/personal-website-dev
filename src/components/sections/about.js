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

  const skills = ['Solidity','Python','JavaScript', 'Typescript', 'Nft.storage', 
                 'Hardhat','IPFS', 'Tensorflow', 'React', 'Gatsby', 'Node.js'];

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
              After graduating from Waterloo, I started working at <a href ="https://alpaca.markets">Alpaca Markets</a> as a Growth Engineer. At Alpaca, I am building
              custom integrations to add more channels for our users to trade on. I am also building trading algorithms that can be used by
              our users to automate their trading strategies. Check out some of my trading strategies in this <a href="https://alpaca.markets/learn/author/akshay/">blog</a>.
            </p>
            <p>
              Over the course of last few months, I have been actively participating in Web3 Hackathons. My team and I have built projects
              that have won prizes and grants in each of the hackathons we have participated in. These hackathons include the{' '}
              <a href="https://www.web3con.dev/">Web3Con</a>,{' '}
              <a href="https://supernova.devpost.com/">Supernova</a>,{' '}
              <a href="https://chainlinkspring2022.devpost.com/">Chainlink Spring 2022 Hackathon</a>,{' '}
              <a href="https://showcase.ethglobal.com/hackfs">HackFS</a> and {' '}
              <a href="https://buidlit.polygon.technology/">Buidl It</a>.<br></br>
            </p>
            <p>
              At the moment, I am engaging with potential customers for Polydocs to help clients manage their legal agreements on chain.
              Polydocs is also participating in Encode Club's <a href="https://www.encode.club/polygon-accelerator">Polygon Accelerator</a> program.
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
