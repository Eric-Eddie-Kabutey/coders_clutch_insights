// Testimonial type
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

// Stat item type
interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

// Feature item type
interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Theme type
type Theme = "light" | "dark" | "system";

// Section props type
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

// Button props type
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// Badge props type
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary" | "destructive";
}
