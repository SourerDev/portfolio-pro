import { type Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#009e66',
        'secondary': '#ddf4eb',
        'text': '#1e1e1e',
        'background': '#fafafa',
        'accent': '#1b503d',
        'secondary-dk': '#0e2b20',
        'text-dk': '#fafafa',
        'background-dk': '#1e1e1e',
        'accent-dk': '#44c093',
      }
    },
  },
  plugins: [],
} satisfies Config)
