
import './Modal.css'

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Modal;
