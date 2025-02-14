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
    rollNumber: { type: String, unique: true },
    subjects: [String],
    address: {
        street: String,
        city: String,
        zip: String
    }
});

const Student = mongoose.model('Student', studentSchema);

app.post('/api/students', async (req, res) => {
    const { name, age, gender, rollNumber, subjects, address } = req.body;
    const student = new Student({
        name,
        age,
        gender,
        rollNumber,
        subjects,
        address
    });
    try {
        await student.save();
        res.status(201).json({ message: 'Student created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }
});

app.get('/api/students/:rollNumber', async (req, res) => {
    const { rollNumber } = req.params;
    try {
        const student = await Student.findOne({ rollNumber });
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }
});

app.put('/api/students/:rollNumber', async (req, res) => {
    const { rollNumber } = req.params;
    const { name, age, gender, subjects, address } = req.body;
    try {
        const student = await Student.findOneAndUpdate(
            { rollNumber },
            { name, age, gender, subjects, address },
            { new: true }
        );
        if (student) {
            res.json({ message: 'Student updated successfully', student });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error });
    }
});

app.delete('/api/students/:rollNumber', async (req, res) => {
    const { rollNumber } = req.params;
    try {
        const student = await Student.findOneAndDelete({ rollNumber });
        if (student) {
            res.json({ message: 'Student deleted successfully' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});