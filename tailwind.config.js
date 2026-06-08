/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#070711',
          900: '#070711',
          800: '#0b0b1a',
          700: '#101027',
          600: '#15152f',
        },
        violet: {
          deep: '#1a0f3d',
          glow: '#6d28d9',
        },
        indigo: {
          glow: '#4f46e5',
        },
        electric: '#2563eb',
        cyan: {
          soft: '#22d3ee',
        },
        amber: {
          soft: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99,102,241,0.45)',
        'glow-cyan': '0 0 32px -8px rgba(34,211,238,0.4)',
      },
      keyframes: {
        'pulse-glow': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'border-flow': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'border-flow': 'border-flow 6s ease infinite',
      },
    },
  },
  plugins: [],
}
