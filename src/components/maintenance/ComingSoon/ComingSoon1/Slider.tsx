// material-ui
import { CardMedia, Grid, Link } from '@mui/material';

// third party
import Slider from 'react-slick';

// assets
const imageSlider1 = '/assets/images/maintenance/img-slider-layout1.png';
const imageSlider2 = '/assets/images/maintenance/img-slider-layout2.png';
const imageSlider3 = '/assets/images/maintenance/img-slider-layout3.png';

// ================================|| SLIDER - ITEMS ||================================ //

const Item = ({ item }: { item: { image: string } }) => (
  <Grid container direction="column" alignItems="center" spacing={3} textAlign="center">
    <Grid item>
      <CardMedia component="img" image={item.image} title="Slider5 image" />
    </Grid>
  </Grid>
);

// ================================|| SLIDER ||================================ //

const ComingSoonSlider = ({ handleClickOpen }: { handleClickOpen: (slideIndex: number) => void }) => {
  const settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const items = [
    {
      image: imageSlider1
    },
    {
      image: imageSlider2
    },
    {
      image: imageSlider3
    }
  ];
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Link key={index} href="#" variant="inherit" component="div" sx={{ cursor: 'pointer' }} onClick={() => handleClickOpen(index)}>
          <Item item={item} />
        </Link>
      ))}
    </Slider>
  );
};

export default ComingSoonSlider;
