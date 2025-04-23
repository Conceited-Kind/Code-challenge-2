# Bot Battlr

Bot Battlr is a React-based application where users can build their ultimate bot army by enlisting bots, managing their army, and discharging bots. The app allows users to filter and sort bots, view detailed bot specifications, and enforce rules for army composition.

---

## Features

### 1. **Bot Collection**
- Displays all available bots fetched from a JSON server.
- Users can enlist bots into their army by clicking the "Enlist" button.

### 2. **Your Bot Army**
- Displays the bots currently enlisted in the user's army.
- Users can:
  - **Release** a bot from the army.
  - **Discharge** a bot completely (removes it from both the army and the collection).

### 3. **Bot Specifications**
- Displays detailed information about a selected bot.
- Users can enlist the bot directly from the details view.

### 4. **Filter and Sort**
- **Filter**: Users can filter bots by their class (e.g., Medic, Assault, Support).
- **Sort**: Users can sort bots by attributes such as health, damage, or armor.

### 5. **Army Rules**
- Only one bot of each class can be added to the army.
- If a user tries to add a bot of a class already in the army, an alert is displayed.

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bot-battlr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server:
   ```bash
   npx json-server --watch db.json --port 8001
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173/
   ```

---

## File Structure

### Key Files
- **`src/App.jsx`**: Main application component that manages state and renders the app.
- **`src/components/YourBotArmy.jsx`**: Displays the user's enlisted bots.
- **`src/components/BotCollection.jsx`**: Displays all available bots.
- **`src/components/BotSpecs.jsx`**: Displays detailed information about a selected bot.
- **`src/components/FilterBar.jsx`**: Handles filtering bots by class.
- **`src/components/SortBar.jsx`**: Handles sorting bots by attributes.
- **`db.json`**: Mock database for bots, used by the JSON server.

---

## API Endpoints

The app uses a JSON server to simulate a backend. The following endpoints are available:

- **GET /bots**: Fetch all bots.
- **DELETE /bots/:id**: Delete a bot by its ID.

---

## How It Works

### 1. **Fetching Bots**
- Bots are fetched from the JSON server (`http://localhost:8001/bots`) when the app loads.

### 2. **Enlisting Bots**
- Users can add bots to their army by clicking the "Enlist" button in the bot collection or bot details view.
- The app enforces the rule that only one bot of each class can be added to the army.

### 3. **Releasing and Discharging Bots**
- **Release**: Removes a bot from the army but keeps it in the collection.
- **Discharge**: Removes a bot from both the army and the collection by sending a `DELETE` request to the JSON server.

### 4. **Filtering and Sorting**
- Users can filter bots by class and sort them by attributes like health, damage, or armor.

---

## Styling

The app uses CSS for styling. Key styles are defined in:
- **`src/App.css`**: Global styles for the app.
- **`src/components/*.css`**: Component-specific styles.

---

## Known Issues

- Ensure the JSON server is running on `http://localhost:8001` before starting the app.
- If the app doesn't load, check the browser console for errors.

---

## Future Enhancements

- Add persistent storage for the army using local storage or a backend.
- Improve the UI/UX with animations and better styling.
- Add more bot attributes and classes for variety.

---

## License

This project is licensed under the MIT License.
```
Let me know if you need further adjustments!