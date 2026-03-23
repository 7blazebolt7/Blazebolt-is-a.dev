# حلقتي - Quran Circle Management Platform

A modern, comprehensive web platform for managing Quran memorization circles (حلقات القرآن). Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Student Progress Tracking**: Daily memorization and revision logging with minimal clicks
- **Student Public Profiles**: Shareable links for each student (no login required)
- **Learning Plans**: Customizable daily targets for memorization and revision
- **Academic Calendar**: Automatic schedule generation based on term dates
- **Reports & Analytics**: Daily, weekly, and cumulative performance reports
- **Multi-device Access**: Fully responsive design for mobile, tablet, and desktop

### User Roles
1. **Supervisor Dashboard**
   - Overview of all students and teachers
   - Student management (CRUD operations)
   - Bulk progress entry
   - Comprehensive reports and analytics
   - Calendar management

2. **Teacher Dashboard**
   - Quick progress entry for assigned students
   - Daily summary view
   - Weekly progress tracking
   - Student performance monitoring

3. **Student Public Profile** (No login required)
   - Personal progress visualization
   - Weekly achievement tracking
   - Streak counter
   - Achievement badges

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts
- **Date Handling**: date-fns

## Design System

### Color Palette
- **Primary**: Deep Indigo (#4f46e5) - represents trust and knowledge
- **Accent**: Gold/Amber (#f59e0b) - represents achievement and excellence
- **Success**: Emerald (#10b981) - represents completion and progress
- **Background**: Slate (#f8fafc) - clean, modern aesthetic

### Key Design Principles
- RTL (Right-to-Left) support for Arabic
- Glass morphism effects
- Smooth animations and transitions
- Mobile-first responsive design
- Islamic geometric patterns as subtle backgrounds

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quran-circle-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials
- **Supervisor**: supervisor@center.com (any password)
- **Teacher**: teacher@center.com (any password)

## Project Structure

```
quran-circle-platform/
├── app/
│   ├── (dashboard)/
│   │   ├── supervisor/     # Supervisor dashboard routes
│   │   │   ├── page.tsx    # Dashboard overview
│   │   │   ├── students/   # Student management
│   │   │   ├── progress/   # Bulk progress entry
│   │   │   ├── reports/    # Analytics and reports
│   │   │   └── calendar/   # Academic calendar
│   │   └── teacher/        # Teacher dashboard routes
│   │       └── page.tsx    # Teacher dashboard
│   ├── student/            # Public student profile
│   ├── login/              # Authentication
│   ├── page.tsx            # Landing page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── avatar.tsx
│   └── dashboard/          # Dashboard-specific components
│       ├── sidebar.tsx
│       ├── stats-card.tsx
│       ├── progress-ring.tsx
│       └── student-card.tsx
├── lib/
│   ├── utils.ts            # Utility functions
│   └── mock-data.ts        # Mock data for demo
├── types/
│   └── index.ts            # TypeScript types
├── public/                 # Static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Key Features Explained

### 1. Student Progress Tracking
- Teachers can log daily memorization (in lines) and revision (in pages)
- Quick entry interface with sliders for rapid input
- Bulk entry mode for supervisors
- Notes field for each entry

### 2. Public Student Profiles
- Each student gets a unique shareable link
- No login required for viewing
- Shows:
  - Weekly progress visualization
  - Current streak
  - Achievement badges
  - Historical performance

### 3. Reports & Analytics
- Weekly progress charts
- Top performers leaderboard
- Attendance tracking
- Completion rate calculations
- Exportable reports

### 4. Academic Calendar
- Visual calendar with events
- Working days configuration
- Holiday management
- Event types: Exams, Meetings, Ceremonies

## Customization

### Changing Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your custom colors
  },
  accent: {
    // Your custom colors
  }
}
```

### Adding New Features
1. Create new page in appropriate directory
2. Add route to sidebar navigation
3. Update types in `types/index.ts`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
```

Output will be in `.next/` directory.

## Future Enhancements

- [ ] Real-time notifications
- [ ] WhatsApp integration for parents
- [ ] Mobile app (React Native)
- [ ] Payment integration
- [ ] Advanced AI analytics
- [ ] Gamification features
- [ ] Multi-language support (English)

## License

MIT License - feel free to use for your own projects.

## Support

For support, email support@halaqati.com or join our Discord community.

---

Built with ❤️ for the Muslim community
