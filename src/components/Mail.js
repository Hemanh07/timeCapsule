import React, { useState } from "react";
import { TextField, Button, Box, IconButton, Typography } from "@mui/material"; // Importing MUI components
import FolderIcon from "@mui/icons-material/Folder"; // Import Folder Icon
import axios from "axios"; // Axios for making API requests

export default function Mail(props) {
  const [file, setFile] = useState(null); // To store the selected file
  const [email, setEmail] = useState(""); // To store the entered email
  const [scheduleTime, setScheduleTime] = useState(""); // To store schedule time

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the first selected file
    setFile(selectedFile); // Store the file in the state
    console.log("Selected file:", selectedFile);
  };

  const handleFolderClick = () => {
    // Open the file picker dialog
    document.getElementById("fileInput").click();
  };

  const handleSubmit = async () => {
    const recipientEmail = prompt("Please enter the recipient's email address:");

    if (!recipientEmail || !validateEmail(recipientEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    const scheduleInput = prompt("Enter the schedule time in YYYY-MM-DD HH:MM format (or leave empty for immediate):");
    const scheduledDate = scheduleInput ? new Date(scheduleInput) : null;

    if (scheduleInput && isNaN(scheduledDate)) {
      alert("Invalid date format");
      return;
    }

    const formData = new FormData();
    formData.append("to", recipientEmail);
    formData.append("subject", "Scheduled Email");
    formData.append("text", props.Mailcontent); 

    // Only append the file if it's selected
    if (file) {
      formData.append("attachment", file);
    }

    // Only append the schedule if it's provided
    if (scheduledDate) {
      formData.append("schedule", scheduledDate.toISOString());
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message); 
    } catch (error) {
      alert("Error sending email"); 
    }
};


  // Validate email address
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="retro-card">
      {/* Folder Icon Button */}
      <IconButton onClick={handleFolderClick} sx={{ marginRight: "10px" }}>
        <FolderIcon fontSize="large" />
      </IconButton>

      {/* Hidden file input */}
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange} // Handle file selection
        accept="image/*,video/*" // Accept image and video files
      />

      <TextField
        multiline
        rows={10}
        variant="outlined"
        value={props.Mailcontent}
        onChange={props.handleContentChange} // Make sure this handler updates the props.content
        fullWidth
        sx={{
          marginBottom: "20px",
          backgroundColor: "transparent",
          height: "500px",
          width: "500px",
          resize: "none",
          padding: "25px",
          fontFamily: "'Courier New', Courier, monospace",
          whiteSpace: "pre-wrap",
          overflowY: "auto",
          transition: "box-shadow 2s",
          outline: "none",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
        }}
      />

      {/* File name or preview */}
      {file && (
        <Box sx={{ marginTop: "10px" }}>
          <Typography variant="body1">Selected File: {file.name}</Typography>
          {/* Display preview for images or videos */}
          {file.type.startsWith("image") && (
            <img src={URL.createObjectURL(file)} alt="preview" width="100px" />
          )}
          {file.type.startsWith("video") && (
            <video width="100px" controls>
              <source src={URL.createObjectURL(file)} />
              Your browser does not support the video tag.
            </video>
          )}
        </Box>
      )}

      <Button
        variant="contained"
        sx={{ boxShadow: props.boxShadow, backgroundColor: "rgba(4, 230, 251, 0.8)" }}
        onClick={handleSubmit} // Trigger the email send process
      >
        Send to Future
      </Button>
    </div>
  );
}