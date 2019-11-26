import React, { useEffect, Component } from "react";
import axios from "axios";
import styled from "styled-components";
import "./styles.css";
import Button from "react-bootstrap/Button";

const PatternsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Patterns(props) {
  const patterns = props.patterns.map(pattern => {
    return (
      <li className="pattern" key={pattern.id}>
        <p>{pattern.title}</p>
        <p>{pattern.description}</p>
        <p>{pattern.colours}</p>
        <Button>View</Button>
      </li>
    );
  });
  return (
    <div className="patterns">
      <PatternsContainer>{patterns}</PatternsContainer>
    </div>
  );
}

// PREVIOUSLY USED CLASS BASED COMPONENT:

// export default class Patterns extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       patterns: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("/api/patterns")
//       .then(response => this.setState({ patterns: response.data }));
//   }

//   render() {
//     const { patterns } = this.state;

//     return (
//       <div className="patterns">
//         <PatternsContainer>
//           {patterns.map(pattern => (
//             <li className="pattern" key={pattern.id}>
//               <p>{pattern.title}</p>
//               <p>{pattern.description}</p>
//               <p>{pattern.colours}</p>
//               <Button>View</Button>
//             </li>
//           ))}
//         </PatternsContainer>
//       </div>
//     );
//   }
// }
