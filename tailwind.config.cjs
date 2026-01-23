module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ' Inter', 'system-ui', 'sans-serif'],
        
      },
      
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'full',
            fontFeatureSettings: '"cv02", "cv03", "cv04"',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}