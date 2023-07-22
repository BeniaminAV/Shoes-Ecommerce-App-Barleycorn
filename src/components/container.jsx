const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4 ${className}`}>
      {children}
    </div>
  )
}

export default Container
