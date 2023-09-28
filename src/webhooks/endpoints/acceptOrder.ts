import express, {Request, Response} from 'express'
import {app} from '../../start/app'
import axios, {AxiosError} from 'axios'
import {paths} from '../types'
import dayjs from 'dayjs'

/**
 * En este ejemplo se va a injectar un pedido a Crisp cuando se entre a esta URL
 */
app.put('/acceptOrder', async (req: Request, res: Response) => {
  const input: paths['/acceptOrder']['put']['requestBody']['content']['application/json'] =
    req.body
  console.log('received acceptOrder', input)

  const result: paths['/acceptOrder']['put']['responses']['200']['content']['application/json'] =
    {
      // message: 'not ok',
      // status: 'error',
      status: 'success',
    }

  res.end(JSON.stringify(result, null, 2))
})
