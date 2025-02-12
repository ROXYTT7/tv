# World Networks Web Project

## Overview
The World Networks Web project is a web application designed to provide users with access to various networks from around the globe. It features a modern interface with light and dark themes, a search menu, and an advanced online player for streaming content. The application supports multiple languages, including Persian, English, and Turkish, and allows users to log in and register for an account.

## Features
- **Light and Dark Themes**: Users can switch between light and dark themes for a personalized experience.
- **Search Functionality**: A search menu allows users to filter networks based on their input.
- **Global Network Display**: The application displays networks from different countries, complete with logos and names, alongside their respective flags.
- **Advanced Online Player**: An integrated player for streaming content directly within the application.
- **User Authentication**: Login and registration features for user accounts.
- **Multi-language Support**: The application is available in Persian, English, and Turkish.

## Project Structure
```
world-networks-web
├── public
│   ├── index.html
│   ├── flags
│   │   └── [country-flags]
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── light-theme.css
│   │   │   └── dark-theme.css
│   │   ├── data
│   │   │   └── iptv-links.json
│   │   └── images
│   │       └── [network-logos]
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── SearchMenu.js
│   │   ├── NetworkList.js
│   │   ├── NetworkItem.js
│   │   ├── Player.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── contexts
│   │   └── ThemeContext.js
│   ├── i18n
│   │   ├── en.json
│   │   ├── fa.json
│   │   └── tr.json
│   ├── pages
│   │   ├── Home.js
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   ├── App.js
│   └── index.js
├── package.json
├── .babelrc
├── .eslintrc.json
├── .gitignore
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.