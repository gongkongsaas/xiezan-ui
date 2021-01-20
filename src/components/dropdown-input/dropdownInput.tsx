import { defineComponent, PropType, ref } from 'vue'
import { Data } from './types/data'

interface EmitData extends Data {
  writeData?: string | null
}

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<Data[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    const emitData = ref<EmitData>(props.data[0])

    // list 状态
    const listStatus = ref<boolean>(false)
    const updateListStatus = (status: boolean) => {
      listStatus.value = status
    }

    // text
    const textVal = ref<string>(props.data[0].text)
    const updateTextVal = (text: string, index: number) => {
      textVal.value = text
      emitData.value = props.data[index]
      emit('getData', emitData.value)
    }

    // write Data
    const writeData = ref<string | null>(null)
    const updateWriteVal = () => {
      emitData.value.writeData = writeData.value
      emit('getData', emitData.value)
    }

    return () => (
      <div class="dropdown-input">
        <div
          class="list"
          onMouseover={updateListStatus.bind(null, true)}
          onMouseleave={updateListStatus.bind(null, false)}
        >
          <i class="iconfont">&#xe7ad;</i>
          <ul v-show={listStatus.value}>
            {props.data.map((item, index) => (
              <li
                key={item.id}
                onClick={updateTextVal.bind(null, item.text, index)}
                style={item.text === textVal.value ? 'background:#f5f5f5;' : ''}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div class="text">{textVal.value}：</div>
        <div class="write">
          <input
            type="text"
            autocomplete="off"
            placeholder={`请输入${textVal.value}`}
            v-model={writeData.value}
            onBlur={updateWriteVal}
          />
          <i class="iconfont" onClick={() => (writeData.value = '')}>
            &#xe6c2;
          </i>
        </div>
      </div>
    )
  },
})
