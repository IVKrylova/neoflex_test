import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Section } from '@/features/Section/Section'
import { Input } from '@/components/Input/Input'
import { CartList } from '@/features/CartList/CartList'
import { Button } from '@/components/Button/Button'
import {
  CartFormType,
  ErrorOrderForm,
  OfferDataType,
} from '@/shared/types/Cart'

import s from './OrderFormPage.module.scss'
import { useAppSelector } from '@/store/hook'

export const OrderFormPage: FC = () => {
  const cart = useAppSelector(store => store.cart.cart)
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OfferDataType>()

  const onSubmit: SubmitHandler<OfferDataType> = (formData: CartFormType) => {
    const newFormData = {
      ...formData,
      cart: cart.map(el => ({ id: el.id, count: el.countInCart })),
    }
    console.log(newFormData)
    reset()
  }

  return (
    <Section title='Оформление заказа' colorTitle='black'>
      <div className={s.listWrap}>
        <CartList />
      </div>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='name'
          control={control}
          rules={{
            required: ErrorOrderForm.NAME,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Имя'
              type='text'
              onChange={onChange}
              value={value}
              error={errors.name}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          rules={{
            required: ErrorOrderForm.EMAIL,
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label='Email'
              type='email'
              onChange={onChange}
              value={value}
              error={errors.email}
            />
          )}
        />

        <Button type='submit' style='default' text='Оформить' />
      </form>
    </Section>
  )
}
