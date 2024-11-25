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
			whitesmoke: "#f4f2ef",
          gray: {
            "100": "#111011",
            "200": "rgba(17, 16, 17, 0.6)",
            "300": "rgba(17, 16, 17, 0.8)",
          },
          linen: "#eae8e1",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
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
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
			"17xl": "36px",
  		},
		  spacing: {},
		  fontFamily: {
			manrope: "Manrope",
			"degular-display": "'Degular Display'",
		  },

  	},
	  fontSize: {
        "mini-2": "14.2px",
        "mini-5": "14.5px",
        inherit: "inherit",
      },
	  screens: {
        mq925: {
          raw: "screen and (max-width: 925px)",
        },
        mq700: {
          raw: "screen and (max-width: 700px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
  },
//   corePlugins: {
// 	preflight: false,
//   },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
