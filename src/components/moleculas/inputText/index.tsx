import { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export const InputText = ({ label, ...props }: props) => {
  return (
    <label className="flex flex-col w-full ">
      <span>{label}</span>
      <input
        {...props}
        className=" appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none "
      />
    </label>
  );
};
