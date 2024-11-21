import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  const options: dotenv.DotenvConfigOptions = { path: `.env.${process.env.NODE_ENV}` }; 

  dotenv.config(options);
}