import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Question = ({ question, answers, correctAnswer, onAnswerSelected }) => {
    return (
        <Grid container spacing={2} sx={{ textAlign: 'center', padding: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    {question}
                </Typography>
            </Grid>
            {answers.map((answer, index) => (
                <Grid item xs={6} key={index}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => onAnswerSelected(answer)}
                        sx={{ width: '100%', padding: 1 }}
                    >
                        {answer}
                    </Button>
                </Grid>
            ))}
        </Grid>
    );
}

export default Question;
