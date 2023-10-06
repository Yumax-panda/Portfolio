import GitHubIcon from '@mui/icons-material/GitHub'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import Link from 'next/link'
import React from 'react'
import FooterItem from './FooterIcon'
import { ME } from '@/constants/me'

function Footer() {
  return (
    <AppBar
      position='static'
      component='footer'
      sx={{
        top: 'auto',
        bottom: 0,
        boxShadow: 'none',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Typography>
              Copyright © 2023 {ME.name}. All Rights Reserved.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <FooterItem title='GitHub' href={ME.github}>
              <GitHubIcon
                sx={{
                  fontSize: '2rem',
                }}
              />
            </FooterItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Footer
