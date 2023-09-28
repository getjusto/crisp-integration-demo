import {Request, Response} from 'express'
import {app} from '../../start/app'
import {paths} from '../types'
import dayjs from 'dayjs'

/**
 * En este ejemplo se va a injectar un pedido a Crisp cuando se entre a esta URL
 */
app.get('/getAvailability', async (req: Request, res: Response) => {
  console.log('received get availability')

  const result: paths['/getAvailability']['get']['responses']['200']['content']['application/json'] =
    {
      // closedUntil: dayjs().add(1, 'hour').format(),
      suspendedUntil: dayjs().add(1, 'hour').format(),
      status: 'suspended',
    }

  res.end(JSON.stringify(result, null, 2))
})
