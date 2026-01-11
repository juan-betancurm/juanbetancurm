module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // o agrega más fuentes:
        // serif: ['Merriweather', 'serif'],
        // mono: ['Fira Code', 'monospace'],
      },
      
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'full', // Elimina el max-width de 65ch por defecto
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}