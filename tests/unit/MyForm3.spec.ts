import { mount } from '@vue/test-utils'
import MyForm3 from '@/components/MyForm3.vue'
import MyForm3Child from "@/components/MyForm3Child.vue"

it('Mount fully', async () => {
  const wrapper = mount(MyForm3)

  await wrapper.find('input[data-testid="input"]').setValue(3)

  const child = wrapper.getComponent(MyForm3Child)
  expect(child.props().number).toBe(3)
  expect(child.text()).toBe('3を2倍すると6です')
})

it('Mount with stub', async () => {
  const MyForm3ChildStub = {
    props: {
      number: {
        type: Number,
        required: true
      }
    },
    template: '<div>{{ number }}を2倍すると{{ number * 2 }}です</div>'
  }
  const wrapper = mount(MyForm3, {
    global: {
      stubs: {
        MyForm3Child: MyForm3ChildStub
      }
    }
  })

  await wrapper.find('input[data-testid="input"]').setValue(3)

  const child = wrapper.getComponent(MyForm3Child)
  expect(child.props().number).toBe(3)
  expect(child.text()).toBe('3を2倍すると6です')
})
