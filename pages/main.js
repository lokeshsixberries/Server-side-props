import { gql } from "@apollo/client";
import { useState } from "react";
import { client } from "../Apollo/client";
import { GET_JOB_POSTS } from "../lib/gqlQuery";

const getData = async () => {
  const data = await client.query({
    query: GET_JOB_POSTS,
  });
  const res = await data;
  return res;
};

export default function Main() {
  const [state, setState] = useState([]);
  const vals = Promise.resolve(getData());
  vals.then((res) => {
    setState(res.data.posts);
  });
  return (
    <>
      {state.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
          </>
        );
      })}
    </>
  );
}
