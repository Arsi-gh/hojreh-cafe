export default function CategoryWrapper({children}) {
  return (
    <nav className="mt-10 flex items-center gap-2 overflow-x-auto pl-1">
      {children}
    </nav>
  )
}