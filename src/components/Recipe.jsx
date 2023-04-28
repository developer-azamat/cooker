import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { projectFirestore } from "../firebase/config";
import Loader from "../loader/Loader";

function Recipe() {
  const [data, setData] = useState(null);
  const [isPadding, setIsPadding] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsPadding(true);
    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((data) => {
        setData(data.data());
      setIsPadding(false);
      });
  }, []);

  return (
    <div className="app-body">
      {isPadding && <Loader />}
      {data && (
        <div className="cardx">
          <h2 style={{ color: "blueviolet", textTransform: "uppercase" }}>
            {data.title}
          </h2>
          <h3>
            <b style={{ color: "black" }}>Cooking time:</b> {data.cookingTime}{" "}
            minute
          </h3>
          <h3>
            <b style={{ color: "black" }}>Cooking time:</b>{" "}
            {data.ingredients.map((item) => {
              return item + ",";
            })}
          </h3>
          <p>
            <b style={{ color: "black" }}>Methods:</b>
            {data.method}
          </p>
          <Link to="/" className="gerr">
            <AiOutlineArrowLeft />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Recipe;
