
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = ({status}: StatusProps) => {
  return (
    <div>
        {status === 'loading' ? <h2>Loading...</h2> : null}
        {status === 'success' ? <h2>Data fetched successfully!</h2>: null}
        {status === 'error' ? <h2>Error fetching data</h2>: null}
    </div>
  )
}
