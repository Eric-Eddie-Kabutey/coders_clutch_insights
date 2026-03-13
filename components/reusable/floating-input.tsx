import React from 'react'

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id?: string
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          id={id}
          ref={ref}
          {...props}
          placeholder=" "
          className={`peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1.5
          text-gray-900 bg-white placeholder-transparent focus:outline-none 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500`}
        />
        <label
          htmlFor={id}
          className={`absolute left-3 top-2 text-gray-500 text-sm cursor-text select-none transition-all duration-200 
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600`}
        >
          {label}
        </label>
      </div>
    )
  }
)

FloatingInput.displayName = "FloatingInput"
export default FloatingInput
