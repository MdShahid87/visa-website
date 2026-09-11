# ✈️ JOB FINDER — Visa & Travel Assistance

A modern, responsive visa and travel assistance website built for **JOB FINDER**, a visa specialist based in Lucknow, India.

The website helps customers explore visa services, check basic visa requirements, explore supported destinations, and contact the visa specialist directly through WhatsApp.

---

## 🌐 About the Project

**JOB FINDER** is a professional visa and travel assistance platform focused on providing customers with a simple way to understand visa-related services and start an enquiry.

The website is designed with a premium, editorial-style interface inspired by modern consultancy and travel websites.

### Main Objectives

- Provide clear visa service information
- Help visitors find the right visa category
- Showcase supported travel destinations
- Provide direct WhatsApp communication
- Provide a professional online presence
- Create a responsive experience across desktop, tablet, and mobile

---

## ✨ Features

### 🛂 Visa Services

The website currently provides information for:

- Tourist Visa
- Work Permit
- Umrah Visa
- Air Ticket
- Emigration
- Visa Stamping

### 🌍 Destinations

Supported destination pages include:

- 🇸🇦 Saudi Arabia
- 🇦🇪 United Arab Emirates
- 🇶🇦 Qatar
- 🇴🇲 Oman
- 🇰🇼 Kuwait
- 🇧🇭 Bahrain

### 📋 Visa Finder

The Visa Finder allows visitors to select:

- Destination
- Visa Type

and continue their enquiry through WhatsApp.

### 💬 WhatsApp Integration

Customers can directly contact the visa specialist through WhatsApp using pre-filled enquiry messages.

### 📱 Responsive Design

The website is designed for:

- Desktop
- Laptop
- Tablet
- Mobile

### 🎨 Premium UI

The interface uses:

- Large editorial typography
- High-contrast sections
- Premium cards
- Smooth animations
- Responsive navigation
- Modern CTA buttons
- Clean spacing and layouts

---

# 🛠️ Tech Stack

| Technology             | Purpose               |
| ---------------------- | --------------------- |
| Next.js                | React framework       |
| React                  | UI development        |
| TypeScript             | Type-safe development |
| Tailwind CSS           | Styling               |
| Framer Motion          | Animations            |
| Lucide React           | Icons                 |
| Next.js App Router     | Routing               |
| WhatsApp Click-to-Chat | Customer enquiries    |

---

# 📁 Project Structure

```text
visa-website/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── check-eligibility/
│   │   └── page.tsx
│   │
│   ├── visa-services/
│   │   ├── page.tsx
│   │   ├── tourist-visa/
│   │   │   └── page.tsx
│   │   ├── work-permit/
│   │   │   └── page.tsx
│   │   ├── umrah-visa/
│   │   │   └── page.tsx
│   │   ├── air-ticket/
│   │   │   └── page.tsx
│   │   ├── emigration/
│   │   │   └── page.tsx
│   │   └── visa-stamping/
│   │       └── page.tsx
│   │
│   ├── destinations/
│   │   ├── page.tsx
│   │   ├── saudi-arabia/
│   │   │   └── page.tsx
│   │   ├── uae/
│   │   │   └── page.tsx
│   │   ├── qatar/
│   │   │   └── page.tsx
│   │   ├── oman/
│   │   │   └── page.tsx
│   │   ├── kuwait/
│   │   │   └── page.tsx
│   │   └── bahrain/
│   │       └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── faq/
│   │   └── page.tsx
│   │
│   ├── privacy-policy/
│   │   └── page.tsx
│   │
│   ├── terms/
│   │   └── page.tsx
│   │
│   └── disclaimer/
│       └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── VisaFinder.tsx
│   ├── Process.tsx
│   ├── Destinations.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   ├── WhatsAppButton.tsx
│   └── MobileBottomBar.tsx
│
├── data/
│   ├── services.ts
│   ├── destinations.ts
│   └── faqs.ts
│
├── lib/
│   └── whatsapp.ts
│
├── public/
│   ├── images/
│   └── logo/
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

---

# 📄 Main Pages

## Home

```text
/
```

The homepage includes:

- Hero section
- Visa requirements CTA
- WhatsApp CTA
- Direct assistance
- Visa Finder
- Services
- Process
- Destinations
- FAQ
- Final CTA

---

## Check Eligibility

```text
/check-eligibility
```

Provides a simple starting point for customers who want help understanding their visa requirement.

---

## Visa Services

```text
/visa-services
```

### Individual Service Pages

```text
/visa-services/tourist-visa
/visa-services/work-permit
/visa-services/umrah-visa
/visa-services/air-ticket
/visa-services/emigration
/visa-services/visa-stamping
```

---

## Destinations

```text
/destinations
```

### Individual Destination Pages

```text
/destinations/saudi-arabia
/destinations/uae
/destinations/qatar
/destinations/oman
/destinations/kuwait
/destinations/bahrain
```

---

## Other Pages

```text
/about
/contact
/faq
/privacy-policy
/terms
/disclaimer
```

---

# 💬 WhatsApp Integration

The website uses WhatsApp Click-to-Chat for direct customer communication.

Current business WhatsApp number:

```text
+91 78976 38334
```

The WhatsApp link follows this structure:

```text
https://wa.me/917897638334?text=YOUR_MESSAGE
```

Example:

```tsx
const message = "Hello Abdur Rhaman, I need help with a Tourist Visa.";

const whatsappLink = `https://wa.me/917897638334?text=${encodeURIComponent(
  message,
)}`;
```

The visitor can click the button and continue the conversation directly in WhatsApp.

> **Note:** The website cannot automatically send messages on behalf of users. The visitor must press the Send button inside WhatsApp.

On desktop, WhatsApp Web may require the visitor to log in.

---

# 🎨 Design System

The website follows a premium visa consultancy visual identity.

### Primary Colors

| Name      | Hex       |
| --------- | --------- |
| Navy      | `#0b1f3a` |
| Blue      | `#1769e1` |
| Gold      | `#d4a72c` |
| Off White | `#f6f7f5` |
| Grey      | `#667085` |

### Design Style

- Premium
- Minimal
- Professional
- Editorial
- High contrast
- Responsive
- Travel-focused
- Clean typography
- Modern cards
- Smooth interactions

---

# ⚡ Getting Started

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project:

```bash
cd visa-website
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

Open the website in your browser:

```text
http://localhost:3000
```

If port `3000` is already in use, Next.js may automatically use another available port.

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

If the build succeeds, start the production server:

```bash
npm run start
```

---

# 🔧 Updating Website Content

## Services

Edit:

```text
data/services.ts
```

---

## Destinations

Edit:

```text
data/destinations.ts
```

---

## FAQs

Edit:

```text
data/faqs.ts
```

---

## WhatsApp Messages

WhatsApp configuration can be found in:

```text
lib/whatsapp.ts
```

Some pages also contain direct WhatsApp links.

If the business number changes, search the entire project for:

```text
917897638334
```

and update all relevant occurrences.

---

# 🧩 Components

## Navbar

```text
components/Navbar.tsx
```

Contains:

- Logo
- Home
- Visa Services
- Destinations
- About
- Contact
- FAQ
- WhatsApp
- Check Eligibility

---

## Hero

```text
components/Hero.tsx
```

The homepage hero section contains:

- Main headline
- Visa requirements CTA
- WhatsApp CTA
- Travel visual
- Framer Motion animation

---

## Visa Finder

```text
components/VisaFinder.tsx
```

Allows users to select:

- Destination
- Visa Type

and continue their enquiry through WhatsApp.

---

## Services

```text
components/Services.tsx
```

Displays the available visa and travel services.

---

## Destinations

```text
components/Destinations.tsx
```

Displays supported destination countries.

---

## FAQ

```text
components/FAQ.tsx
```

Provides expandable frequently asked questions.

---

## Footer

```text
components/Footer.tsx
```

Contains:

- Business information
- Navigation
- Contact information
- WhatsApp CTA
- Legal links

---

# 📱 Mobile Experience

The project includes a responsive mobile navigation and mobile bottom action bar.

Mobile navigation:

```text
components/Navbar.tsx
```

Mobile bottom actions:

```text
components/MobileBottomBar.tsx
```

---

# ✨ Animations

Framer Motion is used for selected entrance and visual animations.

Main implementation:

```text
components/Hero.tsx
```

---

# 🔍 SEO

Global metadata is configured in:

```text
app/layout.tsx
```

Current SEO keywords include:

```text
visa consultant Lucknow
visa specialist Lucknow
tourist visa Lucknow
work permit Lucknow
Umrah visa Lucknow
visa services Lucknow
```

### Recommended Future SEO Improvements

- XML Sitemap
- Robots.txt
- Organization Schema
- LocalBusiness Schema
- Service Schema
- FAQ Schema
- Open Graph images
- Page-specific metadata
- Destination-specific SEO pages
- Visa guide articles
- Google Search Console
- Google Analytics

---

# 🔐 Security & Privacy

The website does not directly collect or store sensitive passport or visa documents.

Any future document-upload functionality should use:

- Secure storage
- Authentication
- Access control
- Encryption
- Server-side validation
- Appropriate privacy policies

---

# ⚠️ Visa Information Disclaimer

Visa requirements, immigration rules, fees, processing times, and eligibility may change and can vary based on nationality, destination, visa category, and individual circumstances.

Information provided on this website is intended for general assistance and should not be considered a guarantee of visa approval.

Customers should verify current requirements with the relevant government or immigration authority before making travel or visa decisions.

---

# 🚀 Future Improvements

Planned or possible future features include:

- [ ] Advanced visa eligibility checker
- [ ] Customer enquiry management
- [ ] Application status tracking
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Blog / Visa Guides
- [ ] Destination Guides
- [ ] Customer Testimonials
- [ ] Document Checklist Generator
- [ ] Appointment Booking
- [ ] Multi-language Support
- [ ] CRM Integration
- [ ] Secure Database
- [ ] Customer Dashboard

---

# 📈 Project Goals

The long-term goal of this project is to build a trustworthy online platform for visa and travel assistance that provides:

1. A professional digital presence
2. Easy customer enquiries
3. Clear service information
4. Destination-specific information
5. Direct WhatsApp communication
6. Strong SEO visibility
7. A scalable foundation for future online visa services

---

# 👤 Business Information

**JOB FINDER**

Visa Specialist

**Location:**  
Lucknow, Uttar Pradesh, India

**WhatsApp:**  
+91 78976 38334

---

# 📄 License

This project is developed for the JOB FINDER business website.

The business content, branding, design assets, copy, and other proprietary materials should not be reused for another commercial project without appropriate permission.

---

## ⭐ Built With

Built using:

**Next.js + TypeScript + Tailwind CSS + Framer Motion**

Made for **JOB FINDER — Visa & Travel Assistance**.
