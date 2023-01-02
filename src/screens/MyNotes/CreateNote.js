import React, { useState } from "react";
import Modal from "react-modal";
const CreateNote = ({ openModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError(true);
    } else {
      const data = { title, description };
      console.log("data", data);
    }
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      borderRadius: "3px",
      padding: "20px",
    },
    overlay: {
      background: "rgba(0,0,0,0.5)",
    },
  };
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Modal
        isOpen={openModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={true}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ fontSize: "34px", textTransform: "uppercase", marginBottom: "1rem", fontWeight: "bold" }}>
          Create Note
        </h2>
        <i
          className="fas fa-times"
          style={{ cursor: "pointer", fontSize: "30px", position: "absolute", top: 20, right: 20 }}
          onClick={openModal}
        ></i>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <input
            type="text"
            style={{
              width: "400px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <p style={{ marginTop: -5, color: "red", marginLeft: "-18rem" }}>Title is required</p>}
          <input
            type="text"
            style={{
              width: "400px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error && <p style={{ marginTop: -5, color: "red", marginLeft: "-15rem" }}>Description is required</p>}
          <button
            tabIndex={1}
            aria-expanded="true"
            type="submit"
            style={{
              width: "400px",
              marginTop: "1rem",
              marginBottom: "1rem",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              fontSize: "18px",
              textTransform: "uppercase",
              border: "1px solid white",
              borderRadius: "5px",
            }}
          >
            Add Note
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default CreateNote;
