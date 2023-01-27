interface Props {
  children: React.ReactNode,
  className?: string,
  show: boolean
}

export default function DropdownMenu({
  children,
  className,
  show
}: Props) {
  const formattedClassName = [
    "dropdown-options", 
    className,
    show ? "open" : ""
  ].join(" ");

  return (
    <ul className={formattedClassName}>
      {children}
    </ul>
  )
}