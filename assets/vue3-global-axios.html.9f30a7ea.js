import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as n,a as l,e as a,r as d}from"./app.e58c6a43.js";const o={},c=a(`<blockquote><p>\u5982\u4F55\u5728vue3\u9879\u76EE\u4E2D\u5168\u5C40\u914D\u7F6Eaxios</p></blockquote><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><blockquote><p><code>main.js</code></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u5BFC\u5165<code>axiso</code></li><li>\u4E3A<code>axios</code>\u914D\u7F6E\u8BF7\u6C42\u7684\u6839\u8DEF\u5F84 <ul><li><code>axios.defaults.baseURL = &#39;https://api.server.com&#39;</code></li></ul></li><li>\u5C06<code>axios</code>\u6302\u8F7D\u4E3A<code>app</code>\u7684\u5168\u5C40\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E4B\u540E\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7<code>this</code>\u76F4\u63A5\u8BBF\u95EE\u5230\u5168\u5C40\u6302\u8F7D\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027</li><li>\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D\u53EF\u81EA\u5B9A\u4E49\uFF0C\u4E0D\u51B2\u7A81\u5373\u53EF\uFF0C\u8FD9\u91CC\u6302\u8F7D\u7684\u662F<code>$http</code>\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D</li></ol><p><strong>\u4EE3\u7801\u2B07\uFE0F</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

import axios from &#39;axios&#39;

const app = createApp(App)

axios.defaults.baseURL = &#39;https://www.escook.cn&#39;
app.config.globalProperties.$http = axios

app.mount(&#39;#app&#39;)
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><blockquote><p>\u7EC4\u4EF6\u4EE5\u53CA\u5B50\u7EC4\u4EF6\u5185\u65E0\u9700\u5BFC\u5165<code>axios</code></p></blockquote><ol><li>\u4F7F\u7528\u53EF\u4EE5\u901A\u8FC7<code>this.$http</code>\u4F7F\u7528\uFF0C\u5982\u4E0B\u4EE3\u7801\u2B07\uFE0F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
export default {
  name: &#39;Post&#39;,
  methods: {
    async postInfo() {
      const { data: res } = await this.$http.post(&#39;/api/post&#39;, { name: &#39;zs&#39;, age: 20 })
      console.log(res)
    },
  },
}
&lt;/script&gt;
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function r(t,v){const e=d("CountView");return s(),n("div",null,[l(e),c])}var p=i(o,[["render",r],["__file","vue3-global-axios.html.vue"]]);export{p as default};
