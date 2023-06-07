
type styleProps = {
    styles: React.CSSProperties
    children: React.ReactNode
}

export const Container = ({styles, children} :styleProps ) => {
  return (
    <div style={styles}>
        {children}
    </div>
  )
}
