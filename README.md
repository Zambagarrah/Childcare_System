# Marianna Childcare Frontend

A modular, emotionally intelligent React frontend for managing childcare services designed for parents, caregivers, and administrators. Built for youth labs, onboarding kits, and scalable innovation.

## Project Goals

- Empower parents, caregivers, and admins with clear, role-based tools.
- Showcase emotionally intelligent UX for health and education systems.
- Teach modular React development through reusable components and commits.
- Support youth labs with remixable, documented code.

## Tech Stack

- React + Vite.
- Yarn.
- React Router.
- LocalStorage (demo persistence).
- Custom CSS (health-themed palette).
- Modular layout with `<Card />`, `<Sidebar />`, and `<DashboardLayout />`.

## Setup Instructions

```bash
# Clone the repo
git clone https://github.com/Zambagarrah/Childcare_System.git
cd Childcare_System

# Install dependencies
yarn install

# Start development server
yarn dev
```

## Folder Structure

```
src/
├── assets/              # Images and icons
├── components/
│   ├── Auth/            # Login and Register
│   ├── Dashboard/       # Role-based dashboards
│   ├── ChildProfile/    # Editable child info
│   ├── Attendance/      # Weekly tracker
│   ├── Messaging/       # Caregiver-parent threads
│   ├── Billing/         # Invoice history
│   ├── Reports/         # Admin analytics
│   └── UI/              # Reusable layout: Card, Sidebar, DashboardLayout
├── pages/               # Home page
├── routes/              # AppRoutes.jsx
├── styles/              # theme.css
├── App.jsx              # Root app
└── main.jsx             # Entry point
```

## Role-Based Walkthroughs

### Parent

- **Dashboard**: child summary, attendance, messages, billing.
- **Profile**: editable name, age, health, milestones.
- **Messaging**: reply to caregiver.
- **Billing**: view invoices.

### Caregiver

- **Dashboard**: class roster, attendance, health notes.
- **Attendance**: check-in/out per day.
- **Messaging**: reply to parent.

### Admin

- **Dashboard**: center stats, staff list.
- **Reports**: filter attendance, view enrollment.
- **Export**: placeholder for *PDF/Excel*.

## Teaching Hooks

- Each component is modular and commented for clarity.
- Commit messages follow: `feat:`, `fix:`, `refactor:`, `style:`, `test:`.
- Layout uses reusable wrappers (`<Card />`, `<DashboardLayout />`).
- Responsive design with health-themed palette.
- LocalStorage used for demo persistence (no backend required).

## Future Enhancements

- Payment gateway integration (M-Pesa, Stripe).
- Backend API for real data.
- Role-based authentication.
- Swahili localization.

## License

MIT reusable for youth, education, and community innovation.

---