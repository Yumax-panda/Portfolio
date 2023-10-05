import OpenInNew from '@mui/icons-material/OpenInNew'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

type UrlIconProps = {
  url?: string
}

function UrlIcon({ url }: UrlIconProps) {
  return url ? (
    <Tooltip title='関連リンク' placement='top'>
      <IconButton
        onClick={() => window.open(url, '_blank')}
        sx={{
          padding: '0',
          margin: '0',
          color: 'primary.main',
        }}
      >
        <OpenInNew />
      </IconButton>
    </Tooltip>
  ) : null
}

type Props = {
  title: string
  url?: string
  children: React.ReactNode
}

function Section({ title, children, url }: Props) {
  return (
    <Stack
      sx={{
        marginTop: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottom: 'solid 1px #868E96',
          marginBottom: '0.5rem',
          paddingLeft: '1rem',
          paddingRight: '2rem',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <UrlIcon url={url} />
      </div>
      {children}
    </Stack>
  )
}

export default Section
