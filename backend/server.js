const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Storage & File Path for Reviews
const reviewsFilePath = path.join(__dirname, 'data', 'reviews.json');
const inquiriesLog = [];

// Helper: Read Reviews from File
const getStoredReviews = () => {
  try {
    if (fs.existsSync(reviewsFilePath)) {
      const data = fs.readFileSync(reviewsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading reviews file:', err);
  }
  return [];
};

// Helper: Save Reviews to File
const saveReviewsToFile = (reviews) => {
  try {
    const dir = path.dirname(reviewsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(reviewsFilePath, JSON.stringify(reviews, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving reviews file:', err);
  }
};

// Helper: Setup Nodemailer Transporter
const createTransporter = () => {
  if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your_app_password_here') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
  return null;
};

// Base Routes
app.get('/', (req, res) => {
  res.json({
    company: 'AS Solar',
    status: 'online',
    version: '1.0.0'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// GET /api/reviews - Get 3 to 5 Most Recent Reviews
app.get('/api/reviews', (req, res) => {
  try {
    const allReviews = getStoredReviews();
    // Sort descending by createdAt
    const sorted = allReviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    // Limit to top 5 recent reviews
    const recentReviews = sorted.slice(0, 5);

    return res.status(200).json({
      success: true,
      count: recentReviews.length,
      data: recentReviews
    });
  } catch (err) {
    console.error('Error fetching reviews:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve client reviews.'
    });
  }
});

// POST /api/reviews - Submit a New Review
app.post('/api/reviews', (req, res) => {
  try {
    const { name, location, system, text, rating } = req.body;

    if (!name || !text) {
      return res.status(400).json({
        success: false,
        message: 'Name and Review text are required.'
      });
    }

    const newReview = {
      id: Date.now().toString(),
      name,
      location: location || 'Punjab',
      system: system || 'Solar System Installation',
      text,
      rating: parseInt(rating) || 5,
      createdAt: new Date().toISOString()
    };

    const allReviews = getStoredReviews();
    allReviews.unshift(newReview); // Add to top
    saveReviewsToFile(allReviews);

    // Get updated top 5 recent reviews
    const recentReviews = allReviews
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);

    console.log('⭐️ New Review Added:', newReview);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your review has been published successfully.',
      data: recentReviews
    });
  } catch (err) {
    console.error('Error adding review:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit review. Please try again.'
    });
  }
});

// POST /api/inquiry - Send An Inquiry Endpoint
app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, Phone number, and Message details are required.'
      });
    }

    const inquiryRecord = {
      id: Date.now(),
      name,
      phone,
      email: email || 'Not Provided',
      service: service || 'Solar Installation',
      message,
      timestamp: new Date().toISOString(),
      targetEmail: process.env.COMPANY_EMAIL || 'as.solargroup@gmail.com'
    };

    inquiriesLog.push(inquiryRecord);
    console.log('📩 New Inquiry Received for AS Solar:', inquiryRecord);

    const transporter = createTransporter();
    let emailSent = false;

    if (transporter) {
      const mailOptions = {
        from: `"AS Solar Website Inquiry" <${process.env.SMTP_USER}>`,
        to: process.env.COMPANY_EMAIL || 'as.solargroup@gmail.com',
        subject: `New Client Inquiry from ${name} - AS Solar`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #d97706; margin-bottom: 5px;">AS Solar — New Client Inquiry</h2>
            <p style="color: #64748b; font-size: 14px;">Submitted via AS Solar Website</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Phone Number:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email Address:</strong> ${email || 'Not Provided'}</p>
            <p><strong>Required Service:</strong> ${service || 'Solar Installation'}</p>
            <p><strong>Message Details:</strong></p>
            <div style="background-color: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8;">AS Solar &copy; 2026 • Business Bay Kashmir Road Sialkot</p>
          </div>
        `
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log('✅ Email successfully dispatched to as.solargroup@gmail.com');
      } catch (mailErr) {
        console.error('⚠️ Could not send SMTP email:', mailErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully!',
      data: inquiryRecord,
      emailSent
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process inquiry. Please try again or contact via WhatsApp.'
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 AS-SolarSystem Backend running on http://localhost:${PORT}`);
});
