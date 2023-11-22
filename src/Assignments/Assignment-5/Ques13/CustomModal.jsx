// 13.Design and implement a Modal component in React. Allow customization of the modal content 
// and provide options to open, close, and toggle the modal. Use this component to display various types of content.

import Modal from "./Modal";
import useModal from "./useModal";

const CustomModal = ()=>{
    const {isOpen, openModal, closeModal} = useModal();
    return(
        <>
            <h4>React customizable modal</h4>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <h4>custom modal</h4>
            </Modal>
        </>
    )
}
export default CustomModal;