import express from 'express';
import cors from 'cors';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Define path to data file
const dataFile = path.join(__dirname, 'src/data/CurrentData.json');
const userDataFile = path.join(__dirname, 'src/data/UserData.json');

// GET endpoint to fetch all alerts
app.get('/api/alerts', async (req, res) => {
  try {
    const data = await fs.readFile(dataFile, 'utf8');
    const alerts = JSON.parse(data);
    res.json(alerts);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If file doesn't exist, create it with an empty array
      await fs.writeFile(dataFile, '[]', 'utf8');
      res.json([]);
    } else {
      console.error('Error reading alerts:', error);
      res.status(500).json({ error: 'Error reading alerts' });
    }
  }
});

// POST endpoint to add new alert
app.post('/api/alerts', async (req, res) => {
  try {
    let alerts = [];
    try {
      const data = await fs.readFile(dataFile, 'utf8');
      alerts = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    
    const newAlert = {
      id: req.body.id,
      // typeOfDisaster: req.body.typeOfDisaster,
      // typeOfAlert: req.body.typeOfAlert,
      location: req.body.location,
      disasterType: req.body.disasterType,
      alertType: req.body.alertType,
      timestamp: req.body.timestamp
    };
    
    alerts.push(newAlert);
    await fs.writeFile(dataFile, JSON.stringify(alerts, null, 2), 'utf8');
    res.status(201).json(newAlert);
  } catch (error) {
    console.error('Error saving alert:', error);
    res.status(500).json({ error: 'Error saving alert' });
  }
});

// DELETE endpoint to remove an alert
app.delete('/api/alerts/:id', async (req, res) => {
  try {
    const data = await fs.readFile(dataFile, 'utf8');
    let alerts = JSON.parse(data);
    const id = parseInt(req.params.id);
    
    alerts = alerts.filter(alert => alert.id !== id);
    await fs.writeFile(dataFile, JSON.stringify(alerts, null, 2), 'utf8');
    
    res.json({ message: 'Alert deleted successfully' });
  } catch (error) {
    console.error('Error deleting alert:', error);
    res.status(500).json({ error: 'Error deleting alert' });
  }
});

// POST endpoint to register a new user
app.post('/signup', async (req, res) => {
  try {
    let users = [];
    try {
      const data = await fs.readFile(userDataFile, 'utf8');
      users = JSON.parse(data);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    
    const newUser = {
      // id: Date.now(),
      Email: req.body.Email,
      Password: req.body.Password,
      Location: req.body.Location
    };
    
    users.push(newUser);
    await fs.writeFile(userDataFile, JSON.stringify(users, null, 2), 'utf8');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});

app.post('/login', async (req, res) => {
    try {
        // Read UserData.json file
        const userDataFile = path.join(__dirname, 'src/data/UserData.json');
        const data = await fs.readFile(userDataFile, 'utf8');
        const users = JSON.parse(data);
        
        const { Email, Password } = req.body;
        
        // Find user with matching email and password
        const user = users.find(user => 
            user.Email === Email && 
            user.Password === Password
        );

        if (user) {
            // Send back the user data on successful login
            res.json({ 
                success: true, 
                user: user  // This includes id, Email, Password, and Location
            });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 