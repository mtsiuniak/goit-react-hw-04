import css from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "4px",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default function ImageModal({
  imgModal,
  onModalClose,
  image,
}) {
  return (
    <div>
      <Modal
        isOpen={imgModal}
        onRequestClose={onModalClose}
        style={customStyles}
      >
        <img className={css.img} src={image} />
      </Modal>
    </div>
  );
}