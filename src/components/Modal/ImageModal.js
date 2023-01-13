import React from "react";
import Modal from "react-modal";
const ImageModal = (imageModal) => {
  return (
    <div>
      <Modal isOpen={!imageModal}>
        Image Modal
      </Modal>
    </div>
  );
};

export default ImageModal;
