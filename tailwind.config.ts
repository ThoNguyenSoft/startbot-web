/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/app/**/*.{ts,tsx}', './src/core/**/*.{ts,tsx}', './src/stories/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px'
      }
    },
    extend: {
      transitionDelay: {
        '5000': '5000ms'
      },
      fontFamily: {
        playwrite: ['"Playwrite"']
      },
      boxShadow: {
        txt: '0 2px 5px rgba(0, 0, 0, 0.15)'
      },
      colors: {
        border: { DEFAULT: 'hsl(var(--border))', third: 'var(--border-third)' },
        positive: 'var(--positive)',
        negative: 'var(--negative)',
        neutral: 'var(--neutral)',
        mixed: 'var(--mixed)',
        input: 'hsl(var(--input))',
        textDefault: {
          DEFAULT: 'var(--text-default)',
          contrast: 'var(--text-default-contrast)',
          third: 'var(--text-third)',
          fourth: 'var(--text-fourth)',
          fifth: 'var(--text-fifth)'
        },
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: 'var(--background)',
          third: 'var(--background-third)'
          // up: 'var(--color-classic-text-up)',
          // down: 'var(--color-classic-text-down)',
          // ceil: 'var(--color-classic-text-ceil)',
          // floor: 'var(--color-classic-text-floor)',
          // ref: 'var(--color-classic-text-ref)'
        },
        backgroundContract: 'var(--background-contrast)',
        bgElevated: 'var(--bg-elevated)',
        bgNavbar: 'var(--bg-navbar)',
        table: {
          DEFAULT: 'var(--secondary)',
          selected: 'var(--table-background-hover)'
        },
        status: {
          DEFAULT: 'var(--default)',
          success: 'var(--success)',
          processing: 'var(--processing)',
          error: 'var(--error)',
          warning: 'var(--warning)'
        },
        foreground: 'hsl(var(--foreground))',
        header: 'var(--header-background)',
        divider: 'var(--divider)',
        dividerTitle: 'var(--divider-title)',
        greyDefault: 'var(--grey)',
        // divider: 'hls(--divider)',
        primary: {
          DEFAULT: 'var(--primary)',
          base: 'var(--primary-base)',
          yellow: 'var(--primary-yellow)',
          text: 'var(--text-primary)',
          hover: 'var(--primary-hover)',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          hover: 'var(--secondary-hover)',
          disable: 'var(--secondary-disable)',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          hover: 'var(--destructive-hover)',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        stock: {
          DEFAULT: 'var(--stock-color)',
          green: 'var(--stock-green)',
          red: 'var(--stock-red)',
          yellow: 'var(--stock-yellow)',

          up: 'var(--color-classic-text-up)',
          down: 'var(--color-classic-text-down)',
          ceil: 'var(--color-classic-text-ceil)',
          floor: 'var(--color-classic-text-floor)',
          ref: 'var(--color-classic-text-ref)'
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        menu: {
          DEFAULT: 'var(--menu)'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        black: {
          DEFAULT: 'var(--black)',
          secondary: 'var(--black-secondary)',
          third: 'var(--black-third)',
          four: 'var(--black-four)',
          five: 'var(--black-five)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      spacing: {
        navbar: 'var(--navbar)',
        contentDrawer: 'var(--content-drawer)',
        contentDrawerChatMobile: 'var(--content-drawer-chat-mobile)',
        sidebarZoomOut: 'var(--sidebarZoomOut)',
        content: 'var(--content)'
      },
      maxWidth: {
        sidebar: 'var(--sidebar)'
      },
      maxHeight: {
        sidebar: 'var(--content)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        marquee: {
          '0%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)'
          },
          '25%': {
            '-webkit-transform': 'translateX(-25%)',
            transform: 'translateX(-25%)'
          },
          '50%': {
            '-webkit-transform': 'translateX(-50%)',
            transform: 'translateX(-50%)'
          },
          '75%': {
            '-webkit-transform': 'translateX(-75%)',
            transform: 'translateX(-75%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)'
          }
        },
        marquee2: {
          '0%': {
            '-webkit-transform': 'translateX(100%)',
            transform: 'translateX(100%)'
          },
          '25%': {
            '-webkit-transform': 'translateX(75%)',
            transform: 'translateX(75%)'
          },
          '50%': {
            '-webkit-transform': 'translateX(50%)',
            transform: 'translateX(50%)'
          },
          '75%': {
            '-webkit-transform': 'translateX(25%)',
            transform: 'translateX(25%)'
          },
          '100%': {
            '-webkit-transform': 'translateX(0%)',
            transform: 'translateX(0%)'
          }
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        fadeInCus: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 120s linear infinite',
        marquee2: 'marquee2 120s linear infinite',
        'waving-hand': 'wave 2s linear infinite',
        fadeInCus: 'fadeInCus 1.3s ease-in-out forwards',
        fadeInCusInf: 'fadeInCus 1.2s ease-in-out infinite'
      },
      screens: {
        tall: { raw: '(max-height: 950px)' }
        // => @media (max-height: 950px) { ... }
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
          'text-stroke-width': '1px'
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
          'text-stroke-width': '2px'
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
          'text-stroke-width': '3px'
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#f2f2f2',
          'text-stroke-color': '#f2f2f2'
        }
        // Add more colors as needed
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ]
}
