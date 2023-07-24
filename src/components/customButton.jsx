const CustomButton = ({ className, label, onClick }) => {
  return (
    <button
      className={`hover:text-neutral-400 ${className} `}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default CustomButton
