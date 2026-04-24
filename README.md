# Accredian Enterprise Landing Page

A modern, fully responsive enterprise learning platform landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sunny-bits123/accredian-enterprise-clone.git
cd accredian-enterprise-clone

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Project Structure

```
accredian-enterprise-clone/
├── app/
│   ├── api/leads/route.ts          # Lead capture API
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Main page
│   └── globals.css                 # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── LeadForm.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## ✨ Features

### Components
- ✅ **Navbar** - Sticky navigation with mobile menu
- ✅ **Hero** - Eye-catching intro with CTAs
- ✅ **Features** - 6 feature cards with hover effects
- ✅ **Benefits** - ROI metrics and statistics
- ✅ **Pricing** - 3-tier pricing with FAQ
- ✅ **Lead Form** - Functional form with validation
- ✅ **CTA** - Final conversion section
- ✅ **Footer** - Comprehensive footer

### Design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Modern gradient design
- ✨ Smooth animations
- ♿ Accessible semantic HTML

### Technology
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hooks
- API Routes

## 🛠️ Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push

# Go to vercel.com
# Click "New Project"
# Import your GitHub repository
# Click "Deploy"
```

## 🔌 API Integration

### Lead Capture API

**Endpoint**: `POST /api/leads`

**Request**:
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Tech Corp",
  "phone": "+1 (555) 000-0000",
  "message": "Interested in enterprise plan"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "lead": {...}
}
```

## 📊 Performance

- ⚡ Optimized images
- 🔄 Lazy loading
- 📦 Code splitting
- ✨ Smooth CSS animations

## 📝 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f5576c',
}
```

### Content
Edit component files directly to customize text, images, and data.

## 📦 Dependencies

- react@18.2.0
- next@14.0.0
- typescript@5.3.0
- tailwindcss@3.3.0

## 🚀 Production Checklist

- [ ] Replace mock data with real content
- [ ] Connect lead form to database
- [ ] Set up email notifications
- [ ] Configure analytics
- [ ] Add authentication if needed
- [ ] Set up error monitoring
- [ ] Configure CDN
- [ ] Add sitemap and robots.txt
- [ ] Set up SSL certificate
- [ ] Configure domain

## 📄 License

MIT License - feel free to use for personal and commercial projects.

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**
