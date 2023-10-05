import ClearIcon from '@mui/icons-material/Clear'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import List from '@/components/elements/List/List'
import Section from '@/components/elements/Section/Section'
import type { Work } from '@/constants/work'

export type Props = {
  open: boolean
  work: Work
  onClose: () => void
}

type ModalContentProps = {
  work: Work
  onClose: () => void
}

function OptionalSection({
  title,
  items,
}: {
  title: string
  items?: string[]
}) {
  return items ? (
    <Section title={title}>
      <List items={items} />
    </Section>
  ) : null
}

function ModalContent({ work, onClose }: ModalContentProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardMedia
        component='img'
        src={work.imageUrl}
        alt={work.name}
        style={{
          margin: 'auto 0',
          objectFit: 'cover',
        }}
      />
      <Container>
        <p id='modal-modal-description'>{work.description}</p>
        <OptionalSection title='機能' items={work.features} />
      </Container>
      <Button variant='outlined' onClick={onClose}>
        Close
      </Button>
    </Box>
  )
}

function WorkModal({ open, work, onClose }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius: '1rem',
          boxShadow: 24,
          p: 4,
          maxHeight: '80vh',
          overflowY: 'scroll',
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <h2 id='modal-modal-title'>{work.name}</h2>
          <ClearIcon onClick={onClose} />
        </Stack>
        <ModalContent work={work} onClose={onClose} />
      </Box>
    </Modal>
  )
}

export default WorkModal
