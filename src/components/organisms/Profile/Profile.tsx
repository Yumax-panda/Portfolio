import { Box, Typography, Avatar, Grid } from '@mui/material'
import { ME } from '@/constants/me'

type ProfileFieldProps = {
  title: string
  content: string
}

function ProfileField({ title, content }: ProfileFieldProps) {
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
        {title}
      </Typography>
      <p
        style={{
          fontSize: '1rem',
          whiteSpace: 'pre-wrap',
          paddingLeft: '1rem',
        }}
      >
        {content}
      </p>
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
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          marginLeft: '5rem',
          borderBottom: 'solid 1px #868E96',
          paddingLeft: '1rem',
        }}
      >
        Profile
      </Typography>
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
