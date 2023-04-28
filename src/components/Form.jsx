import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { projectFirestore } from "../firebase/config";

function Form() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/recipes";
    const obj = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    };
    projectFirestore.collection('recipes').add(obj)

    navigate('/')
    
  };
  const handleClick = () => {
    if (ingredients.includes(ingredient)) {
      alert("Siz bu massalliqni kiritgansiz!!!");
    } else {
      setIngredients((ingredients) => {
        return [...ingredients, ingredient];
      });
    }

    setIngredient("");
  };

  return (
    <>
      <h1 className="form__title">Create</h1>
      <form className="form_" onSubmit={handleSubmit}>
        <label htmlFor="">
          title: <br />
          <input
            type="text"
            id="title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          ingredients: <br />
          <label htmlFor="" className="flex__label">
            <input
              type="text"
              id="title"
              value={ingredient}
              onChange={(e) => {
                setIngredient(e.target.value);
              }}
            />{" "}
            <button onClick={handleClick} type="submit" className="submit__btn">
              Add
            </button>
          </label>
          <span>
            Ing:
            {ingredients.map((item) => {
              return item + ", ";
            })}
          </span>
        </label>
        <label htmlFor="">
          method: <br />
          <input
            required
            type="text"
            id="title"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          cookingTime: <br />
          <input
            required
            type="text"
            id="title"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="submit__btn">
          submit
        </button>
      </form>
    </>
  );
}

export default Form;
