
type TextOwnProps<E extends React.ElementType> = {
    size?: 'md' | 'sm' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    variant?: E
} 

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>


export const Text = <E extends React.ElementType = 'div'>({size, color, children, variant}: TextProps<E> ) => {

    const Component = variant || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>
        {children}
    </Component>
  )
}
