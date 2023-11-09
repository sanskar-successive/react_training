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