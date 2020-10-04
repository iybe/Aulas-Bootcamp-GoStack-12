import { Router } from 'express';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated';

const sessionsRouter = Router();

sessionsRouter.post('/',async (request, response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    user.password = "";

    return response.json({user, token});
});

export default sessionsRouter;