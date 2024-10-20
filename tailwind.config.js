/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 

      scrollbar: {
        hide:'hidden',
      },
  

      boxShadow: {
      'X': 'inset 0px -1px 0px #D6DDEB',
      'SB': '0px 79px 128px rgba(192, 192, 192, 0.09), 0px 28.8363px 46.7221px rgba(192, 192, 192, 0.0598508), 0px 13.9995px 22.6827px rgba(192, 192, 192, 0.0475723), 0px 6.86281px 11.1195px rgba(192, 192, 192, 0.0380675), 0px 2.71357px 4.39666px rgba(192, 192, 192, 0.0270615)',
    },

    animation:{
      "left-right": "left-right 1s linear infinite",
      "up-down": "up-down 2s  infinite alternate-reverse both ",

    },

keyframes : {
  "left-right":{
  from: {
    transform: "translateX(0px)"
  },

  to: {
    transform: "translateX(-5px)"
  },
},

"up-down":{
  from: {
    transform: "translateX(10px)"
  },

  to: {
    transform: "translateX(-10px)"
  },
  

  
}
},


fontFamily: {
  "logo": ["Red Hat Display",
    {
      fontFeatureSettings: '"cv11", "on"',
      
    },
  ],

  "great": ["Epilogue"
  ]
}

   
  
  },
  },
  plugins: [],
}