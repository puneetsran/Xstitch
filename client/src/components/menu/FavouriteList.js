import React, { useEffect, useState } from "react";
import FavouriteListItem from "./FavouriteListItem";
import axios from "axios";

export default function FavouriteList(props) {
  const [patterns, setPatterns] = useState([]);

  function getPattern(pattern) {
    return axios
      .get(`/api/patterns/${pattern}`)
      .then(({ data: { pattern } }) => {
        console.log("res from within get pattern", pattern);
        const title = pattern.title;
        const description = pattern.description;
        // setPatterns(pattern);
        // return { title, description };
      });
    // };
  }

  useEffect(() => {
    axios.get("/api/favourites/").then(res => {
      const patterns_id = res.data.map(pattern => {
        return pattern.pattern_id;
      });
      console.log("favourits here", res.data);
      console.log("favourite ids here", patterns_id);
      setPatterns(patterns_id);
      getPattern(patterns_id);
    });
  }, []);

  let patternCards = patterns.map(pattern => {
    return (
      <FavouriteListItem
        key={pattern.id}
        title={pattern.title}
        description={pattern.description}
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
//     axios.get(`/api/patterns/${pattern}`).then(data => {
//       // console.log("res from within get pattern", );
//       // console.log("ROHIT ", data.data.pattern);
//       // const title = pattern.title;
//       // const description = pattern.description;
//       let patternArray = [];
//       patternArray.push(data.data.pattern);
//       // console.log("TEST ", patternArray);
//       return setPatterns(patternArray);

//       // return { title, description };
//     });
//   }

//   // useEffect(() => {
//   //   Promise.all([
//   //     axios.get("/api/days"),
//   //     axios.get("/api/appointments"),
//   //     axios.get("/api/interviewers")
//   //   ]).then(all => {
//   //     dispatch({
//   //       type: "SET_APPLICATION_DATA",
//   //       days: all[0].data,
//   //       appointments: all[1].data,
//   //       interviewers: all[2].data
//   //     });
//   //   });
//   // }, []);

//   useEffect(() => {
//     let patternId = [];
//     axios.get("/api/favourites/").then(res => {
//       // let patternId = [];
//       patternId.push(res.data.id);
//       console.log("TEST", patternId);

//       // const patterns_id = res.data.map(pattern => {
//       //   return pattern.pattern_id;
//       // });
//       // console.log("favourits here", res.data);
//       // console.log("favourite ids here", patterns_id);
//       //setPatterns(patterns_id);
//     });
//     let pattern = 1;
//     axios.get(`/api/patterns/${pattern}`).then(data => {
//       let patternArray = [];
//       patternArray.push(data.data.pattern);
//       setPatterns(patternArray);
//     });
//   }, []);
//   //console.log("HI ", patterns);
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
