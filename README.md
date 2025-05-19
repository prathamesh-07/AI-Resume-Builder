# AI-Resume-Builder

A dynamic, AI-powered resume builder built with Next.js, React and Tailwind CSS. Users can enter their details, leverage OpenAI to generate polished resume content and pick from multiple templates—then preview and download their professional résumé as a PDF.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Available Scripts](#available-scripts)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **AI-Assisted Content Generation**  
  Generate professional work summaries, skills descriptions, and bullet points powered by OpenAI’s GPT API.  
- **Multiple Templates**  
  Choose from a variety of responsive, Tailwind-powered resume templates.  
- **Live Preview**  
  See your résumé update in real time as you edit.  
- **Export to PDF**  
  Download a printer-friendly PDF of your finalized résumé.  
- **Client-Side & Server-Side Rendering**  
  Fast, SEO-friendly Next.js routes for both static and dynamic pages.  

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)  
- **Language**: TypeScript & modern JavaScript  
- **Styling**: Tailwind CSS, PostCSS  
- **AI Integration**: OpenAI REST API (GPT-4) via a lightweight serverless function  
- **Bundler**: Vercel’s optimized Next.js build pipeline  
- **Routing & Middleware**: Next.js App Router, custom `middleware.ts`  

---

## Prerequisites

- Node.js v18+  
- Yarn or npm  
- An [OpenAI API key](https://platform.openai.com/account/api-keys)  

---

## Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/prathamesh-07/AI-Resume-Builder.git
   cd AI-Resume-Builder


2. Navigate to the project directory:
   ```bash
   cd AI-Resume-Builder
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

---

**Usage**

- Users can start by entering their personal information, work experience, education, and skills.
- The AI will provide suggestions for improving the content and layout.
- Once satisfied, users can download their resume in the desired format.

---

**Contributing**

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

**License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Contact**

For any inquiries or feedback, please reach out to the contributors:

- Prathamesh Chiddarwar


You can copy and paste this code into a file named `README.md` in your project directory.
