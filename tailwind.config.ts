import { type Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#fafafa',
        'bg-secondary': '#ededed',
        'text-primary': '#070808',
        'primary': '#414443',
        'secondary': '#e6e5e6',
        'accent': '#100f0f',
        'bg-primary-dk': '#1e1e1e',
        'bg-secondary-dk': '#ededed',
        'text-primary-dk': '#fafafa',
        'primary-dk': '#414443',
        'secondary-dk': '#e6e5e6',
        'accent-dk': '#100f0f',
      }
    },
  },
  plugins: [],
} satisfies Config)
