import { forwardRef } from "react";
import { createPortal } from "react-dom";

const CustomModal = forwardRef(function CustomModal(props, ref) {
  return createPortal(
    <dialog ref={ref} className="max-w-5xl">
      {props.children}
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default CustomModal;
