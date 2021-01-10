import React, { useState, useRef } from "react"
import { Form, Popover, Overlay } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import CreateIcon from "@material-ui/icons/Create"

function EditTodo({ handleEdit, newDesc, handleChangeDesc }) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
      <div ref={ref}>
        <Button onClick={handleClick}>Edit</Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Content>
              <CreateIcon color="" onClick={handleEdit} />
              <Form.Control
                type="text"
                placeholder="new discription"

                onChange={handleChangeDesc}
                value={newDesc}
              />
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    </>
  );
}

export default EditTodo
