# My Portfolio Website React Backend Express Server

[See Project Live](https://api-christophertalavera.vercel.app/)

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [How to Run Locally](#how-to-run-locally)
- [How to Build for Deployment](#how-to-build-for-deployment)

## Overview

This is an Express REST API built using Node, Express, and TypeScript developed as a backend to my website's [frontend](https://github.com/ctalave1/my-portfolio-website-react/tree/master) that has 3 routes:

1. A `GET` route `/resume` to serve up my current resume
2. A `POST` route `/mailer` that takes in a contact for message from my frontend and mails it to my personal email address.
3. A `GET` route `/` that acts as a splash page for the API
4. A `GET` route `/ping` that acts as a sort of health check to test that the API is responsive that should respond with the text `pong`

### Prerequisites

```bash
Install Node.js
https://nodejs.org/
```

## Setup Instructions

1. Clone the repository to your local machine

2. Install dependencies

```bash
npm install
```

3. Create an `.env.development` file in the root of the directory with these values filled in:
```bash
PORT=#PORT_TO_RUN_SERVER_ON
MAILER_EMAIL=#EMAIL_ADDRESS_IN_EMAIL_SERVICE_TO_USE_FOR_MAILING_CONTACT_FORM_MESSAGES_FROM_FRONTEND
MAILER_PASSWORD=#APP_PASSWORD_FOR_EMAIL_ACCOUNT_BEING_USED_TO_MAIL_CONTACT_FORM_MESSAGES_FROM_FRONTEND
MAILER_TARGET=#RECIPIENT_EMAIL_ADDRESS_FOR_CONTACT_FORM_MESSAGES_FROM_FRONTEND
FE_URL=#LOCAL_ADDRESS_OF_FRONTEND_PROJECT_FOR_CORS_WHITELISTING
```

### How to Run Locally

```bash
npm run dev
```

### How to Build for Deployment

```bash
npm run build
```