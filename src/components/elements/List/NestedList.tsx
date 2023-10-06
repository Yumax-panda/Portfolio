import Typography from '@mui/material/Typography'

type Item = {
  title: string
  fields?: string[]
}

type ListItemProps = {
  item: Item
}

function ListItem({ item }: ListItemProps) {
  return item.fields && item.fields.length ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '0',
        padding: '0',
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          marginLeft: '1rem',
          marginY: 'auto',
          whiteSpace: 'nowrap',
        }}
        fontSize={{
          xs: '0.8rem',
          sm: '1rem',
        }}
      >
        {item.title}:&nbsp;
      </Typography>
      <Typography
        sx={{
          color: '#868E96',
          marginY: 'auto',
        }}
        fontSize={{
          xs: '0.8rem',
          sm: '1rem',
        }}
      >
        {item.fields.join(' / ')}
      </Typography>
    </div>
  ) : null
}

type Props = {
  items: Item[]
}

function NestedList({ items }: Props) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0',
      }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            margin: '0',
            padding: '0',
          }}
        >
          <ListItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default NestedList
