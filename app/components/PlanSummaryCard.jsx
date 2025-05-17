import { Button, Card, CardContent, CardActions, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "./icons/ArrowForwardIcon";
import { alpha } from '@mui/material/styles';

export default function PlanSummaryCard({ name, summary, prefered }) {
  return(
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        outline: prefered > 0? '2px solid' : 'none',
        outlineColor: prefered == 2? 'secondary.main' : 'primary.main',
        backgroundColor: prefered > 0 ? 'action.hover' : 'background.paper',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        }
      }}
      
      component='article'
    >
      <CardContent
        sx={{
          flexGrow: 1
        }}
      >
        <Box>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
        </Box>
        <Box sx={{
          height: (prefered > 0? 4 : 2),
          borderRadius: 2,
          width: '100%',
          backgroundColor: prefered == 2 ? 'secondary.main' : prefered == 1 ? 'primary.main' : 'primary.dark',
        }} />
        <Typography variant='body2' sx={{ mt: 1, color: 'text.secondary' }}>
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant={prefered > 0? 'contained' : 'outlined'}
          color={prefered == 2? 'secondary' : 'primary'}
          fullWidth
        >
          Learn More
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  )
}