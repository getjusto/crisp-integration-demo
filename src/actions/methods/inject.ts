import express, {Request, Response} from 'express'
import {app} from '../../start/app'
import {baseURL, salesChannelId, token} from '../credentials'
import axios, {AxiosError} from 'axios'
import {paths} from '../types'
import dayjs from 'dayjs'

/**
 * En este ejemplo se va a injectar un pedido a Crisp cuando se entre a esta URL
 */
app.get('/test-inject', async (req: Request, res: Response) => {
  try {
    const data: paths['/{salesChannelConfigId}/inject-order']['post']['requestBody']['content']['application/json'] =
      {
        displayId: '7',
        integrationOrderId: '7',
        deliveryType: 'go',
        integrationIsPending: true,
        mustBeReadyAt: dayjs().format(),
        mustBeDeliveredAt: dayjs().add(10, 'minute').format(),
        clientData: {
          name: 'Nico',
        },
        paidAmount: 10000,
        paidTipAmount: 1000,
        discountAmount: 500,
        products: [
          {
            amount: 1,
            comment: 'Sin cebolla',
            name: 'Pizza de peperoni y cebolla',
            unitPrice: 10000,
            modifiers: [
              {
                modifierGroupName: 'Extras',
                modifierName: 'Queso extra',
                unitPrice: 500,
                modifierQuantity: 1,
              },
            ],
          },
        ],
      }

    console.log('sending order', data)
    const result = await axios<
      paths['/{salesChannelConfigId}/inject-order']['post']['responses']['200']['content']['application/json']
    >({
      url: `${baseURL}/${salesChannelId}/inject-order`,
      method: 'post',
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
