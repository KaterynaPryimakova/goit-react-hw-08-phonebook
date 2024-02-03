import { List } from '../ContactList/ContactList.styled';

export const Skeleton = () => {
  return (
    <List>
      <Skeleton
        sx={{ bgcolor: 'lightgray' }}
        variant="rounded"
        width={175}
        height={50}
      />
      <Skeleton
        sx={{ bgcolor: 'lightgray' }}
        variant="rounded"
        width={175}
        height={50}
      />
      <Skeleton
        sx={{ bgcolor: 'lightgray' }}
        variant="rounded"
        width={175}
        height={50}
      />
    </List>
  );
};
