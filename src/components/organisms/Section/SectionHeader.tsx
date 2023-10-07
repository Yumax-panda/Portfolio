import Grid from '@mui/material/Grid'
import SectionBrief from '@/components/elements/SectionBrief/SectionBrief'
import SectionTitle from '@/components/elements/SectionTitle/SectionTitle'

type Props = {
  title: string
  brief?: string
  children?: React.ReactNode
}

function SectionHeader({ title, brief, children }: Props) {
  return (
    <Grid
      container
      sx={{
        borderBottom: 'solid 1px #868E96',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 1rem',
      }}
    >
      <Grid
        item
        container
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
        spacing={2}
      >
        <Grid item sx={{ marginY: 'auto' }}>
          <SectionTitle title={title} />
        </Grid>
        {brief ? (
          <Grid item sx={{ marginY: 'auto' }}>
            <SectionBrief brief={brief} />
          </Grid>
        ) : null}
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  )
}

export default SectionHeader
