import { type Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#fafafa',
        'bg-secondary': '#ededed',
        'text-primary': '#070808',
        'primary': '#414443',
        'secondary': '#e6e5e6',
        'accent': '#100f0f'

      }
    },
  },
  plugins: [],
} satisfies Config)
