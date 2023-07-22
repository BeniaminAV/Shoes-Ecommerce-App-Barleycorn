const BigImage = ({ className, src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full lg:w-[70%] h-[100%] ${className}`}
    />
  )
}

export default BigImage
