import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRouter from './routes/user.routes.js';
// import applicationRouter from './routes/application.routes.js';
// import jobRouter from './routes/job.routes.js';

const app = express();
// dotenv.config();


app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET', 'POST' , 'DELETE', 'PUT'],
    credentials:true
}))


// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.use(fileUpload({
//     useTempFiles:true,
//     tempFileDir:'/temp/',
// }));

app.use('/user',userRouter);
// app.use('/api/application',applicationRouter);
// app.use('/api/job',jobRouter);


export default app;