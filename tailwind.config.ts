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
  			// Professional Navy - Secondary Color (30%)
  			navy: {
  				'50': '#eff6ff',
  				'100': '#dbeafe',
  				'200': '#bfdbfe',
  				'300': '#93c5fd',
  				'400': '#60a5fa',
  				'500': '#3b82f6',
  				'600': '#2563eb',
  				'700': '#1d4ed8',
  				'800': '#1e40af',
  				'900': '#1e3a8a',
  				'950': '#172554'
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
  			// Solarized Dark color palette
  			solarized: {
  				// Dark theme base colors
  				'base03': '#002b36', // Background
  				'base02': '#073642', // Background highlights
  				'base01': '#586e75', // Optional content / Comments
  				'base00': '#657b83', // Body text
  				'base0': '#839496',  // Primary content
  				'base1': '#93a1a1',  // Optional emphasized content
  				'base2': '#eee8d5',  // Background highlights (light)
  				'base3': '#fdf6e3',  // Background (light)
  				// Accent colors
  				'red': '#dc322f',
  				'green': '#859900',
  				'yellow': '#b58900',
  				'blue': '#268bd2',
  				'magenta': '#d33682',
  				'cyan': '#2aa198',
  				'orange': '#cb4b16',
  				'violet': '#6c71c4'
  			},
  			// Custom colors for enhanced readability
  			'text-primary': '#f7f7f7', // high contrast text
  			'text-heading': '#f7f7f7', // heading text
  			'text-body': '#f7f7f7', // body text
  			// Legacy colors updated for new color scheme
  			'oxford-blue': '#f7f7f7', // headings - high contrast
  			azure: '#268bd2', // solarized blue
  			gamboge: '#b58900', // solarized yellow
  			'antiflash-white': '#073642', // base02 for lighter backgrounds
  			charcoal: '#f7f7f7', // body text - high contrast
  			white: '#f7f7f7', // text
  			'light-gray': '#073642', // base02
  			'border-gray': '#586e75', // base01
  			brand: {
  				'50': '#839496',
  				'100': '#657b83',
  				'200': '#586e75',
  				'300': '#268bd2',
  				'400': '#2aa198',
  				'500': '#268bd2',
  				'600': '#073642',
  				'700': '#002b36',
  				'800': '#002b36',
  				'900': '#002b36',
  				'950': '#002b36'
  			},
  			neutral: {
  				'50': '#93a1a1',
  				'100': '#839496',
  				'200': '#657b83',
  				'300': '#586e75',
  				'400': '#586e75',
  				'500': '#657b83',
  				'600': '#073642',
  				'700': '#002b36',
  				'800': '#002b36',
  				'900': '#002b36',
  				'950': '#002b36'
  			},
  			semantic: {
  				success: '#859900',
  				warning: '#b58900',
  				error: '#dc322f',
  				info: '#268bd2'
  			},
  			// Primary Colors - White/Off-White (60%)
  			'primary-white': {
  				'white': '#FFFFFF',
  				'off-white': '#FAFAFA',
  				'light-gray': '#F5F5F5',
  				'50': '#FAFAFA',
  				'100': '#F5F5F5',
  				'200': '#E5E5E5',
  				'300': '#D4D4D4',
  				'400': '#A3A3A3',
  				'500': '#737373',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717',
  				'950': '#0A0A0A'
  			},
  			// CTA Colors - Orange (10%)
  			cta: {
  				'50': '#fff7ed',
  				'100': '#ffedd5',
  				'200': '#fed7aa',
  				'300': '#fdba74',
  				'400': '#fb923c',
  				'500': '#f97316',
  				'600': '#ea580c',
  				'700': '#c2410c',
  				'800': '#9a3412',
  				'900': '#7c2d12',
  				'950': '#431407'
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