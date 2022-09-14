import React, { useState } from "react";
import axios from "axios";
import Modal from './Modal'
import "./App.css";

function App() {
  const [content, setContent] = useState([]);
  const [hide, setHide]= useState(true)
  const [show, setShow]= useState(false)
  const [modalDetails,setModalDetails] = useState({})
  const [details, setDetails] = useState({});



  const handleFetch = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      console.log(response);
      setContent(response.data.results);
      // setContent(response.data.types);
      setHide(false)
    });
  };

  const handleKnowMore = (poke, index) => {
      axios.get(poke.url).then((response) => {
        console.log(response.data.abilities);
        setDetails(response.data);
        console.log("abiities",response.data.abilities)
        setModalDetails({poke: poke, pokeIndex: index + 1})
        setShow(true)
      });
  }
  return (
    <>
      {hide && <div className="main-content">
        <h3 className="title-tag">Pokemon images and abilities</h3>
        <button className="btn" onClick={handleFetch}>
          Pokemon Details
        </button>
      </div>}
      <div className="list-handler">
      {content.map((poke, index) => {
        return (
          <div className="list-container" key={index}>
            <h1 className="list-name">{poke.name}</h1>
            <button className="btn-info" onClick={() => handleKnowMore(poke, index)}>Click here to know more</button>
            </div>
          );
      })}
      </div>
      {show && <Modal modalDetails={modalDetails} setShow={setShow} details={details} />}
    </>
  );
}

export default App;
