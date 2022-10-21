import React from 'react';
// import { Chart } from './Chart';
import { BarInterface } from '../interfaces/BarInterface';
import styled, { StyledComponent } from "styled-components";


const Bar = styled.div<BarInterface>`
  width: ${props => props.width/813*100}%;
  background-color: ${props => props.color};
  display: grid;
  grid-template-columns: 3% 4% 15% 25% 20% 20% 13%;
  height: 2rem;
  `;

  export default Bar;
