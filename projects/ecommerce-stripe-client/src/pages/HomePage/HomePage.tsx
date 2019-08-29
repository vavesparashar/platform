import React, { FC } from 'react'

import { PageWrapper, PrivateRouteReturnComponentProps } from '../../components'

type P = PrivateRouteReturnComponentProps

export const HomePage: FC<P> = ({ user }) => {
  return <PageWrapper>home page</PageWrapper>
}
