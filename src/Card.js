
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


function Card({data}) {
    if(data.length === 0) return null;else{
    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Paper className="paper">
                <img src={item.image} alt="" className="img" />
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