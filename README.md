# Movie App (React)

A modern and performant movie exploration app built with React. It lets users discover new titles through advanced search, filtering, and a personalized watchlist.

![App Demo](./screenshots/app-demo.png)

## Key Features

- **Dynamic Exploration:** Real-time title search and genre filtering.
- **Sorting System:** Sort alphabetically or by rating to find top movies quickly.
- **Personal Watchlist:** Save favorites in localStorage for persistence between sessions.
- **Modular Architecture:** Business logic separated from UI via custom hooks and utility functions.
- **Responsive UI/UX:** Adaptive CSS Grid layout with loading, error, and empty states.
- **Data Validation:** Automatic checks for data integrity and image availability before rendering.

## Technologies Used

- **Core:** React 18+ (Hooks: useState, useEffect, useMemo)
- **Styling:** Plain CSS with modular structure
- **Routing:** React Router for navigation between Home and Watchlist pages
- **Build Tool:** Vite for a fast development environment
- **Storage:** Browser LocalStorage API for watchlist persistence

## Project Structure

```plaintext
src/
├── components/       # Reusable UI components (Navbar, CardList, MovieCard)
├── hooks/            # Fetching and state logic (useMovies)
├── pages/            # Main views: Home and Watchlist
├── utils/            # Pure functions for filtering, sorting, validation
├── data/             # Config files (genres, static data)
└── App.css           # Global styles and main flexbox layout
```

## Getting Started

### Requirements

- Node.js (LTS)
- npm

### Steps

1. Clone the repository:

```bash
git clone https://github.com/catalina-constantin/Movie-App.git
```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the app:
   - Visit `http://localhost:5173` in your browser.

## License

This project is for educational purposes.
