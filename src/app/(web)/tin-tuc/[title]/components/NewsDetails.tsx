'use client';

import { Box, Button, Typography } from '@mui/material';
import parse from 'html-react-parser';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { PRIMARY_MAIN } from '@/common/constants/colors';
import ModalShareMeida from '@/common/components/modal/ModalShareMedia';
import { useState } from 'react';

const NewsDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box>
      <Box>
        {parse(
          'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.',
        )}
      </Box>
      <Box mt="20px">
        <Typography sx={{ fontSize: '20px', fontWeight: 500, color: PRIMARY_MAIN }}>
          Chia sẻ nếu bạn thấy bài viết này hay nhé!
        </Typography>
        <Button
          variant="outlined"
          startIcon={<MailOutlineIcon />}
          sx={{ px: '30px', mt: '15px' }}
          onClick={() => setOpenModal(true)}
        >
          Chia sẻ
        </Button>
      </Box>
      <ModalShareMeida isOpen={openModal} onConfirm={() => setOpenModal(false)} />
    </Box>
  );
};

export default NewsDetails;
