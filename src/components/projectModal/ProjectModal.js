import React from "react";
import Modal from "react-modal";
import Landing from "../landing/Landing";
import Projects from "../projects/Projects";

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ProjectModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="cta-btn-outline see-full-list-btn" onClick={openModal}>
        See Full List
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        // className="Modal"
        overlayClassName="Overlay"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button className="modal-close-btn" onClick={closeModal}>
          &times;
        </button>
        <Projects />
      </Modal>
    </div>
  );
}

export default ProjectModal;
