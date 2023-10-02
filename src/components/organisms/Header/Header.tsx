import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'

import Link from 'next/link'
import React from 'react'
import HeaderItem from './HeaderItem'
import { ME } from '@/constants/me'

function Header() {
  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton>
            <Link href='/'>
              <Avatar alt={ME.name} src={ME.iconUrl} />
            </Link>
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <HeaderItem title='Articles' href='/articles' />
            <HeaderItem title='Works' href='/works' />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
