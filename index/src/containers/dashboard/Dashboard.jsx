import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";

function Dashboard({ theme }) {
    return (
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">Channel Dashboard</Typography>
            <Box sx={styles.columnContainer}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <LatestVideoCard />
                    <Card sx={styles.item} >
                        <CardContent>
                            <Typography variant="cardTitle">
                                Latest Post
                            </Typography>
                            <Box sx={styles.postAuthorSection}>
                                <Avatar sx={styles.avatar} src="src/assets/avatars/mine.jpg" />
                                <Typography sx={styles.postMeta}>Noila's...</Typography>
                                <Typography sx={styles.postMeta}>May 23, 2023</Typography>
                            </Box>
                            <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, optio ea obcaecati quidem non nostrum! Optio impedit porro quia, sequi adipisci reprehenderit consequatur? Possimus, quo.</Typography>
                            <Divider sx={styles.divider} />
                            <Box sx={styles.postStats}>
                                <Box>
                                    <Typography variant="body2" sx={{ marginTop: 1 }}>Likes</Typography>
                                    <Typography variant="h6" sx={{ marginTop: 1 }}>12</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ marginTop: 1 }}>Comments</Typography>
                                    <Typography variant="h6" sx={{ marginTop: 1 }}>6</Typography>
                                </Box>
                            </Box>
                            <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
                        </CardContent>
                    </Card>
                </Box>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Card sx={styles.item2}>
                        <CardContent>
                            <Typography variant="cardTitle">Channel analytics</Typography>
                            <Typography variant="h7">Current subscribers</Typography>
                            <Typography variant="h4">2.456</Typography>
                            <Typography variant="h7"><ColorText color={'green.main'}>+77</ColorText><ColorText color={'neutral.normal'}>in last 28 days</ColorText></Typography>
                            <Divider sx={styles.divider} />
                            <Typography sx={styles.summary} variant="h6">Summary</Typography>
                            <Typography variant="h8"><ColorText color={'neutral.normal'}>Last 28 days</ColorText></Typography>
                            <Box sx={styles.videoStatsRow}>
                                <Typography variant="h7">Views</Typography>
                                <Typography variant="h7">2.456</Typography>
                            </Box>
                            <Box sx={styles.videoStatsRow}>
                                <Typography variant="h7">Watch Time</Typography>
                                <Typography variant="h7">30</Typography>
                            </Box>
                            <Box sx={styles.videoStatsRow}>
                                <Typography variant="h7">Estimated Revenue</Typography>
                                <Typography variant="h7">450$</Typography>
                            </Box>
                            <Divider sx={styles.divider} />
                            <Typography sx={styles.summary} variant="h6">Top Videos</Typography>
                            <Typography variant="h8"><ColorText color={'neutral.normal'}>Last 48 hours</ColorText></Typography>
                            <Box sx={styles.videoStatsRow}>
                                <Typography variant="h7">How to become a software developer in 2023</Typography>
                                <Typography variant="h7">450</Typography>
                            </Box>
                            <Box sx={styles.videoStatsRow}>
                                <Typography variant="h7">CSS Grid tutorial: How to use Grid</Typography>
                                <Typography variant="h7">568</Typography>
                            </Box>
                            <Box sx={styles.videoStatsRow}>
                                <Typography variant="h7">Call APIS in react native</Typography>
                                <Typography variant="h7">123</Typography>
                            </Box>
                            <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                        </CardContent>
                    </Card >
</Box>
                    


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }} >
                    <Card sx={styles.item}>
                        <CardContent>
                            <Typography variant="cardTitle">Latest Comments</Typography>
                            <Typography variant="h7"><ColorText color='neutral.normal'>Channel comments I haven't responded to</ColorText></Typography>


                            <Box sx={styles.commentRow}>
                                <Avatar sx={styles.avatar} src='src/assets/avatars/mine.jpg' />
                                <Box>
                                    <Box sx={styles.commentDetailssection}>
                                        <Typography sx={styles.postMeta}>
                                            Noila's...
                                        </Typography>
                                        <Typography sx={styles.postMeta}>
                                            2 weeks ago
                                        </Typography>
                                    </Box>
                                    <Typography sx={styles.commentText}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ducimus nam quam eius officia corrupti recusandae est cumque?
                                    </Typography>
                                </Box>
                                <Box
                                    component={'img'}
                                    sx={styles.videoThumbnail}
                                    src='src/assets/avatars/thumbail.jpg'
                                />
                            </Box>
                            <Divider sx={styles.divider} />
                            <Box sx={styles.commentRow}>
                                <Avatar sx={styles.avatar} src='src/assets/avatars/mine.jpg' />
                                <Box>
                                    <Box sx={styles.commentDetailssection}>
                                        <Typography sx={styles.postMeta}>
                                            Noila's...
                                        </Typography>
                                        <Typography sx={styles.postMeta}>
                                            1 weeks ago
                                        </Typography>
                                    </Box>
                                    <Typography sx={styles.commentText}>
                                        how can i deploy?
                                    </Typography>
                                </Box>
                                <Box
                                    component={'img'}
                                    sx={styles.videoThumbnail}
                                    src='src/assets/avatars/thumbail.jpg'
                                />
                            </Box>
                            <Divider sx={styles.divider} />
                            <Box sx={styles.commentRow}>
                                <Avatar sx={styles.avatar} src='src/assets/avatars/mine.jpg' />
                                <Box>
                                    <Box sx={styles.commentDetailssection}>
                                        <Typography sx={styles.postMeta}>
                                            Noila's...
                                        </Typography>
                                        <Typography sx={styles.postMeta}>
                                            2 weeks ago
                                        </Typography>
                                    </Box>
                                    <Typography sx={styles.commentText}>
                                        very helpfull
                                    </Typography>
                                </Box>
                                <Box
                                    component={'img'}
                                    sx={styles.videoThumbnail}
                                    src='src/assets/avatars/thumbail.jpg'
                                />
                            </Box>

                            <Typography sx={styles.cardAction} variant="link">
                                VIEW MORE
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={styles.item}>
                        <CardContent sx={styles.ideaContent}>
                            <Box>
                                <Typography variant="cardTitle">Ideas for you</Typography>
                                <Typography sx={styles.ideasQuestion}>Ready to get business savvy?</Typography>
                                <Typography variant="h7">Get tips from a succesful creator fpr your videos on YouTube</Typography>
                                <Typography sx={styles.cardAction} variant='link'>GET STARTED</Typography>
                            </Box>
                            <Box
                                component={'img'}
                                sx={styles.ideaImage}
                                src='/src/assets/avatars/download.png'
                            />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>

    )
}

/** @type {import('@mui/material').SxProps}* */
const styles = {
    pageTitle: {
        mb: 2
    },
    columnContainer: {
        // columns: "280px 3",
        // maxWidth: 1400,
        display: 'flex',
        flexDirection:{ md: 'row', sm: 'column', lg: 'row' },
        gap: {md:5, sm:1},
        // [theme.breakpoints.down("md")]: {
        //     display: 'flex',
        //     flexDirection: 'column'
        // },
        // [theme.breakpoints.down("sm")]: {
        //     display: 'flex',
        //     flexDirection: 'column'
        // },
    },
    item: {
        width: "350px"
    },
    item2: {
        width: '400px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    avatar: {
        width: '30px',
        height: 'auto',
        mr: 1
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    divider: {
        my: 2
    },
    postStats: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridAutoRows: "25px",
        my: 3,
        mb: 2
    },
    cardAction: {
        mt: 4

    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            cursor: 'pointer',
            color: 'primary.main'
        }
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailssection: {
        display: 'flex',
        alignItems: 'center'
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    summary: {
        fontSize: '21px',
        m: '2px',
    },
    ideaContent: {
        display: 'flex'
    },
    ideasQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    }
}

export default Dashboard;