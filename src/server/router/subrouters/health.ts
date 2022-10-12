import { router, publicProcedure } from '../utils';

export const health = router({
  healthz: publicProcedure.query(() => 'I am alive')
})