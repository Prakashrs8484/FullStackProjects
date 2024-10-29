import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
export default function({info})
{
  const HOT_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?s=2048x2048&w=is&k=20&c=imXaczN9FcMjasjmjuZGOZraYMBSUy6ga4hoP084lBg="
  const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=2048x2048&w=is&k=20&c=5elyCWs3aC4y7DDlZu1HLkksbQbDAkCINao9imMHOdw="
    return (
        <div className="InfoBox">
            <div className="Card">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80 ? RAIN_URL
           : (info.temp>15) ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Live weather
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}</p>
           <p>Max Temp = {info.tempMax}</p>
           <p>The weather can be described as <i></i>{info.weather}<i/> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
            </div>
        </div>
    )
}