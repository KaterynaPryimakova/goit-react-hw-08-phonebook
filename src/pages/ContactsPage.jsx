import { Grid } from '@mui/material';
import { ContactForm, ContactList, Filter } from 'components';

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <Grid
        component="div"
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}>
          <h2>Contacts</h2>
        </Grid>
        <Grid item xs={4}>
          <Filter />
        </Grid>
        <Grid item xs={4}>
          <ContactList />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactsPage;
