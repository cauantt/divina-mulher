import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'smm': {'max': '500px'}, // máximo até 639px
        'sm': {'max': '677px'}, // máximo até 639px
        'ms': {'min': '1360px'}, // máximo até 639px
        'md': {'max': '590px'}, // máximo até 767px
        'mdd': {'max': '500px'}, // máximo até 767px
        'lg': {'max': '729px'},
        'lgm': {'max': '870px'},
        'mac': {'max': '1202px'}, // máximo até 1023px
        'macc': {'max': '1050px'}, // máximo até 1023px
        'rs': {'max': '1322px'}, // máximo até 1279px
        'rss': {'max': '1380px'}, // máximo até 1279px
        'lgg': {'max': '1664px'}, // máximo até 1535px
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'yellow': '#F29F05', // nova cor amarela
        'vermelho': '#720000', // nova cor amarela
        'cinza': '#e9e9e9', // nova cor amarela
      },
    },
  },
  plugins: [],
};

export default config;
