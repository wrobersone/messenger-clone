"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({ placeholder, id, type, required, register, errors }) => {
  return (
    <div className="relative w-full">
      <input className="font-light text-black py-2 px-4 bg-neutral-100 focus:outline-none rounded-full w-full" id={id} type={type} autoComplete={id} {...register(id, { required })} placeholder={placeholder} />
    </div>
  )
}

export default MessageInput
