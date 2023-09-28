import express, {Request, Response} from 'express'
import {app} from '../../start/app'
import axios, {AxiosError} from 'axios'
import {paths} from '../types'
import dayjs from 'dayjs'

/**
 * En este ejemplo se va a injectar un pedido a Crisp cuando se entre a esta URL
 */
app.put('/rejectOrder', async (req: Request, res: Response) => {
  const input: paths['/rejectOrder']['put']['requestBody']['content']['application/json'] =
    req.body
  console.log('received rejectOrder', input)

  const result: paths['/rejectOrder']['put']['responses']['200']['content']['application/json'] =
    {
      message: 'not ok',
      status: 'error',
    }

  res.end(JSON.stringify(result, null, 2))
})
