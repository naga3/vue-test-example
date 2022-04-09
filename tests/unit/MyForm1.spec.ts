import { shallowMount } from '@vue/test-utils'
import MyForm1 from '@/components/MyForm1.vue'

it('フォーム入力', async () => {
  const wrapper = shallowMount(MyForm1)

  const elemComment = wrapper.find('[data-testid="input-comment"]')
  const elemSendA = wrapper.find('[data-testid="button-send-a"]')
  const elemSendB = wrapper.find('[data-testid="button-send-b"]')
  const elemMessage = () => wrapper.find('[data-testid="message"]')

  // 最初はメッセージが空であること
  expect(elemMessage().exists()).toBe(false)

  // コメントを入力せずにボタンを押すとエラーメッセージが表示されること
  await elemSendA.trigger('click')
  expect(elemMessage().text()).toBe('コメントがありません。')
  await elemSendB.trigger('click')
  expect(elemMessage().text()).toBe('コメントがありません。')

  // コメントを入力してボタンを押すと送信メッセージが表示されること
  await elemComment.setValue('こんにちは')
  await elemSendA.trigger('click')
  expect(elemMessage().text()).toBe('Aさんに「こんにちは」を送りました。')
  await elemSendB.trigger('click')
  expect(elemMessage().text()).toBe('Bさんに「こんにちは」を送りました。')

  // コメントを変更するとメッセージが消えること
  await elemComment.setValue('こんばんは')
  expect(elemMessage().exists()).toBe(false)
})
