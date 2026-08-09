// Small polymorphic button: renders <Link> for internal routes,
// <a> for external/hash links, or <button> for actions.
import { Link } from 'react-router-dom'

export default function Button({ to, href, onClick, variant = 'primary', block, children, type = 'button', ...rest }) {
  const className = `btn btn--${variant} ${block ? 'btn--block' : ''}`.trim()

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  )
}
