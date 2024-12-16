![Build-A-Site](https://i.imgur.com/nZPQ9If.png)

# Website Name - Rizen Torque

## Note

> "For API Calls and Sending Email, Subscription is Required so backend servers did not get linked in firebase hosting.

## Description
> "The Rizen Torque is an innovative application designed to empower users to reflect on their present lives and connect with their future selves. This platform allows users to write heartfelt letters, set a delivery date, and optionally attach photos or videos to capture memories vividly. With advancements in digital technology, the ability to time-capsule thoughts and emotions in an automated manner has become more feasible and accessible. This project aims to offer an intuitive and secure interface for creating and delivering personalized time capsules through email."

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributors](#contributors)

---

## Features

- **Time Capsule Emailing** : <br>
    Users can send emails to their future selves, scheduled for delivery at a later time,
    allowing them to leave messages for the future.
- **Talk to Your Future** : <br>
    The app integrates an AI chat feature where users can converse with an advanced
    version of themselves from the future. This uses a Hugging Face API for natural language processing and conversation.
- **Sticky Notes** : <br>
    Users can create, view, and manage sticky notes on their dashboard for quick
    thoughts, reminders, or personal messages.
- **File Attachments** : <br>
    The app allows users to attach files (images, videos) to their scheduled emails and
    view file previews before sending them.

## Technologies Used

- **Frontend**: React, Material UI, HTML, CSS, JavaScript
- **Backend**: Node.js, Express, Nodemailer (for email functionality), Hugging Face API (for AI chatresponses), Multer (for file uploads)
- **Styling**: Material UI, custom CSS for app-specific design
- **APIs**: REST APIs for email sending and file attachment handling , Hugging Face API for AI-powered chat with the future
- **Hosting**: Firebase

---

## Installation

### Prerequisites
- Node.js (v14 or higher) installed on your machine.
- npm (comes with Node.js) or yarn for managing dependencies.
- Gmail API Access or SMTP server credentials (for Nodemailer email functionality).
- Hugging Face API Key (for the AI chat functionality).

### Steps to run the project
- Using Firebase:
  - Make sure to run the files under /src/backend (Ensure express is installed)
    - Server.js
    - In a new terminal, run Mistral.js
  - Then you can access the app using the given firebase url
- Via code
  - Make sure to run the files under /src/backend (Ensure express is installed)
    - Server.js
    - In a new terminal, run Mistral.js
  - In a new terminal
    - Run npm start, after changing to the timecapsule directory

## Usage

1. Navigate to the home page, click on the top of the capsule to open and explorevarious features like StickyNotes, Talk to Your Future(AI Chatbot) and Email Schedule
2. Set the UserName on the top, so that the application uses it while scheduling messages and in Notes.
3. Explore Features in the Sidebar - Email Schedule, Diary and Talk to Your Future.
4. Write a letter, click on the button &quot;SEND TO FUTURE&quot; , Fill in the email address and Schedule date to receive mail.
5. In the Notes, User can take notes and can be sent to mail.

---

## Screenshots

![Home Page](https://github.com/user-attachments/assets/0905140f-7e8e-4cfe-9db5-5e65543aa3ff)
*Home Page - Click on the capsule to open*

![Mail PAge](https://github.com/user-attachments/assets/c0deaf96-9b1f-4b77-a54c-1e74a75374a2)
*Mail Page - Explore the Features in the Sidebar*

---

## Contributors

We thank the following people for their contributions to this project:

- **Harsith S** - [GitHub Profile](https://github.com/Harsith2k5)
- **Hemanth R** - [GitHub Profile](https://github.com/Hemanh07)
- **Numaan A** - [GitHub Profile](https://github.com/mohammednumaan)
- **Vizhal A** - [GitHub Profile](https://github.com/VizhalArumugam)

---

## Contact

For any inquiries or feedback, reach out to:

- **Harsith S**
- **Email**: [23z116@psgitech.ac.in](mailto:23z116@psgitech.ac.in)
- **GitHub**: [Harsith2k5](https://github.com/Harsith2k5)
- **Website**: [Rizen Torque Website](https://rizentorque-8fc4f.web.app)
