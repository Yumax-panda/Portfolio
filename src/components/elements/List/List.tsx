import Typography from '@mui/material/Typography'

type Props = {
  items: string[]
}

function List({ items }: Props) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <Typography
            sx={{
              color: '#868E96',
            }}
          >
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  )
}

export default List
