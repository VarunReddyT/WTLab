const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.log('MongoDB connection error:', err);
});

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    rollNumber: String,
    subjects: [String],
    address: {
        street: String,
        city: String,
        zip: String
    }
});

const Student = mongoose.model('Student', studentSchema);

app.get('/api/student/:rollNumber', async (req, res) => {
    const { rollNumber } = req.params;
    45
    try {
        const student = await Student.findOne({ rollNumber });
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student details' });
    }
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});