var router = express.Router();

router.get('/', (req:any, res:any) => {
    res.send('Server is running and GET on / is working.');
});

router.post('/posts', (req:any, res:any) => {
    const reqBody = req.body;
    res.send('Hey du');
});

module.exports = router;