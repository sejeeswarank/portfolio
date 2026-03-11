# Sejeeswaran K — Portfolio

Built with **Next.js 14**, **TypeScript**, and **TailwindCSS**.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your GitHub repo
5. Click **Deploy** — done! ✅

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── data.ts          ← Edit your projects/skills/certs here
│   ├── globals.css
│   ├── layout.tsx       ← SEO metadata here
│   └── page.tsx
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## ✏️ Customization

- **Add/edit projects** → `app/data.ts`
- **Change SEO title/description** → `app/layout.tsx`
- **Change colors** → `tailwind.config.ts` and `globals.css`
