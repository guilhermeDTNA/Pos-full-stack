import { express } from 'express';
import { pkg } from 'body-parser';
import { router } from './routes/router.js';

const app = express();
const { json, urlendcooded } = pkg;

app.use(json());
app.use(urlendcooded({ extended: true }))

app.listen(3000, function(){
    console.log("Listening from 3000");
})

app.use("/", router);

// CONTINUAR DO MOMENTO 10:10