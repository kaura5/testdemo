
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


function Card({data}) {
    
    if(data.length === 0) return null;else{
        let result = data.filter(obj => obj.category === "men's clothing")
    return(
        <Grid container spacing={2 }>
        {result.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Paper className="paper">
                <img src={item.image} alt="" className="img" />
                <br />
                <Rating name="disabled" value={item.rating.rate} disabled precision={0.5} />
                <Typography variant="body1" gutterBottom margin={2}>
                    {item.title}
                   </Typography> 
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
}}

export default Card;