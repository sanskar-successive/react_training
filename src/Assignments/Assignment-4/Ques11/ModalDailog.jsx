// 11.Design a modal dialog component using Material-UI's Dialog component.
// Use it to display additional information or capture user input within your app.

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const ModalDailog = () => {
  const [dailogOpen, setDailogOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showSuccess, setShowSuccess] = useState("");

  const handleSubmitClick = () => {
    if (feedback.length > 0) {
      console.log(feedback);
      setFeedback("");
      setDailogOpen(false);
      setShowSuccess("Thanks for the feedback");
      setTimeout(() => {
        setShowSuccess("");
      }, 2000);
    }
  };

  return (
    <>
      <h3>Please give you valuable feedback</h3>
      <Button variant="contained" onClick={() => setDailogOpen(true)}>
        Click here
      </Button>
      <Dialog open={dailogOpen} onClose={() => setDailogOpen(false)}>
        <DialogTitle>User Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            placeholder="Please give your feedback max. 200 words"
            margin="dense"
            type="text"
            multiline
            rows={10}
            variant="outlined"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitClick}>Submit</Button>
        </DialogActions>
      </Dialog>
      <h3>{showSuccess}</h3>
    </>
  );
};
export default ModalDailog;
