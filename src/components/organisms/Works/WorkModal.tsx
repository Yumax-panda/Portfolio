import ClearIcon from '@mui/icons-material/Clear'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import type { Work } from '@/constants/work'

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
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id='modal-modal-title'>{work.name}</h2>
        <p id='modal-modal-description'>{work.description}</p>
      </Box>
    </Modal>
  )
}

export default WorkModal
