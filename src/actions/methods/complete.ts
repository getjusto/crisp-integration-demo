import express, {Request, Response} from 'express'
import {app} from '../../start/app'
import {baseURL, salesChannelId, token} from '../credentials'
import axios, {AxiosError} from 'axios'
import {paths} from '../types'
import dayjs from 'dayjs'

/**
 * En este ejemplo se va a injectar un pedido a Crisp cuando se entre a esta URL
 */
app.get('/test-complete', async (req: Request, res: Response) => {
  try {
    const data: paths['/{salesChannelConfigId}/complete-order']['put']['requestBody']['content']['application/json'] =
      {
        integrationOrderId: '4',
      }

    console.log('sending complete order', data)
    const result = await axios<
      paths['/{salesChannelConfigId}/complete-order']['put']['responses']['200']['content']['application/json']
    >({
      url: `${baseURL}/${salesChannelId}/complete-order`,
      method: 'put',
      data,
      headers: {
        Authorization: token,
      },
    })

    res.end(JSON.stringify(result.data, null, 2))
  } catch (error: any) {
    res.end(JSON.stringify(error.response.data, null, 2))
  }
})
