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
          fontSize: '0.8rem',
          marginBottom: '0.5rem',
          marginLeft: '-1rem',
          marginY: 'auto',
        }}
      >
        {item.title}:&nbsp;
      </Typography>
      <Typography
        sx={{
          color: '#868E96',
          marginY: 'auto',
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
      }}
    >
      {items.map((item, index) => (
        <li key={index}>
          <ListItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default NestedList
