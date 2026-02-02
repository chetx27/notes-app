# Notes App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)

A modern, full-stack notes application built with React and Express.js. Write and preview Markdown notes with tagging functionality, search capabilities, dark mode, and offline support via localStorage backup.

## Features

### Core Functionality
- **Markdown Editor**: Write notes with full Markdown support and live preview
- **Tagging System**: Organize notes with custom tags for easy categorization
- **RESTful API**: Backend API for persistent note storage
- **Export Notes**: Download all notes as JSON for backup or migration

### New Features 
- ** Real-time Search**: Filter notes instantly by title or tags
- ** Dark Mode**: Toggle between light and dark themes with persistent preferences
- ** Offline Backup**: Automatic localStorage backup for offline functionality
- ** Responsive Design**: Modern UI that works on all screen sizes
- ** Performance**: Optimized rendering and state management
- ** Enhanced UI**: Beautiful, modern interface with smooth animations

## Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (comes with Node.js)

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chetx27/notes-app-.git
   cd notes-app-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the backend server** (in one terminal)
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:5000`

2. **Start the React app** (in another terminal)
   ```bash
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

## Usage Guide

### Creating Notes
1. Click the **"+ New Note"** button in the sidebar
2. Write your content using Markdown syntax in the editor
3. Add an optional tag for organization
4. Click **" Save Note"** to persist your note

### Searching Notes
- Use the search bar at the top of the sidebar
- Search works across note titles and tags
- Results update in real-time as you type
- Click the ✕ button to clear the search

### Dark Mode
- Click the theme toggle button (🌙/☀️) in the top-right corner
- Your preference is automatically saved
- Theme persists across browser sessions

### Editing Notes
1. Click on any note in the sidebar to load it
2. Make your changes in the editor
3. Save to update the note

### Deleting Notes
- Click the (trash) icon on any note card
- Confirm the deletion in the dialog

### Exporting Notes
- Click **" Export"** in the sidebar
- All notes are downloaded as a timestamped JSON file
- Useful for backup or migration purposes

### Offline Mode
- Notes are automatically backed up to localStorage
- If the server is unavailable, you can still:
  - View existing notes
  - Create new notes (saved locally)
  - Edit and delete notes
- Changes sync automatically when connection is restored

## API Endpoints

### GET /notes
- **Description**: Retrieve all notes
- **Response**: Array of note objects
- **Example**: `GET http://localhost:5000/notes`

### POST /notes
- **Description**: Create a new note
- **Request Body**: 
  ```json
  {
    "markdown": "# My Note\nContent here",
    "tag": "important"
  }
  ```
- **Response**: Created note object with ID and timestamp
- **Example**: `POST http://localhost:5000/notes`

### DELETE /notes/:id
- **Description**: Delete a note by ID
- **Response**: Success message or 404 if not found
- **Example**: `DELETE http://localhost:5000/notes/1`

## Project Structure

```
notes-app/
├── public/
│   └── index.html              # Main HTML file for React app
├── src/
│   ├── components/
│   │   ├── SearchBar.js        # Search component
│   │   ├── SearchBar.css       # Search styles
│   │   ├── ThemeToggle.js      # Dark mode toggle
│   │   └── ThemeToggle.css     # Theme toggle styles
│   ├── utils/
│   │   └── localStorage.js     # LocalStorage utilities
│   ├── App.js                  # Main React component
│   ├── App.css                 # App styles with theme support
│   ├── index.js                # React app entry point
│   └── index.css               # Global styles
├── server.js                   # Express.js backend server
├── package.json                # Project dependencies and scripts
├── README.md                   # This file
├── LICENSE                     # MIT License
├── .gitignore                  # Git ignore rules
└── package-lock.json           # Dependency lock file
```

## Markdown Support

The editor supports standard Markdown syntax:

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Code**: `` `inline code` `` or ` ```code block``` `
- **Quotes**: `> quote`
- And more!

## Technologies Used

### Frontend
- **React** 18.2.0 - UI library
- **react-markdown** 10.1.0 - Markdown rendering
- **CSS3** - Modern styling with CSS variables for theming

### Backend
- **Express.js** 4.22.1 - Web framework
- **CORS** 2.8.5 - Cross-origin resource sharing

### Storage
- In-memory storage (server-side)
- LocalStorage (client-side backup)

## Deployment

### Backend Deployment
Deploy the Express server to platforms like:
- Heroku
- Railway
- Render
- Vercel

**Important**: Update the API endpoint in `App.js` from `http://localhost:5000` to your deployed backend URL.

### Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## Troubleshooting

### Port already in use
If port 5000 is already in use, modify `server.js`:
```javascript
const PORT = process.env.PORT || 5001; // Change to any available port
```

### CORS errors
Ensure the backend CORS configuration includes your frontend URL:
```javascript
app.use(cors({
  origin: 'http://localhost:3000' // or your deployed frontend URL
}));
```

### Notes not persisting
- Check that the backend server is running
- Verify the API endpoint URL in `App.js`
- Check browser console for error messages
- Notes should still be available in localStorage as backup

### Dark mode not persisting
- Ensure localStorage is enabled in your browser
- Check browser privacy settings
- Clear cache and try again

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**chetx27**
- GitHub: [@chetx27](https://github.com/chetx27)

## Acknowledgments

- Built with React and Express.js
- Markdown rendering by react-markdown
- Icons from Unicode emoji
- Inspired by modern note-taking applications

## Changelog

### Version 2.0.0 (Latest)
-  Added real-time search functionality
-  Added dark mode with theme persistence
-  Added localStorage backup for offline support
-  Complete UI redesign with modern styling
-  Performance improvements
-  Enhanced mobile responsiveness
-  Various bug fixes

### Version 1.0.0
- Initial release with basic note-taking functionality
- Markdown editor and preview
- Tagging system
- RESTful API
- Export functionality

---

If you find this project useful, please consider giving it a star on GitHub!
