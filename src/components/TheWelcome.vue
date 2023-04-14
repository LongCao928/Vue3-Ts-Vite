<script setup lang="ts">
// import { defineComponent } from 'vue'
import { ref, reactive, computed } from 'vue'
import type { Ref } from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

// ref/reactive 隐式推导类型

// 传入泛型参数。没给初始值的话，包含 undefined 在内的联合类型。
// const title = ref<string | number>('Documentation')

// 通过 Ref 为 ref 内的值指定一个更复杂的类型。
const title: Ref<string | number> = ref('Documentation')

interface IData {
  content: string,
  year?: number
}
const data: IData = reactive({
  content: 'Vue 3 指引'
})
console.log(data.content)

const count = ref(0)
const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
  return count.value * 2
})
double
/* export default defineComponent ({
  props: {
    foo: String
  },
  setup(props, { emit }) {
    props.foo
  }
}) */

// const props = defineProps(['foo'])

// 运行时声明，传递给 defineProps() 的参数会作为运行时的 props 选项使用。
/* const props = defineProps({
  foo: { type: String, required: true },
  age: Number
}) */

// 基于类型的声明，泛型参数定义 props
// 同一个文件中的一个接口或对象类型字面量的引用
interface Props {
  foo: string,
  age?: number
}

// 传递给 defineProps 的泛型参数本身不能是一个导入的类型。
// 因为 Vue 组件是单独编译的，编译器目前不会抓取导入的文件以分析源类型。
// 计划在未来的版本中解决这个限制。
const props = defineProps<Props>()

console.log(props.foo)

// 通过 withDefaults 声明默认值
/* withDefaults(defineProps<Props>(), {
  age: 26
}) */

function handleEvent(event: MouseEvent, name: string) {
  console.log('someEvent')
  console.log(event)
  console.log(name)
}

</script>

<template>
  <WelcomeItem @some-event="handleEvent">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ title }}</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
    you need more resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
