import express, {Request, Response} from 'express'
import {app} from '../../start/app'
import axios, {AxiosError} from 'axios'
import {paths} from '../types'
import dayjs from 'dayjs'

/**
 * En este ejemplo se va a injectar un pedido a Crisp cuando se entre a esta URL
 */
app.put('/orderReady', async (req: Request, res: Response) => {
  const input: paths['/orderReady']['put']['requestBody']['content']['application/json'] =
    req.body
  console.log('received orderReady', input)

  const result: paths['/orderReady']['put']['responses']['200']['content']['application/json'] =
    {
      status: 'success',
    }

  res.end(JSON.stringify(result, null, 2))
})
