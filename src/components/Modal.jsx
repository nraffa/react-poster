import classes from './Modal.module.css';
//use hook from react-router-dom for navigating back to '/' route
import { useNavigate } from'react-router-dom';

function Modal({ children , onClose}) {
  const navigate = useNavigate();

  function closeModal() {
    navigate('..');
  }



  return (
    <>
      <div className={classes.backdrop} onClick={closeModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;