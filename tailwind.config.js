/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5c13ef",
        
"secondary": "#5fe045",
        
"accent": "#79e0d7",
        
"neutral": "#272834",
        
"base-100": "#EDEFF2",
        
"info": "#6EA0F7",
        
"success": "#24D69B",
        
"warning": "#EFC74D",
        
"error": "#EF5D84",
        },
      },
    ],
  },
  plugins:  [require("daisyui")],
}
