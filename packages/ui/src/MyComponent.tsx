import { styled, YStack } from 'tamagui'
import {Star} from '@tamagui/lucide-icons'

export const MyComponentY = styled(YStack, {
  name: 'MyComponent',
  bc: 'red',
})

export const MyComponent = ({children}) => {
  return (
    <MyComponentY>
      <Star/>
      {children}
    </MyComponentY>
  )
}
