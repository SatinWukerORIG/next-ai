import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        logo_kinetics: "logo_kinetics 2.5s linear infinite normal forwards"
      },
      keyframes: {
        logo_kinetics: {
          "to": { transform: "rotate(360deg)" }
        }
      }
    },
  },
  plugins: [],
}
export default config
