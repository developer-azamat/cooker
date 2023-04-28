import React, { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { projectFirestore } from "../firebase/config";

function Script() {
  const [data, setData] = useState(null);
  const [isPadding, setIsPadding] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPadding(true);
    projectFirestore.collection("recipes").onSnapshot((data) => {
      const arrData = [];
      data.docs.map((item) => {
        arrData.push({ ...item.data(), id: item.id });
      });
      setData(arrData);
      setIsPadding(false);

      if(arrData.length == 0){
        setError("Malumot yo'q bo'lishi mumkin!")
      }
    });
  }, []);

  function handleDelete(id) {
    projectFirestore
      .collection("recipes")
      .doc(id)
      .delete()
      
  }

  return (
    <div className="script__body">
      {isPadding && <Loader />}
      {data &&
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h2 style={{ textTransform: "capitalize" }}>
                <b style={{ color: "blue" }}>{item.title}</b>
              </h2>
              <h3>
                <b style={{ color: "lightcoral" }}>Cooking time:</b>{" "}
                {item.cookingTime}{" "}
              </h3>
              <p>
                <b style={{ color: "lightcoral" }}>Methods:</b>{" "}
                {item.method.substr(0, 30)}...
              </p>
              <Link to={`/recipe/${item.id}`} className="body__btn">
                Read more
              </Link>
              <BiTrash
                className="trash__btn"
                onClick={() => handleDelete(item.id)}
              />
            </div>
          );
        })}
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
    </div>
  );
}

export default Script;
