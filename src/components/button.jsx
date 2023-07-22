const Button = ({ label, onClick, buttonType }) => {
  const bgColor =
    buttonType === "green" ? "bg-green-600 hover:bg-green-500" : "bg-red-800 hover:bg-red-700"

  return (
    <button
      className={`w-full h-[51px] rounded-md uppercase text-white ${bgColor} transition`}
      onClick={onClick}>
      <p className="text-white text-md font-bold"> {label}</p>
    </button>
  )
}

export default Button
