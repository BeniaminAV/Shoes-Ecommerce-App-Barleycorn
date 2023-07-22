const SmallImage = ({ className, src, alt }) => {
  return (
    <img src={src} alt={alt} className={`lg:w-[30%]  h-[100%] ${className}`} />
  )
}

export default SmallImage
