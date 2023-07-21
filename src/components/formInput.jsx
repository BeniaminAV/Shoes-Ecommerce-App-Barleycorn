const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="relative py-2">
      <label className="text-md text-zinc-500 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        {label}
      </label>
      <input
        type="text"
        {...otherProps}
        className="block rounded-md p-4 w-full text-md text-zinc-500 bg-neutral-200 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
      />
    </div>
  )
}

export default FormInput
