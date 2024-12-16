const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const schedule = require('node-schedule');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'harsithharsith217@gmail.com',
    pass: 'pnqm yiob vyrb mtxd', 
  },
});

const scheduleEmail = (to, subject, text, attachment, scheduleDate) => {
  const mailOptions = {
    from: 'Rizen Torque', 
    to,
    subject,
    text,
    attachments: attachment ? [{ filename: attachment.originalname, path: attachment.path }] : [], 
  };

  schedule.scheduleJob(scheduleDate, async () => {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });
};

app.post('/send-email', upload.single('attachment'), async (req, res) => {
  const { to, subject, text, schedule } = req.body;
  const attachment = req.file; 

  try {
    let scheduleDate = new Date(schedule);

    if (schedule) {
      console.log(`Email scheduled for: ${scheduleDate}`);
      scheduleEmail(to, subject, text, attachment, scheduleDate);
      res.status(200).json({ message: 'Email scheduled successfully!' });
    } else {
      const mailOptions = {
        from: 'Rizen Torque', 
        to,
        subject,
        text, 
        attachments: attachment ? [{ filename: attachment.originalname, path: attachment.path }] : [], 
      };

      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent immediately!', info });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to process the email', error });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
