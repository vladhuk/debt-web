import React from "react";
import Modal from "react-bootstrap/Modal";
import {FormRepayDebt} from "../ModalForm";

function ModalRepayDebt(props) {
    return <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Repay debt
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormRepayDebt
                onSubmit={props.onHide}
                onHide={props.onHide}
                debts={props.debts}
            />
        </Modal.Body>
    </Modal>
}

export {ModalRepayDebt};