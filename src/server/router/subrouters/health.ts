import { t } from '../utils';

export const health = t.router({
  healthz: t.procedure.query(() => 'I am alive')
})