import { Box, Typography, Avatar, Grid } from '@mui/material'
import { ME } from '@/constants/me'

type ProfileFieldProps = {
  title: string
  content: string
}

function ProfileField({ title, content }: ProfileFieldProps) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          whiteSpace: 'pre-wrap',
          paddingLeft: '1rem',
          margin: '0.5rem',
        }}
      >
        {content}
      </Typography>
    </Box>
  )
}

function ProfileSection() {
  return (
    <Box
      sx={{
        marginTop: '4rem',
      }}
    >
      <Box
        sx={{
          borderBottom: 'solid 1px #868E96',
          marginBottom: '1rem',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginLeft: '5rem',
          }}
        >
          Profile
        </Typography>
      </Box>
      <Grid container justifyContent='space-around'>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Avatar
              alt={ME.name}
              src={ME.iconUrl}
              sx={{
                width: '12rem',
                height: '12rem',
              }}
            />
          </Box>
        </Grid>
        <Grid item>
          <ProfileField title='名前' content={ME.name} />
          <ProfileField title='所属' content={'東京工業大学 情報通信系'} />
          <ProfileField title='趣味' content={'ゲーム, 水泳'} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfileSection
