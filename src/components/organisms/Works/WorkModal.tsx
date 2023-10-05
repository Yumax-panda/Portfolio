import ClearIcon from '@mui/icons-material/Clear'
import GitHubIcon from '@mui/icons-material/GitHub'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import List from '@/components/elements/List/List'
import NestedList from '@/components/elements/List/NestedList'
import Section from '@/components/elements/Section/Section'
import { works, type Work } from '@/constants/work'

type OptionalSectionProps = {
  title: string
  items?: string[]
}

function OptionalSection({ title, items }: OptionalSectionProps) {
  return items ? (
    <Section title={title}>
      <List items={items} />
    </Section>
  ) : null
}

type ModalContentProps = {
  work: Work
  onClose: () => void
}

function ModalContent({ work, onClose }: ModalContentProps) {
  const items = [
    { title: '使用言語', fields: work.languages },
    { title: '使用技術', fields: work.skills },
    { title: 'フロントエンド', fields: work.frontend },
    { title: 'バックエンド', fields: work.backend },
    { title: 'フレームワーク', fields: work.frameworks },
    { title: 'ライブラリ', fields: work.libraries },
    { title: 'インフラ', fields: work.infra },
    { title: 'ツール', fields: work.tools },
  ]

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
          margin: 'auto',
          objectFit: 'cover',
          borderRadius: '0.2rem',
        }}
      />
      <Container>
        <Section title={work.name} url={work.url}>
          <Typography
            id='modal-modal-description'
            sx={{
              mt: 2,
              paddingLeft: '1rem',
              marginY: '1rem',
            }}
          >
            {work.description}
          </Typography>
          <NestedList items={items} />
        </Section>
        <OptionalSection title='機能' items={work.features} />
      </Container>
      <Button variant='outlined' onClick={onClose}>
        Close
      </Button>
    </Box>
  )
}

type ModalTitleProps = {
  name: string
  github?: string
}

function ModalTitle({ name, github }: ModalTitleProps) {
  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', marginBottom: '0.5rem' }}>
        <Typography
          id='modal-modal-title'
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginY: 'auto',
            marginLeft: '0.5rem',
            paddingLeft: '1rem',
          }}
        >
          {name}
        </Typography>
        {github && (
          <Tooltip title='Source' placement='right-start'>
            <IconButton
              onClick={() => window.open(github, '_blank')}
              sx={{
                marginY: 'auto',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            >
              <GitHubIcon
                sx={{
                  fontSize: '2rem',
                }}
              />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Stack>
  )
}

export type Props = {
  open: boolean
  work: Work
  onClose: () => void
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
          bgcolor: 'background.paper',
          border: '2px solid #000',
          borderRadius: '0.5rem',
          boxShadow: 24,
          p: 4,
          maxHeight: '80vh',
          overflowY: 'scroll',
        }}
        width={{ xs: '90vw', sm: '80vw', md: '60vw', lg: '50vw' }}
      >
        <Stack
          direction='row'
          spacing={2}
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <ModalTitle name={work.name} github={work.github} />
          <ClearIcon onClick={onClose} />
        </Stack>
        <ModalContent work={work} onClose={onClose} />
      </Box>
    </Modal>
  )
}

export default WorkModal
