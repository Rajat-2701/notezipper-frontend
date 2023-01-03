import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MyNotes.css";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import CreateNote from "./CreateNote";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  console.log("notes", notes);

  const userName = localStorage.getItem("userInfo");
  const myName = JSON.parse(userName);
  console.log(myName);
  return (
    <MainScreen title={myName.name}>
      <Link className="link" onClick={handleModal}>
        <div className="create-button">Create New Note</div>
        <div className="notes">
          {notes &&
            notes.map((note) => {
              return (
                <div className="notes-details">
                  <h2>{note.title}</h2>
                  <p>{note.content}</p>
                </div>
              );
            })}
        </div>
      </Link>
      {!openModal ? "" : <CreateNote openModal={handleModal} />}
    </MainScreen>
  );
};

export default MyNotes;
