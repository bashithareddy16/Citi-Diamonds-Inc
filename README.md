# Citi Diamonds Inc

## Documentation

### API Endpoints

1. **GET /api/diamonds**  
   Retrieves a list of diamonds available in the store.  
   **Response:**  
   ```json
   [
       {
           "id": "1",
           "name": "Diamond A",
           "price": "1000",
           "location": "Store 1"
       },
       ...
   ]
   ```

2. **POST /api/diamonds**  
   Adds a new diamond to the inventory.  
   **Request Body:**  
   ```json
   {
       "name": "Diamond B",
       "price": "1200",
       "location": "Store 2"
   }
   ```  
   **Response:**  
   ```json
   {
       "message": "Diamond added successfully"
   }
   ```

### Store Locations

- **Store 1**: 123 Main St, City, Country
- **Store 2**: 456 Elm St, City, Country

### Installation Instructions

1. Clone the repository:  
   ```bash
   git clone https://github.com/bashithareddy16/Citi-Diamonds-Inc.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd Citi-Diamonds-Inc
   ```  
3. Install dependencies:  
   ```bash
   npm install
   ```

### Deployment Guides

1. Build the project:  
   ```bash
   npm run build
   ```  
2. Run the application:  
   ```bash
   npm start
   ```

### Project Structure

```
Citi-Diamonds-Inc/
├── src/
│   ├── api/
│   ├── components/
│   └── styles/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── package.json
└── README.md
```

---

*Documentation generated on 2026-04-16 20:35:46 (UTC)*