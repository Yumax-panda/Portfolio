import Box from '@mui/material/Box'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Panel from '@/components/elements/Panel/Panel'
import type { ArticleProvider } from '@/constants/article'

type Props = {
  title: string
  url: string
  imageUrl: string
  provider: ArticleProvider
}

function ArticleCard(props: Props) {
  return (
    <Panel>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0',
          padding: '0',
        }}
      >
        <Link href={props.url} style={{ textDecoration: 'none' }}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <CardMedia
              component='img'
              src={props.imageUrl}
              alt={props.title}
              style={{
                margin: 'auto 0',
                objectFit: 'cover',
                borderRadius: '0.5rem 0.5rem 0 0',
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: 'center',
              display: 'flex',
              padding: '1rem',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '0.5rem',
                marginLeft: '0.5rem',
                paddingLeft: '0.5rem',
                color: '#868E96',
              }}
            >
              {props.title}
            </Typography>
          </Grid>
        </Link>
      </Box>
    </Panel>
  )
}

export default ArticleCard
