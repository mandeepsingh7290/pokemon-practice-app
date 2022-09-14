import React, {useState} from "react";
import "./App.css";

const Modal = ({ modalDetails, setShow , details}) => {
  const {poke, pokeIndex} = modalDetails
  console.log("details",details);
  console.log(poke)
  return (
    <>
      {details && <div className="wrapper">
        <div className="modal-main">
           <i
              className="fa fa-times close-btn"
              aria-hidden="true"
              title="close"
              onClick={() => setShow(false)}
            ></i>
          <div className="image-div">
          <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeIndex}.png`} alt="imgsrc"/>
          <h3 className="title">
            {poke.name}
          </h3>
          </div>
            <div className="content">
          <div className="abilities"><span className="abilities-heading">Abilities</span> {details.abilities.map((ability)=> { 
            return <p className="ability">{ability.ability.name}</p>
            })}
            </div>
            </div>
        </div>
      </div>}
    </>
  );
};

export default Modal;
