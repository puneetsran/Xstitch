import React, { useEffect, useState } from "react";
import FavouriteListItem from "./FavouriteListItem";
import axios from "axios";
import "./styles.css";

export default function FavouriteList(props) {
  const [patterns, setPatterns] = useState([]);

  function getPattern(pattern) {
    axios.get(`/api/patterns/${pattern}`).then(data => {
      let patternArray = [];
      patternArray.push(data.data.pattern);
      setPatterns(patternArray);
      console.log("inside get patterns", patternArray);
    });
  }

  useEffect(() => {
    axios.get("/api/favourites/").then(res => {
      const patterns_id = res.data.map(pattern => {
        return pattern.pattern_id;
      });
      console.log("patterns_id", patterns_id);
      patterns_id.map(fav => {
        return getPattern(fav);
      });
    });
  }, []);

  console.log("HI ", patterns);

  let patternCards = patterns.map(pattern => {
    return (
      <FavouriteListItem
        key={pattern.id}
        title={pattern.title}
        description={pattern.description}
      />
    );
  });

  return <div className="sidebar">{patternCards}</div>;
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
//         // const title = pattern.title;
//         // const description = pattern.description;
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

//   // let patternCards = patterns.map(pattern => {
//   return (
//     <FavouriteListItem
//     // key={pattern.id}
//     // title={}
//     // description={}
//     />
//   );
//   // });

//   // return <div>{patternCards}</div>;
// }

// import React, { useEffect, useState } from "react";
// import FavouriteListItem from "./FavouriteListItem";
// import axios from "axios";

// export default function FavouriteList(props) {
//   const [patterns, setPatterns] = useState([]);

//   // function getPattern(pattern) {
//   //   axios.get(`/api/patterns/${pattern}`).then(data => {
//   //     // console.log("res from within get pattern", );
//   //     // console.log("ROHIT ", data.data.pattern);
//   //     // const title = pattern.title;
//   //     // const description = pattern.description;
//   //     let patternArray = [];
//   //     patternArray.push(data.data.pattern);
//   //     // console.log("TEST ", patternArray);
//   //     return setPatterns(patternArray);

//   //     // return { title, description };
//   //   });
//   // }

//   function getPattern(pattern) {
//     axios.get(`/api/patterns/${pattern}`).then(data => {
//       // console.log("res from within get pattern", );
//       // console.log("ROHIT ", data.data.pattern);
//       // const title = pattern.title;
//       // const description = pattern.description;
//       let patternArray = [];
//       // patternArray.push(data.data.pattern);
//       // console.log("TEST ", patternArray);
//       // return setPatterns(patternArray);
//       // return { title, description };

//       // let patternArray = [];
//       patternArray.push(data.data.pattern);
//       setPatterns(patternArray);
//       console.log("inside get patterns", patternArray);
//     });
//   }

//   useEffect(() => {
//     // let patternId = [];
//     axios.get("/api/favourites/").then(res => {
//       const patterns_id = res.data.map(pattern => {
//         return pattern.pattern_id;
//       });
//       console.log("patterns_id", patterns_id);
//       // let patternId = [];
//       // patternId.push(res.data.id);
//       // console.log("TEST", patternId);

//       // const patterns_id = res.data.map(pattern => {
//       //   return pattern.pattern_id;
//       // });
//       // console.log("favourits here", res.data);
//       // console.log("favourite ids here", patterns_id);
//       //setPatterns(patterns_id);
//       patterns_id.map(fav => {
//         getPattern(fav);
//       });
//     });

//     // let pattern = patterns_id;
//     // axios.get(`/api/patterns/${pattern}`).then(data => {
//     //   let patternArray = [];
//     //   patternArray.push(data.data.pattern);
//     //   setPatterns(patternArray);
//     // });
//   }, []);

//   console.log("HI ", patterns);
//   // const pattern = props.pattern;

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
