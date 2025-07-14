# AI Agency Frontend

A modern Next.js 15 frontend application showcasing AI solutions for businesses, including AI chatbots, automation workflows, and voice receptionist services.

## 🚀 Features

- **AI Chatbots**: Interactive chatbot demonstrations with real-time messaging
- **AI Automation Workflows**: Visual workflow builder with step-by-step execution
- **AI Voice Receptionist**: Voice call simulation with live transcript
- **Modern UI**: Built with Tailwind CSS and Framer Motion animations
- **Responsive Design**: Optimized for all device sizes
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Reusable UI components with Radix UI primitives

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── demo/              # Demo page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
└── styles/               # Component styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ai-agency/frontend
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Primary blue theme with semantic colors
- **Typography**: Consistent font hierarchy
- **Spacing**: 8px grid system
- **Components**: Atomic design principles
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Component Architecture

### UI Components

Base components following atomic design:

- `Button` - Multiple variants and sizes
- `Card` - Flexible content containers
- `Input` - Form inputs with validation states

### Layout Components

Page structure components:

- `Header` - Navigation and branding
- `Footer` - Links and company information

### Feature Components

Service-specific interactive demos:

- `ChatbotDemo` - Interactive chat interface
- `WorkflowBuilder` - Visual automation workflow
- `VoiceDemo` - Voice call simulation

## 📱 Pages

- **Home** (`/`) - Landing page with hero and services overview
- **Demo** (`/demo`) - Interactive demonstrations of all AI services
- **Services** (`/services/*`) - Individual service pages (planned)
- **Contact** (`/contact`) - Contact form (planned)
- **Pricing** (`/pricing`) - Service pricing (planned)

## 🎯 Key Features

### AI Chatbot Demo

- Real-time messaging interface
- Typing indicators
- Message history
- Responsive design

### AI Automation Workflow

- Visual workflow builder
- Step-by-step execution
- Progress indicators
- Interactive controls

### AI Voice Receptionist

- Call simulation
- Live transcript
- Call duration tracking
- Mute/unmute functionality

## 🔮 Future Enhancements

- [ ] Service-specific detail pages
- [ ] Contact form with validation
- [ ] Pricing calculator
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Real API integrations
- [ ] Multi-language support
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please contact:

- Email: hello@aiagency.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the AI Agency team
