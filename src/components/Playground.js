import React, { useState, useEffect } from "react";
import axios from "axios";

const Playground = () => {
  const [rank, setRank] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.codewars.com/api/v1/users/hateryx")
      .then((response) => {
        setRank(response.data.ranks.overall.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section className="bg-blue-400 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl text-blue-50 font-medium text-center mb-8">
            Skills
          </h2>
          {/* <p>{rank && <p>{rank}</p>}</p> */}
        </div>
      </section>
    </div>
  );
};

export default Playground;
