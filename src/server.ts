import start from './app';

let port = process.env.PORT || '3000';

start.app.listen(port, () => {
  console.log(`Server start on ${port}`);
})