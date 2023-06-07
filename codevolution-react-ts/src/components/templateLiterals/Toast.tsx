

type HorizontalPosition = 'right' | 'center' | 'left'


type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    |'center'
}


export const Toast = ({position}:ToastProps) => {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
