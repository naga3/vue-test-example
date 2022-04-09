import { shallowMount } from '@vue/test-utils'
import MyForm4 from '@/components/MyForm4.vue'
import { double } from '@/components/double'

jest.mock('@/components/double')

afterEach(() => {
  jest.resetAllMocks()
})

it('Jest mock', async () => {
  (double as jest.Mock).mockReturnValue(6)
  const wrapper = shallowMount(MyForm4)

  await wrapper.find('input[data-testid="input"]').setValue(3)

  expect(wrapper.find('[data-testid="message"]').text()).toBe('3を2倍すると6です')
  expect(double).toHaveBeenCalledTimes(2)
  expect(double).toHaveBeenLastCalledWith(3)
})
