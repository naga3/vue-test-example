import { shallowMount } from '@vue/test-utils'
import MyForm2 from '@/components/MyForm2.vue'

it('フォーム入力', async () => {
  const wrapper = shallowMount(MyForm2, {
    props: { receiver: '鈴木' }
  })

  const elemComment = wrapper.find('[data-testid="input-comment"]')
  const elemSend = wrapper.find('[data-testid="button-send"]')
  const elemMessage = () => wrapper.find('[data-testid="message"]')

  // 送信ボタンのラベルが正しいこと
  expect(elemSend.text()).toBe(`鈴木さんに送る`)

  // 最初はメッセージが空であること
  expect(elemMessage().text()).toBe('')

  // コメントを入力中のメッセージが表示されること
  await elemComment.setValue('こんにちは')
  expect(elemMessage().text()).toBe('「こんにちは」と入力中...')

  // 送信ボタンを押すと入力中のメッセージは消え、sendComment イベントが emit されること
  await elemComment.setValue('こんばんは')
  await elemSend.trigger('click')
  expect(elemMessage().text()).toBe('')
  const sendEvent = wrapper.emitted('sendComment')
  expect(sendEvent).toHaveLength(1)
  expect(sendEvent?.[0]).toEqual(['こんばんは'])
})
