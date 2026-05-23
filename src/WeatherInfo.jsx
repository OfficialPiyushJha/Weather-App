
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function WeatherInfo({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1641970304221-48dc92c14daf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const Rain_URL = "https://images.unsplash.com/photo-1684151061416-3733098c462d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const Snow_URL = "https://plus.unsplash.com/premium_photo-1736520566694-e03efef7e797?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return(
        <div className="info" style={{display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >

             <Card sx={{width : "70%" , maxWidth: 400 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image= {info.humidity > 80 ? Rain_URL : info.temp > 15 ? INIT_URL : Snow_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                        <div>Temperature : {info.temp}&deg; C</div>
                        <div>Feels Like : {info.feels_like}&deg; C</div>
                        <div>Min Temp : {info.temp_min}&deg; C</div>
                        <div>Max Temp : {info.temp_max}&deg; C</div>
                        <div>Humidity : {info.humidity}</div>
                    </Typography>
                </CardContent>
                </Card>
        </div>
    )
}
