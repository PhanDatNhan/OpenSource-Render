require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

//mongodb+srv://phandatnhan2811:LdapuUFX7YrzEq9l@cluster1-phannhan.1lsmjgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1-phannhan
//mongodb://127.0.0.1:27017/contactFormDB
mongoose.connect(process.env.MONGODB_URI);
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    time: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(200).json({ message: 'Liên hệ đã được lưu thành công!' });
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lưu liên hệ.' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
