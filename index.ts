import app from './App'

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
    if (err) return console.log('INIT SERVER ERROR: ',err);
    return console.log(`server is listening on ${port}`)
});
