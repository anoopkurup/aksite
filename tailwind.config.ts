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
  				foreground: "hsl(var(--accent-foreground))"
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))"
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))"
  			},
  			// True-navy ramp — clearly blue, authoritative without going near-black.
  			navy: {
  			'50': '#eff3fb',
  			'100': '#dae4f4',
  			'200': '#c0cfe6',
  			'300': '#93abce',
  			'400': '#5f7ba0',
  			'500': '#3e5e8c',
  			'600': '#324c77',
  			'700': '#2a4a7e',
  			'800': '#22406f',
  			'900': '#1f3d73',
  			'950': '#152a50'
  			},
  			white: '#FFFFFF', // pure white for backgrounds

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
  			sans: [
  				'var(--font-sans)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'var(--font-serif)',
  				'Newsreader',
  				'Georgia',
  				'serif'
  			],
  			display: [
  				'var(--font-serif)',
  				'Newsreader',
  				'Georgia',
  				'serif'
  			],
  			body: [
  				'var(--font-sans)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-mono)',
  				'IBM Plex Mono',
  				'ui-monospace',
  				'SFMono-Regular',
  				'monospace'
  			]
  		},
  		fontSize: {
  			// New minimalist typography scale
  			'hero': [
  				'4.5rem',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.03em'
  				}
  			],
  			'hero-mobile': [
  				'2.5rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display': [
  				'3rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'title': [
  				'1.875rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'body-lg': [
  				'1.25rem',
  				{
  					lineHeight: '1.7',
  					letterSpacing: '0em'
  				}
  			],
  			'body': [
  				'1.125rem',
  				{
  					lineHeight: '1.7',
  					letterSpacing: '0em'
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
  			'128': '32rem',
  			// Minimalist generous spacing
  			'section': '8rem',
  			'section-md': '6rem',
  			'section-sm': '4rem',
  			'content': '4rem',
  			'element': '2rem'
  		},
  		maxWidth: {
  			'8xl': '88rem',
  			'9xl': '96rem'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  		},
  		boxShadow: {
  			// Minimalist shadows
  			'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.03)',
  			'none': 'none',
  			soft: '0 2px 15px -3px rgba(30, 58, 138, 0.08), 0 10px 20px -2px rgba(30, 58, 138, 0.05)',
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
  plugins: [require('@tailwindcss/typography')],
};
export default config;