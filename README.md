<div align="center">

# TitleSafe

</div>

## Description
TitleSafe is a **research title verification platform** that ensures the **uniqueness and accuracy of research titles** by utilizing AI-powered analysis. This **MERN-based full-stack solution** is designed to provide **fast, secure, and scalable** verification, helping researchers validate their titles efficiently.

## User Flow
1. **Signup & Login**:
   - Researchers and Institutions have **separate signup processes** but share a **common login system**.
   
2. **Title Submission**:
   - Users can submit research titles for verification.
   - The system checks for **similarity, plagiarism, and uniqueness**.

3. **Title Analysis & Verification**:
   - The platform uses **AI-powered validation** to compare submitted titles with existing databases.
   - Provides feedback on uniqueness and potential modifications.

4. **Results & Recommendations**:
   - Users receive **instant verification results** with recommendations for improvement.
   - The system suggests changes if the title is too similar to existing ones.

## Tech Stack
* [![React][React.js]][React-url]
* [![Node.js][Node.js]][Node-url]
* [![Express.js][Express.js]][Express-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Bootstrap][Bootstrap]][Bootstrap-url]
* **GeminiAI** - AI-powered verification

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
* [![Node.js][Node.js]][Node-url]
* [![MongoDB][MongoDB]][MongoDB-url]

### Backend Setup
```sh
# Clone the repository
git clone https://github.com/saisiddeswar/TitleSafe/
```
### Backend Setup
```sh
cd backend

# Install dependencies
npm install

# Create a .env file and configure necessary variables

# Start the backend server
npm start
```

### Frontend Setup
```sh
cd frontend

# Install dependencies
npm install

# Start the frontend server
npm run dev
```

## Features
- **AI-Powered Title Verification**:
  - Uses **GeminiAI from Google** to analyze research titles for uniqueness and accuracy.
- **Signup & Login**:
  - Separate signup for **Researchers and Institutions**, with a common login system.
- **Title Submission & Analysis**:
  - Users can submit research titles for validation.
  - AI scans databases and provides **instant feedback**.
- **Plagiarism Detection**:
  - The system flags titles that are too similar to existing research work.
- **Recommendations for Improvement**:
  - Suggests modifications if the title lacks uniqueness.
- **Fast & Scalable Verification**:
  - Built on the **MERN stack** for efficiency and scalability.

## Contribution
This project is developed solely by **Sai Siddeswar** without using any open-source contributions.

##
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
