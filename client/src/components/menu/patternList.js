import React, { useEffect, useState } from "react";
import PatternListItem from "./patternListItem";
import axios from "axios";

export default function PatternList(props) {
  const [pattern, setPattern] = useState([]);

  // const user = {
  //   name: "John",
  //   email: "John@email.com",
  //   password: "password"
  // }

  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
    axios.get(`/api/patterns/${pattern.id}`).then(res => {
      setPattern(res.data);
    });
  }, []);

  let patternCards = pattern.map(item => {
    return (
      <PatternListItem
        key={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });

  return <div>{patternCards}</div>;
}

// import React, { useEffect, useState } from "react";
// import FavouriteListItem from "./FavouriteListItem";
// import axios from "axios";

// export default function FavouriteList(props) {
//   const [patterns, setPatterns] = useState([]);

//   function getPattern(pattern) {
//     return axios
//       .get(`/api/patterns/${pattern}`)
//       .then(({ data: { pattern } }) => {
//         console.log("res from within get pattern", pattern);
//         const title = pattern.title;
//         const description = pattern.description;
//         // setPatterns(pattern);
//         // return { title, description };
//       });
//     // };
//   }

//   useEffect(() => {
//     axios.get("/api/favourites/").then(res => {
//       const patterns_id = res.data.map(pattern => {
//         return pattern.pattern_id;
//       });
//       console.log("favourits here", res.data);
//       console.log("favourite ids here", patterns_id);
//       setPatterns(patterns_id);
//       getPattern(patterns_id);
//     });
//   }, []);

//   let patternCards = patterns.map(pattern => {
//     return (
//       <FavouriteListItem
//         key={pattern.id}
//         title={pattern.title}
//         description={pattern.description}
//       />
//     );
//   });

//   return <div>{patternCards}</div>;
// }
