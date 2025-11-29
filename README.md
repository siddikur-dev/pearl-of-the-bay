# Travel Guru - Travel Booking Website

## Live Demo

👉 [https://travel-guru-site-pro.netlify.app/](https://travel-guru-site-pro.netlify.app/)

## GitHub Repository

🔗 [https://github.com/shihabuddin-dev/travel-guru](https://github.com/shihabuddin-dev/travel-guru)

## Table of Contents
- [Travel Guru - Travel Booking Website](#travel-guru---travel-booking-website)
  - [Live Demo](#live-demo)
  - [GitHub Repository](#github-repository)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Features

✨ **Modern UI with Tailwind CSS**  
✨ **Responsive Design** (works on mobile, tablet, and desktop)  
✨ **Destination Pages** with detailed information  
✨ **Booking System** for hotels and tours  
✨ **User Authentication** (coming soon)  
✨ **Interactive Maps** for location visualization  
✨ **Photo Galleries** of destinations  
✨ **Customer Reviews** system  

## Technologies Used

- **Frontend**: 
  - React 19
  - Tailwind CSS 4.1.5
  - Lucide React (for beautiful icons)
  - React Router 7.5.3 (for navigation)

- **Backend**:
  - Firebase (for authentication and database)

- **Build Tools**:
  - Vite (with @tailwindcss/vite plugin)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shihabuddin-dev/travel-guru.git
   cd travel-guru
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
travel-guru/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── routes/          # Application routes
│   ├── services/        # Firebase services
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .env.example         # Environment variables example
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run preview`: Previews the production build locally
- `npm run lint`: Runs ESLint on your code

## Deployment

The project is configured for easy deployment to Netlify. To deploy your own version:

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Set up the environment variables in Netlify
4. Deploy!

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Travels!** ✈️🌴