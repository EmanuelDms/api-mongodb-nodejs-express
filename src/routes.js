import { Router } from 'express';

const routes = new Router();

routes.get('/test', (req, res) => {
  const { foo } = req.body;

  if (foo == 1) {
    return res.json({message: "Hello World!"})
  }
  return res.json({message: "Nothing to say!"})
});

export default routes;