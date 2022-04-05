
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function SliderContent({ activeIndex, sliderImage }:any) {
  return (
    <section >
      {sliderImage.map((slide:any, index:number) => (
        <section 
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
           <Card  >
                 <CardActionArea>
                    <CardMedia
                   className="slide-image"
                        component="img"
                         image={slide.urls}
                         alt= {slide.title}
                          />
                             <CardContent>
                       
                        </CardContent>
                    </CardActionArea>
                    </Card>
        </section>
      ))}
    </section>
  );
}

export default SliderContent;
