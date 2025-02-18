import { createPortal } from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
        <AnimatePresence>
      <motion.dialog
          variants={{hidden: {opacity: 0, y: 30}, visible: {opacity: 1, y: 0}}}
          animate="visible"
          initial="hidden"
          exit="hidden"
          open
          className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
        </AnimatePresence>
    </>,
    document.getElementById('modal')
  );
}
