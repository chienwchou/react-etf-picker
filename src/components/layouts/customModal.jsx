import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const CustomModal = forwardRef(function CustomModal(props, ref) {
    return createPortal(
        <dialog ref={ref} open={true}>
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </dialog>, document.getElementById('modal-root')
    );
});

export default CustomModal;