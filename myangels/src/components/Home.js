import React from 'react'
import { Grid, IconButton, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FeatherIcon from 'feather-icons-react'


const useStyles = makeStyles((theme)=> ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: theme.palette.pink,
    },
    board: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(6),
        width: '100%',
        background: theme.palette.white,
        borderRadius: "80px 80px 0px 0px",
        minHeight: '600px',
    },
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
                        <img style={{width:'80px'}} src={imageavatar}/>
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

function Home() {
    const classes = useStyles();
    const imageavatar = 'https://i.pinimg.com/originals/9c/d7/47/9cd747805b356df8a36e7fd356bf3084.png'
    return (
        <Grid container direction='column' alignItems='center' className={classes.root}>
            <Grid item xs={12} align='center'>
                <Typography variant='h4'>My Angels</Typography>
                <Typography variant='subtitle1'>Score Board</Typography>
            </Grid>
            <Grid item xs={12} className={classes.board}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <ScoreCard imageavatar={imageavatar} />
                    </Grid>
                    <Grid item>
                        <ScoreCard imageavatar={imageavatar} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home
