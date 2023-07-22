const Title = ({ title, paragraph, className, fontT, fontP }) => {
  const fontTitle = fontT === "5xl" ? "text-5xl" : "text-2xl"
  const fontParagraph = fontP === "lg" ? "text-lg" : "text-sm"

  return (
    <div className={className}>
      <h2 className={` font-semibold py-5  ${fontTitle}`}>{title}</h2>
      <p className={`py-5 font-semibold ${fontParagraph}`}>{paragraph}</p>
    </div>
  )
}

export default Title
