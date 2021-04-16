import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Formik } from 'formik';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);
const tableData = [
  { title: "Every site added", points: "10", action_tag: "WEBSITE_ADD" },
  { title: "Every client added", points: "5", action_tag: "CLIENT_ADD" },
  { title: "Review on Social Media", points: "20", action_tag: "CLIENT_ADD" },
  { title: "Every purchase through Maestro", points: "10", action_tag: "CLIENT_ADD" },
  { title: "Follow social handles (Fb, Insta, Twitter)", points: "5", action_tag: "CLIENT_ADD" },
  { title: "Attend a webinar", points: "5", action_tag: "CLIENT_ADD" }
]

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [actionList, setActionList] = useState(tableData);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values) => {
    const tempActionList = [...actionList, values]; // new array need to update
    setActionList(tempActionList); // update the state
    setOpen(false);
  };
  return (
    <div>
      <div style={{ float: 'right' }}><Button color="primary" onClick={handleClickOpen}>Add new Action</Button></div>
      <div style={{ clear: 'both' }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Actions</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Specific Actions", "Points", "Tag"]}
                  tableData={actionList}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{ padding: '30px' }}>
          <DialogTitle id="form-dialog-title">Add Action</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText>
            <Formik
              initialValues={{
                title: '',
                points: '',
                tag: '',
              }}>
              {formData => (
                <div>
                  <CustomInput
                    labelText="Title"
                    id="title"
                    name="title"
                    formControlProps={{
                      fullWidth: true
                    }}
                    handleChange={formData.handleChange}
                  />
                  <CustomInput
                    labelText="Points"
                    id="points"
                    name="points"
                    formControlProps={{
                      fullWidth: true
                    }}
                    handleChange={formData.handleChange}
                  />
                  <CustomInput
                    labelText="Tag"
                    id="tag"
                    name="tag"
                    formControlProps={{
                      fullWidth: true
                    }}
                    handleChange={formData.handleChange}
                  />
                  <div style={{ marginTop: '20px' }}>
                    <Button color="primary" onClick={() => handleSubmit(formData.values)}>Add</Button>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                  </div>
                </div>
              )}
            </Formik>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}