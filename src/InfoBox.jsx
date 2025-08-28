import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info})
{
    let INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";

    let HOT_URL="https://media.istockphoto.com/id/453477435/photo/hot.webp?a=1&b=1&s=612x612&w=0&k=20&c=npTWFHlgMQW_VdZ35cszLa3-DIe0gmwtEaIYWpWq-fU=";
    let COLD_URl="https://plus.unsplash.com/premium_photo-1671004290998-333a52ebde76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D";
    return(
        <div className="Info">
            {/* <h1>Weather Info-{info.weather}</h1> */}
            <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      style={{border:"2px solid black"}}
        sx={{ height: 200 }}
        image={info.humidity>80?RAIN_URL:(info.temp>15?HOT_URL:COLD_URl)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80?<ThunderstormIcon />:(info.temp>15?<SunnyIcon />:<AcUnitIcon />)
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature:{info.temp}&deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>Max Temp:{info.max_temp}&deg;C</p>
            <p>Min Temp:{info.min_temp}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and it feels like {info.feels_like}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}