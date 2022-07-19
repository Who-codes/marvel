import React from "react";
import { useGlobalContext } from "../context";
import CardItems from "./CardItems";

export default function Cards() {
  const { data } = useGlobalContext();

  return (
    <section className="card-container">
      {data.Search &&
        data.Search.map((item, index) => <CardItems {...item} key={index} />)}
    </section>
  );
}
