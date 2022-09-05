import { ButtonHTMLAttributes, ReactNode } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const Button = ({children, ...props}: props) => {
  return (
    <button
      {...props}
      className="bg-gray-500 h-12 text-white font-bold hover:bg-gray-400  disabled:bg-gray-300"
    >
      {children}
    </button>
  );
};
