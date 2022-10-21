import React from "react";
import styled from "styled-components";
import { TooltipInterface } from "../interfaces/TooltipInterface";

const Tooltip = styled.div<TooltipInterface>`
position: absolute;
left: 4rem;
background-color: white;
border: 1px black solid;
padding: 0.5rem;
:before {
  content: "${(props) => props.name}";
}
display: none;
`;

export default Tooltip;