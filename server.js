const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const app = express();

// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json'); // You'll need to add your Firebase service account key
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// 1. Create a new ride request
app.post('/api/ride-request', async (req, res) => {
    try {
        const { userId, pickup, dropoff, timestamp, status } = req.body;
        
        const rideRef = await db.collection('rides').add({
            userId,
            pickup,
            dropoff,
            timestamp,
            status: 'pending', // pending, accepted, completed, cancelled
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        res.status(201).json({ 
            success: true, 
            rideId: rideRef.id,
            message: 'Ride request created successfully' 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 2. Get available ride requests (for drivers)
app.get('/api/available-rides', async (req, res) => {
    try {
        const ridesSnapshot = await db.collection('rides')
            .where('status', '==', 'pending')
            .get();

        const rides = [];
        ridesSnapshot.forEach(doc => {
            rides.push({ id: doc.id, ...doc.data() });
        });

        res.json({ success: true, rides });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 3. Accept ride request (by driver)
app.post('/api/accept-ride', async (req, res) => {
    try {
        const { rideId, driverId, driverName, driverPhone } = req.body;
        
        await db.collection('rides').doc(rideId).update({
            driverId,
            driverName,
            driverPhone,
            status: 'accepted',
            acceptedAt: admin.firestore.FieldValue.serverTimestamp()
        });

        res.json({ 
            success: true, 
            message: 'Ride accepted successfully' 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 4. Get ride details
app.get('/api/ride/:rideId', async (req, res) => {
    try {
        const rideDoc = await db.collection('rides').doc(req.params.rideId).get();
        
        if (!rideDoc.exists) {
            return res.status(404).json({ success: false, message: 'Ride not found' });
        }

        res.json({ 
            success: true, 
            ride: { id: rideDoc.id, ...rideDoc.data() } 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 5. Update ride status
app.put('/api/ride/:rideId/status', async (req, res) => {
    try {
        const { status } = req.body;
        
        await db.collection('rides').doc(req.params.rideId).update({
            status,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });

        res.json({ 
            success: true, 
            message: 'Ride status updated successfully' 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 