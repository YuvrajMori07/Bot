# Yuvi-bot 🤖💙

Yuvi-bot features an AI-powered chatbot built with React, TypeScript, and Firebase. It uses NLP for real-time, context-aware responses, with secure, low-latency communication and encrypted cloud-based message storage.

## ✨ Features

- **🤖 AI Chat Support**: Intelligent conversations powered by Google's Generative AI (Gemini) and OpenRouter
- **🌙 Dark/Light Mode**: Beautiful theme switching with persistent preferences
- **🔐 Flexible Authentication**: Support for email/password login and anonymous access
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **🎨 Modern UI**: Built with Tailwind CSS and smooth Framer Motion animations
- **🔒 Privacy-First**: Secure Firebase backend with encrypted data storage


## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router** for navigation

### Backend
- **Firebase Auth** for user authentication
- **Cloud Firestore** for data storage
- **Firebase Functions** for serverless backend
- **Google Generative AI (Gemini)** for AI responses
- **OpenRouter API** for additional AI capabilities

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **PostCSS** with Autoprefixer
- **Firebase Emulator Suite** for local development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase CLI
- Firebase project with Authentication and Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/yuvi-bot.git
   cd yuvi-bot
   ```

2. **Install dependencies**
   ```bash
   # Install main project dependencies
   npm install
   
   # Install Firebase Functions dependencies
   cd functions
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   
   # OpenRouter API (for chat functionality)
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key
   ```

   ```
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Firebase Configuration**
   ```bash
   # Login to Firebase
   firebase login
   
   # Initialize your project (if not already done)
   firebase use your-project-id
   ```

5. **Start Development Servers**
   ```bash
   # Start the main application
   npm run dev
   
   # In a new terminal, start Firebase Functions emulator
   cd functions
   npm run serve
   ```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
yuvi-bot/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CustomToast.tsx  # Toast notification system
│   │   ├── Layout.tsx       # App layout with navigation
│   │   └── ProtectedRoute.tsx
│   ├── contexts/            # React Context providers
│   │   ├── AuthContext.tsx  # Authentication state
│   │   ├── DataContext.tsx  # Data management
│   │   └── ThemeContext.tsx # Theme switching
│   ├── lib/
│   │   └── firebase.ts      # Firebase configuration
│   ├── pages/               # Main application pages
│   │   ├── Auth.tsx         # Authentication page
│   │   ├── Chat.tsx         # AI chat interface
│   │   ├── Landing.tsx      # Landing page
│   │   └── Settings.tsx     # User settings
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── functions/               # Firebase Cloud Functions
│   ├── src/
│   │   └── index.ts         # Cloud Functions for AI chat
│   └── package.json
├── public/                  # Static assets
└── package.json
```

## 🎯 Key Components

### Authentication System
- **Anonymous Access**: Users can start immediately without registration
- **Email/Password**: Traditional account creation and login
- **Protected Routes**: Secure access to app features

### AI Chat Integration
- **Multiple AI Providers**: Google Gemini (via Firebase Functions) and OpenRouter
- **Conversational History**: Maintains chat context
- **Safety Features**: Content filtering and crisis detection

### Theme System
- **Dark/Light Mode**: System preference detection with manual override
- **Persistent Settings**: Theme choice saved to localStorage
- **Smooth Transitions**: Animated theme switching

### Data Management
- **Mood Tracking**: Record and visualize emotional states
- **Journal Entries**: Private journaling with sentiment analysis
- **Secure Storage**: All data encrypted in Firestore

## 🔧 Available Scripts

### Main Project
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Firebase Functions
```bash
cd functions
npm run build        # Compile TypeScript
npm run serve        # Start Firebase emulator
npm run deploy       # Deploy to Firebase
npm run logs         # View function logs
```

## 🚀 Deployment

### Frontend (Vite Build)
```bash
# Build the project
npm run build

# Deploy to your hosting platform
# (Vercel, Netlify, Firebase Hosting, etc.)
```

### Firebase Functions
```bash
cd functions
npm run deploy
```

### Environment Variables for Production
Ensure all environment variables are properly set in your hosting platform:
- Firebase configuration
- OpenRouter API key
- Gemini API key (for Functions)

## 🔒 Security & Privacy

- **Data Encryption**: All user data is encrypted in transit and at rest
- **Anonymous Options**: Users can use the app without providing personal information
- **HIPAA Considerations**: While not HIPAA-compliant, privacy is a core design principle
- **Content Safety**: AI responses are filtered for harmful content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

