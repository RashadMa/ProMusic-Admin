import { Stack, Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "reactstrap";
import { getSettings } from "../../redux/actions/settingActions";
import "../hey.css";

function Settings() {
  const { items } = useSelector((state) => state.settingListReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    getSettings()(dispatch);
  }, [dispatch]);
  return (
    <>
      <h2 className="page-header">Settings</h2>
      <Table dark hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Key</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.key}</td>
              <td>{item.value}</td>
              <td>
                <Button
                  onClick={() => history.push(`/putsettings/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </>
  );
}

export default Settings;
