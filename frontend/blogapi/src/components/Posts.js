import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));


// const tiers = [
//     {
//         title: 'Free',
//         price: '0',
//         description: [
//             '10 users included',
//             '2 GB of storage',
//             'Help center access',
//             'Email support',
//         ],
//         buttonText: 'Sign up for free',
//         buttonVariant: 'outlined',
//     },
//     {
//         title: 'Pro',
//         subheader: 'Most popular',
//         price: '15',
//         description: [
//             '20 users included',
//             '10 GB of storage',
//             'Help center access',
//             'Priority email support',
//         ],
//         buttonText: 'Get started',
//         buttonVariant: 'contained',
//     },
//     {
//         title: 'Enterprise',
//         price: '30',
//         description: [
//             '50 users included',
//             '30 GB of storage',
//             'Help center access',
//             'Phone & email support',
//         ],
//         buttonText: 'Contact us',
//         buttonVariant: 'outlined',
//     },
// ];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function Posts(props) {
    const { posts } = props;
    const classes = useStyles();
    if (!posts || posts.length === 0) {
        return (<p>Can not find any posts, sorry.</p>);
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            {/* Hero unit */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                {/* <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography> */}
                {/* <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Quickly build an effective pricing table for your potential customers with
                    this layout. It&apos;s built with default MUI components with little
                    customization.
                </Typography> */}
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {posts.map((post) => {
                        return (
                            <Grid item key={post.id} xs={12} md={4}>
                                <Card className={classes.card}  >
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={require('../assets/img/images.jpeg')}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h2"
                                            className={classes.postTitle}
                                        >
                                            {post.title.substr(0, 18)}...
                                        </Typography>
                                        <div className={classes.postText}>
                                            <Typography
                                                component="p"
                                                color="textPrimary"
                                            ></Typography>
                                            <Typography variant="p" color="textSecondary">
                                                {post.excerpt.substr(0, 60)}...
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                    {/* {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))} */}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default Posts;
