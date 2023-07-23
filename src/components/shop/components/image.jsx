const Image = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-[60vh] bg-cover bg-no-repeat bg-center ${className}`}
    />
  )
}

export default Image
