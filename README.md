# 🌟 Professional Portfolio Website

A modern, responsive, and fully functional portfolio website built with HTML, CSS, and JavaScript. Showcase your work, skills, and projects in style!

**🔗 Live Website:** [https://engrfarazhashmikhi.github.io/](https://engrfarazhashmikhi.github.io/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### Core Functionality
- ✅ **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ✅ **Smooth Navigation** - Sticky navbar with smooth scroll to sections
- ✅ **Hero Section** - Eye-catching introduction with animated background shapes
- ✅ **About Section** - Professional bio with animated statistics counters
- ✅ **Projects Showcase** - 6 featured projects with tags and descriptions
- ✅ **Skills Display** - Three skill categories with animated progress bars
- ✅ **Contact Form** - Fully functional form with validation and notifications
- ✅ **Social Media Links** - Footer with GitHub, LinkedIn, Twitter, and CodePen
- ✅ **Dark Mode** - Optional dark mode toggle (can be enabled)
- ✅ **Scroll-to-Top** - Floating button to quickly return to top

### Interactive Elements
- 🎬 **Animations** - Smooth fade-ins, slide effects, and floating shapes
- 🎨 **Parallax Effect** - Background shapes move with scroll
- ⌨️ **Keyboard Navigation** - Full keyboard accessibility support
- 📱 **Mobile Menu** - Hamburger menu for mobile devices
- 🔔 **Toast Notifications** - Success/error messages for form submission
- 🎯 **Active Link Highlighting** - Navigation highlights current section
- 💬 **Typed Effect** - Hero subtitle types out letter by letter

### Design Features
- 🎨 Modern gradient color scheme (Purple & Pink)
- 📐 Professional typography hierarchy
- ✨ Smooth transitions and hover effects
- 🌈 Custom styled scrollbar
- 💎 Shadow effects for depth and dimension

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Icons** | Font Awesome 6.4.0 |
| **Design** | CSS Grid, Flexbox, CSS Variables |
| **Animations** | CSS Keyframes, JavaScript Intersection Observer |
| **Hosting** | GitHub Pages |

---

## 📁 Project Structure

```
engrfarazhashmikhi.github.io/
│
├── 📄 index.html          # Main HTML file with page structure
├── 🎨 styles.css          # All CSS styling and animations
├── ⚙️ script.js           # JavaScript functionality and interactions
├── 📖 README.md           # This file
├── 📋 LICENSE             # GPL 3.0 License
└── 📦 .gitignore          # Git ignore file
```

### File Descriptions

#### `index.html` (320 lines)
- Complete HTML structure with semantic markup
- Navigation bar with responsive hamburger menu
- Hero section with animated background
- About section with statistics
- Projects grid showcase
- Skills section with progress bars
- Contact form
- Footer with social links

#### `styles.css` (726 lines)
- CSS custom properties (CSS variables) for theming
- Responsive design with 2 media query breakpoints
- Gradient backgrounds and animations
- Mobile-first responsive layout
- Accessible color contrast ratios
- Custom scrollbar styling

#### `script.js` (487 lines)
- Mobile menu toggle functionality
- Smooth scroll navigation
- Intersection Observer for animations
- Form validation and submission handling
- Navbar active link highlighting
- Scroll-to-top button
- Skill progress bar animations
- Typed effect for hero subtitle
- Counter animations for statistics
- Parallax scroll effect
- Dark mode toggle (optional)
- Keyboard accessibility support

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Font Awesome icons)
- Git (optional, for version control)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/engrfarazhashmikhi/engrfarazhashmikhi.github.io.git
   cd engrfarazhashmikhi.github.io
   ```

2. **Open in Browser**
   - Simply double-click `index.html` to open locally
   - Or use a live server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

3. **View Live**
   - Visit: [https://engrfarazhashmikhi.github.io/](https://engrfarazhashmikhi.github.io/)

---

## 💻 Usage

### Navigation
- Use the **sticky navbar** to jump to different sections
- Click any **navigation link** to smoothly scroll to that section
- On mobile, use the **hamburger menu** to toggle navigation
- Press **Escape** to close the mobile menu

### Interactions
- **Hover over project cards** to see lift effect
- **Scroll down** to trigger section animations
- **Submit the contact form** to see validation
- **Click the scroll-to-top button** (appears after scrolling 300px) to jump to top

### Form Submission
The contact form includes:
- Name field validation
- Email field validation (proper email format)
- Message textarea validation
- Success notification after submission
- Error notifications for invalid input

---

## ✏️ Customization

### Update Your Information

#### 1. **Personal Details** (index.html)
```html
<!-- Line 33-34: Update hero title and subtitle -->
<h1 class="hero-title">Hi, I'm Your Name</h1>
<p class="hero-subtitle">Your Title</p>

<!-- Line 272-282: Update contact information -->
<p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
<p><a href="tel:+1234567890">Your Phone Number</a></p>
<p>Your City, Country</p>
```

#### 2. **About Section** (index.html)
```html
<!-- Lines 50-52: Update your bio -->
<p>Your professional biography and background...</p>
```

#### 3. **Projects** (index.html, lines 77-159)
Replace project cards with your actual projects:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Project Name</h3>
    <p>Your project description...</p>
    <div class="project-tags">
        <span class="tag">Technology1</span>
        <span class="tag">Technology2</span>
    </div>
    <a href="your-project-link" class="project-link">View Project</a>
</div>
```

#### 4. **Skills** (index.html, lines 169-257)
Update your skill categories and proficiency levels:
```html
<div class="skill-item">
    <span>Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

#### 5. **Social Media Links** (index.html, lines 307-311)
```html
<a href="https://github.com/your-username" class="social-link">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/your-profile" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
<!-- Add more social links as needed -->
```

### Customize Colors

Edit CSS variables in `styles.css` (lines 2-13):
```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Gradient end */
    --accent-color: #f093fb;       /* Accent color */
    --dark-bg: #0f0f1e;            /* Dark background */
    --light-bg: #f8f9fa;           /* Light background */
    --text-dark: #1a1a2e;          /* Dark text */
    --text-light: #ffffff;         /* Light text */
}
```

### Enable Dark Mode Toggle

In `script.js`, uncomment line 410:
```javascript
// Uncomment the next line to enable the theme toggle button
document.body.appendChild(themeToggle);  // <- Uncomment this
```

### Integration

#### Contact Form Backend
Replace the simulated form submission (lines 63-97 in script.js) with:

**Using Formspree:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" class="submit-button">Send Message</button>
</form>
```

**Using EmailJS:**
```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
        .then(() => {
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        })
        .catch(() => {
            showNotification('Failed to send message', 'error');
        });
});
```

---

## 🌐 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari | ✅ Full | Latest |
| Edge | ✅ Full | Latest |
| Opera | ✅ Full | Latest |
| IE 11 | ❌ Not Supported | - |

---

## 📱 Responsive Breakpoints

- **Mobile:** 480px and below
- **Tablet:** 768px and below
- **Desktop:** 1200px and above

---

## 🎯 Performance Optimization

- ✅ Uses Intersection Observer for efficient animations
- ✅ Passive event listeners for scroll performance
- ✅ Lazy loading support for images
- ✅ Debounced scroll events
- ✅ CSS Grid and Flexbox for optimal layouts
- ✅ Minimized reflows and repaints

---

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus visible outlines
- ✅ Proper color contrast ratios
- ✅ Screen reader friendly

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests for any improvements.

---

## 📞 Contact

**Faraz Hashmikhi**
- 📧 Email: [faraz@example.com](mailto:faraz@example.com)
- 📱 Phone: [+1 (234) 567-890](tel:+1234567890)
- 📍 Location: Your City, Country
- 🔗 GitHub: [@engrfarazhashmikhi](https://github.com/engrfarazhashmikhi)

---

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Typography
- Modern CSS techniques and best practices
- Open-source community

---

## 📝 Changelog

### Version 1.0 (Current)
- ✅ Initial portfolio release
- ✅ Fully responsive design
- ✅ Complete interactivity
- ✅ Form validation
- ✅ Dark mode toggle (optional)
- ✅ Accessibility features

---

## 🔮 Future Enhancements

- [ ] Add blog section
- [ ] Integrate CMS for content management
- [ ] Add image gallery with lightbox
- [ ] Implement contact form backend
- [ ] Add multilingual support
- [ ] SEO optimization
- [ ] PWA capabilities

---

**Made with ❤️ by Faraz Hashmikhi**

**Last Updated:** May 14, 2026

---

## Quick Links

- 🌐 [Live Portfolio](https://engrfarazhashmikhi.github.io/)
- 📂 [Repository](https://github.com/engrfarazhashmikhi/engrfarazhashmikhi.github.io)
- 📘 [Documentation](#)
- 🐛 [Report Issues](https://github.com/engrfarazhashmikhi/engrfarazhashmikhi.github.io/issues)

