module.exports = function (app, options) {
  let config = {
    content: [
      `../../apps/${app}/src/index.html`,
      `../../apps/${app}/src/**/*.{ts,tsx,html,stories.tsx}`,
      '../../packages/*/src/**/*.{ts,tsx,html,stories.tsx}',
      '../../interface/**/*.{ts,tsx,html,stories.tsx}'
    ],
    darkMode: ['class'],
    theme: {
      screens: {
        xs: '475px',
        sm: '650px',
        md: '868px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize: {
        'tiny': '.65rem',
        'xs': '.75rem',
        'sm': '.80rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem'
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          'product-purple': 'hsl(var(--product-purple))',
          "product-purple-light": "hsl(var(--product-purple-light))",
          "product-purple-dark": "hsl(var(--product-purple-dark))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          purple: {
            DEFAULT: "hsl(var(--purple))",
            light: "hsl(var(--purple-light))",
            dark: "hsl(var(--purple-dark))",
          },
          gray: {
            "100": "hsl(var(--gray-100))",
            "200": "hsl(var(--gray-200))",
            "300": "hsl(var(--gray-300))",
            "400": "hsl(var(--gray-400))",
            "500": "hsl(var(--gray-500))",
            "600": "hsl(var(--gray-600))",
          },
          success: {
            DEFAULT: "hsl(var(--success))",
            "success-light": "hsl(var(--success-light))",
          },
          pink: {
            DEFAULT: "hsl(var(--pink))",
            "pink-dark": "hsl(var(--pink-dark))",
          },
          orange: {
            DEFAULT: "hsl(var(--orange))",
            "orange-dark": "hsl(var(--orange-dark))",
          },
          yellow: {
            DEFAULT: "hsl(var(--yellow))",
            "yellow-dark": "hsl(var(--yellow-dark))",
          },
          green: {
            DEFAULT: "hsl(var(--green))",
            "green-dark": "hsl(var(--green-dark))",
          },
          blue: {
            DEFAULT: "hsl(var(--blue))",
            "blue-dark": "hsl(var(--blue-dark))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        mono: [
          "Söhne Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
    },
    plugins: [require("tailwindcss-animate")]
  };
  return config;
};