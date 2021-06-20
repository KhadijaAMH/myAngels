import React from 'react'
import { Grid, IconButton, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FeatherIcon from 'feather-icons-react'


const useStyles = makeStyles((theme)=> ({
    card: {
        padding: theme.spacing(3),
        border: "3px solid "+theme.palette.blue,
    }
}))

function ScoreCard({imageavatar}) {
    const classes = useStyles();
    return (
        <Grid container direction='row' className={classes.card} alignItems='center' justify='center'>
                    <Grid item>
                        <img alt='My Avatar' style={{width:'80px'}} src={imageavatar}/>
                    </Grid>
                    <Grid item >
                        <Grid container direction='column' alignItems='center'>
                            <Grid item>
                                <Typography>Name Here</Typography>
                            </Grid>
                            <Grid item>
                                <IconButton><FeatherIcon icon='thumbs-up'/></IconButton>
                                <IconButton><FeatherIcon icon='thumbs-down'/></IconButton>
                            </Grid>
                            <Grid item>
                                <Typography>Score 89</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
    )
}

export default ScoreCard;