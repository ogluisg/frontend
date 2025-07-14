export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  pricing: PricingTier[];
  demoUrl?: string;
}

export interface PricingTier {
  name: string;
  price: number;
  period: "monthly" | "yearly";
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export interface ChatbotMessage {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface WorkflowStep {
  id: string;
  type: "trigger" | "action" | "condition";
  name: string;
  description: string;
  config: Record<string, any>;
}

export interface VoiceCall {
  id: string;
  duration: number;
  status: "completed" | "missed" | "transferred";
  caller: string;
  timestamp: Date;
  transcript?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "chatbot" | "automation" | "voice";
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}
