import { Button } from "bootstrap";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditButton() {
  const history = useHistory();
  return (
    <div>
      <Button onClick={history.push(`/putbrand/${item.id}`)} color="warning">
        Edit
      </Button>
    </div>
  );
}

export default EditButton;
