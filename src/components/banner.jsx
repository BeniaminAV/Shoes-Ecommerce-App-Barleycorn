const Banner = ({ title, subtitle, className }) => {
  return (
    <div
      className={`w-full text-white  flex flex-col items-center justify-center ${className}`}>
      <h2 className="text-4xl pb-3 font-semibold">{title}</h2>
      <p className="text-lg pt-3 font-semibold">{subtitle}</p>
    </div>
  )
}

export default Banner
