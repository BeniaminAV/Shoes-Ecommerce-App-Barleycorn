const SmallImage = ({ className, src, alt }) => {
  return (
    <img src={src} alt={alt} className={`lg:w-[40%] md:w-[50%]  ${className}`} />
  )
}

export default SmallImage
