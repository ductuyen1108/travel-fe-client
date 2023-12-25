import { Stack } from '@mui/material';
import PostItem from './PostItem';

const ListPost = () => {
  return (
    <Stack spacing={2} width={{ sm: '60%', xs: '100%' }}>
      {[1, 2, 3, 4, 5].map((item) => (
        <PostItem key={item} />
      ))}
    </Stack>
  );
};

export default ListPost;
