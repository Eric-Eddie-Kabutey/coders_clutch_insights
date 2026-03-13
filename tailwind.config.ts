import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		
  		colors: {
  			'app-primary-deep': '#00312F',
  			'app-primary': '#003B38',
  			'app-primary-medium': '#01403D',
  			'app-primary-light': '#1D646D',
  			'app-secondary': '#FF6900',
  			'app-yellow-light': '#FFF6E7',
  			'app-yellow': '#FFCB40',
  			'app-yellow-medium': '#F9DF91',
  			'app-blue': '#2E76F6',
  			'app-green': '#3EFF7A',
  			'app-green-text': '#108D52',
  			'app-gray-bg': '#F8F8F8',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card) / 0.2)',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground) / 0.6)'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent) / 0.15)',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border) / 0.1)',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			brand: {
  				DEFAULT: 'hsl(var(--brand))',
  				foreground: 'hsl(var(--brand-foreground))'
  			}
  		},
  		screens: {
  			xm: '350px',
  			xs: '475px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1530px',
  			'3xl': '2500px',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			'2xl': 'calc(var(--radius) + 4px)',
  			xl: 'calc(var(--radius) + 2px)'
  		},
  		fontFamily: {
			sans: ['GoFundMeSans', 'system-ui', 'sans-serif'],
  			code: [
  				'var(--font-mono)'
  			],
  			regular: [
  				'var(--font-body)'
  			]
  		},
  		keyframes: {
			fadeIn: {
				from: { opacity: '0', transform: 'translateY(20px)' },
				to: { opacity: '1', transform: 'translateY(0)' },
			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			appear: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(1rem)',
  					filter: 'blur(.5rem)'
  				},
  				'50%': {
  					filter: 'blur(0)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)',
  					filter: 'blur(0)'
  				}
  			},
  			'appear-zoom': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			'pulse-hover': {
  				'0%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					opacity: '0.5',
  					transform: 'translateY(-1rem)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			hover: {
  				'0%': {
  					transform: 'translateY(0) translateX(0)'
  				},
  				'50%': {
  					transform: 'translateY(-1rem) translateX(1rem)'
  				},
  				'100%': {
  					transform: 'translateY(0) translateX(0)'
  				}
  			},
  			'hover-reverse': {
  				'0%': {
  					transform: 'translateY(0) translateX(0)'
  				},
  				'50%': {
  					transform: 'translateY(1rem) translateX(1rem)'
  				},
  				'100%': {
  					transform: 'translateY(0) translateX(0)'
  				}
  			},
  			'pulse-fade': {
  				'0%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.3'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			appear: 'appear 0.6s forwards ease-out',
  			'appear-zoom': 'appear-zoom 0.6s forwards ease-out',
  			'pulse-hover': 'pulse-hover 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			'fade-in': 'fadeIn 0.6s ease-out forwards',
  		},
  		spacing: {
  			container: '1280px'
  		},
  		boxShadow: {
  			'glow-sm': '0 0 16px 0 hsla(var(--foreground) / 0.08) inset',
  			'glow-md': '0 0 32px 0 hsla(var(--foreground) / 0.08) inset',
  			'glow-lg': '0 0 64px 0 hsla(var(--foreground) / 0.06) inset'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
