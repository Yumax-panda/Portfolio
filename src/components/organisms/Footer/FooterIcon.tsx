'use client'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

type Props = {
  title: string
  href: string
  children: React.ReactNode
}

function FooterIcon({ title, href, children: icon }: Props) {
  return (
    <Tooltip title={title} placement='top'>
      <IconButton
        onClick={() => window.open(href, '_blank')}
        sx={{
          marginY: 'auto',
          objectFit: 'cover',
          cursor: 'pointer',
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default FooterIcon
