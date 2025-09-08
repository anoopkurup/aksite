import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))"
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))"
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))"
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))"
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))",
  				'50': '#fffbeb',
  				'100': '#fef3c7',
  				'200': '#fde68a',
  				'300': '#fcd34d',
  				'400': '#fbbf24',
  				'500': '#f59e0b',
  				'600': '#d97706',
  				'700': '#b45309',
  				'800': '#92400e',
  				'900': '#78350f',
  				'950': '#451a03'
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			// Navy Theme Core Colors
  			navy: {
  				'50': '#f0f4ff',
  				'100': '#e0eaff',
  				'200': '#c3d5ff',
  				'300': '#8fb4ff',
  				'400': '#5d8aff',
  				'500': '#3d6fff',
  				'600': '#2563eb',
  				'700': '#1e40af',
  				'800': '#1e3a8a',
  				'900': '#1a237e',
  				'950': '#0f172a'
  			},
  			periwinkle: {
  				'50': '#f0f4ff',
  				'100': '#e0eaff',
  				'200': '#c3d5ff',
  				'300': '#8fb4ff',
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				'800': '#1e40af',
  				'900': '#1e3a8a'
  			},
  			cream: {
  				'50': '#fefefe',
  				'100': '#fef7ed',
  				'200': '#fde68a',
  				'300': '#fcd34d',
  				'400': '#fbbf24',
  				'500': '#f59e0b'
  			},
  			// Legacy colors updated for Navy theme
  			'oxford-blue': '#1e3a8a',
  			azure: '#8fb4ff',
  			gamboge: '#e6a817',
  			'antiflash-white': '#fef7ed',
  			charcoal: '#374151',
  			white: '#ffffff',
  			'light-gray': '#fef7ed',
  			'border-gray': '#c3d5ff',
  			brand: {
  				'50': '#f0f9ff',
  				'100': '#dbeafe',
  				'200': '#bfdbfe',
  				'300': '#93c5fd',
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				'800': '#1e40af',
  				'900': '#1e3a8a',
  				'950': '#0a2540'
  			},
  			neutral: {
  				'50': '#f9fafb',
  				'100': '#f4f4f5',
  				'200': '#e5e7eb',
  				'300': '#d1d5db',
  				'400': '#9ca3af',
  				'500': '#6b7280',
  				'600': '#4b5563',
  				'700': '#374151',
  				'800': '#1f2937',
  				'900': '#111827',
  				'950': '#0a2540'
  			},
  			semantic: {
  				success: '#10b981',
  				warning: '#f59e0b',
  				error: '#ef4444',
  				info: '#3b82f6'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			body: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			// Hero title - 48px (matches style guide)
  			'hero': [
  				'3rem',
  				{
  					lineHeight: '1.08',
  					letterSpacing: '-0.02em'
  				}
  			],
  			// Page title - 36px (matches style guide)  
  			'page-title': [
  				'2.25rem',
  				{
  					lineHeight: '1.11',
  					letterSpacing: '-0.01em'
  				}
  			],
  			// Section title - 30px (matches style guide)
  			'section-title': [
  				'1.875rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em'
  				}
  			],
  			// Subsection - 24px (matches style guide)
  			'subsection': [
  				'1.5rem',
  				{
  					lineHeight: '1.33',
  					letterSpacing: '0em'
  				}
  			],
  			// Keep existing display sizes for legacy support
  			'display-xl': [
  				'4.5rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-lg': [
  				'3.75rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-md': [
  				'3rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-sm': [
  				'2.25rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'112': '28rem',
  			'128': '32rem'
  		},
  		maxWidth: {
  			'8xl': '88rem',
  			'9xl': '96rem'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'gradient-brand': 'linear-gradient(135deg, #3b82f6 0%, #0a2540 100%)',
  			'gradient-subtle': 'linear-gradient(135deg, #f9fafb 0%, #f4f4f5 100%)'
  		},
  		boxShadow: {
  			soft: '0 2px 15px -3px rgba(30, 58, 138, 0.08), 0 10px 20px -2px rgba(30, 58, 138, 0.05)',
  			medium: '0 4px 25px -5px rgba(30, 58, 138, 0.12), 0 10px 10px -5px rgba(30, 58, 138, 0.06)',
  			strong: '0 10px 40px -10px rgba(30, 58, 138, 0.15), 0 2px 6px 0px rgba(30, 58, 138, 0.08)',
  			'navy-soft': '0 2px 15px -3px rgba(30, 58, 138, 0.1), 0 10px 20px -2px rgba(30, 58, 138, 0.06)',
  			'navy-medium': '0 4px 25px -5px rgba(30, 58, 138, 0.15), 0 10px 10px -5px rgba(30, 58, 138, 0.08)',
  			'navy-strong': '0 10px 40px -10px rgba(30, 58, 138, 0.2), 0 2px 6px 0px rgba(30, 58, 138, 0.1)'
  		},
  		keyframes: {
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		}
  	}
  },
  plugins: [],
};
export default config;