import { createPortal } from 'react-dom';

export default function CustomModal() {
    console.log(document.getElementById('modal-root'));
    return createPortal(<dialog open={true}>
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
    </dialog>, document.getElementById('modal-root'));
}