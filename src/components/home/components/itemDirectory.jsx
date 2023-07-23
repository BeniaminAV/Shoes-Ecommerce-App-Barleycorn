const DirectoryItem = ({ shoess: { id, name, imageUrl, price } }) => {
  return (
    <div id={id} className="text-center p-5 cursor-pointer">
      <img src={imageUrl} alt={`name ${name}`} />
      <h2 className="text-md font-semibold truncate">{name}</h2>
      <p className="text-md font-semibold">{price}</p>
    </div>
  )
}

export default DirectoryItem
