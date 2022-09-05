import { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}
export const InputText = ({label, ...props}:props) => {
  return (
    <label className='flex flex-col w-full '>
      <span>{label}</span>
      <input {...props} className='border border-gray-200 h-10 px-3'/>
    </label>
  );
};
