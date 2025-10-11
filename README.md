# CarWashApp

A React Native mobile application built with Expo and TypeScript

## Project Structure

```
src/
├── assets/                  # Images, icons, fonts
├── components/              # Reusable components based on Atomic Design
│   ├── atoms/              # Basic building blocks
│   ├── molecules/          # Simple groups of atoms
│   ├── organisms/          # Complex UI components
│   ├── templates/          # Page layouts
│   └── pages/              # Screen components
├── navigation/              # Stack and tab navigators
├── services/                # Backend communication (axios config)
├── store/                   # Global state management (Zustand)
├── hooks/                   # Custom hooks
├── utils/                   # Helper functions
├── types/                   # TypeScript definitions
├── constants/               # Global constants (API URLs, colors, etc.)
└── App.tsx                  # Main entry point
```

## Features

- ✅ TypeScript configuration with path aliases
- ✅ Atomic Design folder structure
- ✅ Navigation with React Navigation
- ✅ State management with Zustand
- ✅ API service with Axios
- ✅ Authentication flow
- ✅ AsyncStorage integration
- ✅ Multi-platform support (iOS, Android, Web)
- ✅ Cross-platform compatibility

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Run on specific platforms:

   ```bash
   npm run web      # Web (opens in browser) - ✅ Ready
   npm run android  # Android (requires Android SDK setup)
   npm run ios      # iOS (requires Xcode on macOS)
   npm run tunnel   # Tunnel mode for physical devices
   ```

4. Check your setup:

   ```bash
   npm run check    # Verify configuration
   ```

5. Build for production:

   ```bash
   npm run build:web      # Build for web
   npm run build:android  # Build APK for Android
   npm run build:ios      # Build for iOS
   ```

6. Test the build:
   ```bash
   npm test  # Run build tests
   ```

## Dependencies

- **Expo**: React Native framework
- **TypeScript**: Type safety
- **React Navigation**: Navigation library
- **Zustand**: State management
- **Axios**: HTTP client
- **AsyncStorage**: Local storage

## Development

The project is set up with:

- Path aliases (`@/*` points to `src/*`)
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
