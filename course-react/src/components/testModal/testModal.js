import { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './testModal.css';


const Modal = (props) => {
    const nodeRef = useRef(null);

    const duration = 300;

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.show}
            timeout={duration}
            onEnter={() => props.setshowTrigger(false)}
            onExited={() => props.setshowTrigger(true)}
            classNames="modal"
            mountOnEnter
            unmountOnExit
        >

            <div className="modal mt-5 d-block" ref={nodeRef} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Typical modal window</h5>
                            <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body content</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </CSSTransition>
    )
}

function TestModal() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setshowTrigger] = useState(true);

    return (
        <Container>
            <Modal show={showModal} onClose={setShowModal} setshowTrigger={setshowTrigger} />
            {showTrigger ? <button
                type="button"
                className="btn btn-warning mt-5"
                onClick={() => setShowModal(true)}>Open Modal</button> : null}

        </Container>
    );
}

export default TestModal;
