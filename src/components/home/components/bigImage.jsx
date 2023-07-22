const BigImage = ({ className, src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full lg:w-[60%] md:w-[50%] h-[100%] ${className}`}
    />
  )
}

export default BigImage
