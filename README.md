# 🎬 Movie Explorer

A responsive **Movie Explorer Application** built with React that allows users to browse TV shows/movies, search for specific titles, and view detailed information through an interactive modal.

This project uses the **TVMaze API** to fetch movie/show data and demonstrates modern React development concepts including reusable components, hooks, API integration, routing, and responsive UI design.

---

## 🚀 Features

### 🏠 Home Page

The home page contains:

- 🎬 Application logo/brand name
- Navigation menu
- Hero banner section
- Call-to-action button
- Footer section

---

### 🎞️ Movie Listing Page

Users can:

- Browse available shows/movies
- Search movies by title
- View movie cards
- Open detailed movie information

Features:

- ✅ API integration
- ✅ Dynamic search
- ✅ Responsive movie grid
- ✅ Reusable card components
- ✅ Loading state
- ✅ Empty result handling

---

## 🔍 Search Functionality

Users can search movies/shows by title.

### API Endpoint:

```bash
GET https://api.tvmaze.com/search/shows?q={query}
```

Example:

```bash
https://api.tvmaze.com/search/shows?q=batman
```

---

# 🎬 Movie Cards

Each movie card displays:

- Movie poster
- Movie/show title
- Release date
- Rating
- See Details button

Example:

```
╭─────────────────────╮
│                     │
│       Poster        │
│                     │
├─────────────────────┤
│ Movie Title         │
│ ⭐ 8.5              │
│ 📅 2024             │
│                     │
│ [ See Details ]     │
╰─────────────────────╯
```

---

# 📖 Movie Details Modal

Clicking the **See Details** button opens a modal containing:

- Large poster image
- Movie title
- Rating
- Release date
- Genre information
- Movie summary
- Close button

Modal can be closed by:

- Clicking the ✕ button
- Clicking outside the modal

---

# 🛠️ Technology Stack

## Frontend

- React
- JavaScript ES6+
- Vite
- Tailwind CSS
- CSS

## API

TVMaze API

Documentation:

```
https://www.tvmaze.com/api
```

## Libraries

- React Router DOM
- Fetch API

---

# 📂 Project Structure

```
movie-explorer/

│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── MovieModal.jsx
│   │   ├── SearchBar.jsx
│   │   └── Loading.jsx
│   │
│   ├── hooks/
│   │   └── useMovies.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── services/
│   │   └── movieApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation Guide

## 1. Clone Repository

```bash
git clone your-repository-url
```

---

## 2. Open Project Folder

```bash
cd movie-explorer
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Run Development Server

```bash
npm run dev
```

Application will run on:


https://movie-explorer-ivory-six.vercel.app/

---

# 📡 API Documentation

## Get All Shows

Endpoint:

```
GET https://api.tvmaze.com/shows
```

Example:

```javascript
fetch("https://api.tvmaze.com/shows")
```

---

## Search Shows

Endpoint:

```
GET https://api.tvmaze.com/search/shows?q=query
```

Example:

```javascript
fetch(
"https://api.tvmaze.com/search/shows?q=friends"
)
```

---

# 📱 Responsive Design

The application works across all devices.

## Mobile

- Single column layout
- Stacked elements
- Touch-friendly buttons

## Tablet

- Two-column movie grid

## Desktop

- Three/four-column movie grid
- Optimized spacing

---

# ⚛️ React Features Used

## Components

Reusable components:

- Navbar
- Hero
- Footer
- MovieCard
- MovieModal
- SearchBar

---

## Hooks

Built-in React hooks:

- useState
- useEffect

---

## State Management

Application state manages:

- Movie list
- Search query
- Selected movie
- Modal visibility
- Loading status

---

# 🌟 Future Improvements

Possible future features:

- User authentication
- Favorite movie list
- Dark mode
- Pagination
- Advanced filtering
- Movie categories
- Better animations

---

# 👨‍💻 Author

Your Name

GitHub:

```
https://github.com/yourusername
```

---

# 📄 License

This project is created for educational purposes.

```
© 2026 Movie Explorer
```
