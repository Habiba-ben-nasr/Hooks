import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { updateTodo } from "../JS/Actions/Action";
// import {  updateTodo } from "../JS/Actions/Action";
// import './edittodo.css'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function EditModal({ todo }) {
  // modalIs open Boolean if true modal show else modal dont show
  const [modalIsOpen, setIsOpen] = useState(false);
  const [textTodo, setTextTodo] = useState(todo.name);
  const dispatch = useDispatch();

  // save the modification         initialize with the old text
  function openModal() {
    setIsOpen(true);
  }

  //close Modal
  function closeModal() {
    setIsOpen(false);
  }

  // const updateTodo = () => {
  //   dispatch(
  //     updateTodo({
  //       name: textTodo,
  //       id: todo.id,
  //     })
  //   );
  //   closeModal();
  // };

  return (
    <Fragment>
      <button className="my-btn" onClick={openModal}>
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <input
            onChange={(e) => setTextTodo(e.target.value)}
            value={textTodo}
            style={{ padding: "0.5rem 1rem" }}
            type="text"
          />
          <button className="my-btn" onClick={()=> {
            dispatch(updateTodo(todo.id, textTodo));
            closeModal();
            }}>
            Confirm
          </button>
        </form>
      </Modal>
    </Fragment>
  );
}

export default EditModal;