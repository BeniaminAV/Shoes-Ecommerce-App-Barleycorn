import { Link } from "react-router-dom"

const LinkRoutes = ({ onClick, label, to, className }) => {
  return (
    <div className="hover:text-neutral-500 transition ease-in-out uppercase text-sm font-bold">
      <Link onClick={onClick} to={to} className={className}>
        {label}
      </Link>
    </div>
  )
}

export default LinkRoutes
