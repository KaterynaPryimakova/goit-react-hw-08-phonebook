import { Typography } from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import homePageImage from '../../images/home-page-img.jpg';
import { Hero, Image, Donate } from './HomePage.styled';

const HomePage = () => {
  return (
    <Hero>
      <Typography variant="h2" component="h1" color="#1976d2">
        Welcome!
      </Typography>

      <Typography variant="button" component="h2" fontSize={20}>
        Donation to the Armed Forces
        {/* <Typography
          variant="button"
          component="a"
          target="_blank"
          href="https://lgvfund.com/uk?gclid=Cj0KCQiA5fetBhC9ARIsAP1UMgFU9h7GOdWsOLalgY1VLYPYN7M67JpVoO8qi3vvrXh1vWND4UY2VLsaAp32EALw_wcB"
        > */}
        <Donate
          target="_blank"
          href="https://lgvfund.com/uk?gclid=Cj0KCQiA5fetBhC9ARIsAP1UMgFU9h7GOdWsOLalgY1VLYPYN7M67JpVoO8qi3vvrXh1vWND4UY2VLsaAp32EALw_wcB"
        >
          <VolunteerActivismOutlinedIcon htmlcolor="white" />
        </Donate>
        {/* </Typography> */}
      </Typography>
      <Image src={homePageImage} alt="Stop war in Ukraine" />
    </Hero>
  );
};

export default HomePage;
