import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as t,a as p,e,r as o}from"./app.24ca46a9.js";const c={},l=e(`<blockquote><p>\u8FD9\u7BC7\u6587\u7AE0\u4ECB\u7ECD\u4E86<code>console</code>\u610F\u60F3\u4E0D\u5230\u7684\u4F7F\u7528\u65B9\u6CD5\u3002</p></blockquote><p>\u73B0\u5728\uFF0C\u8BA4\u4E3A\u60A8\u6B63\u5728\u7F16\u5199\u4E00\u4E9B <code>JS</code> \u4EE3\u7801\u5E76\u4E14\u5B83\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002\u4F60\u505A\u7684\u7B2C\u4E00\u4EF6\u4E8B\u662F\u4EC0\u4E48\uFF1F\u4F60\u5728<code>console.log</code>\u641E\u5B9A\u5B83\uFF01\u6240\u4EE5\u6211\u8981\u544A\u8BC9\u4F60\u4E00\u4E9B\u66FF\u4EE3\u65B9\u6848<code>console.log</code>\u3002</p><h3 id="\u4F7F\u7528\u89E3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u89E3\u6784" aria-hidden="true">#</a> \u4F7F\u7528\u89E3\u6784</h3><p>\u901A\u8FC7\u4F7F\u7528 <code>javascript </code>\u5BF9\u8C61\u7684\u7834\u574F\u80FD\u529B\uFF0C\u60A8\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token operator">=</span> console<span class="token punctuation">;</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u60A8\u53EF\u4EE5\u5C06<code>log</code>\u51FD\u6570\u66F4\u6539\u4E3A\u60A8\u60F3\u8981\u7684\u4EFB\u4F55\u5176\u4ED6\u540D\u79F0\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">log</span><span class="token operator">:</span> myLog <span class="token punctuation">}</span> <span class="token operator">=</span> console<span class="token punctuation">;</span>

<span class="token function">myLog</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">myLog</span><span class="token punctuation">(</span><span class="token string">&quot;testing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-group" tabindex="-1"><a class="header-anchor" href="#console-group" aria-hidden="true">#</a> <code>console.group</code></h3><p>\u66FE\u7ECF\u60F3\u5BF9\u60A8\u7684\u65E5\u5FD7\u8FDB\u884C\u5206\u7EC4\u5417\uFF1F\u8FD9\u4E2A\u65B9\u6CD5\u5F88\u9002\u5408\u4F60\uFF01</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&quot;groupName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token string">&quot;groupName2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">groupEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:47*182370493-7767d697-e566-4c49-92cb-05d165ab2436*9.png" alt="img"></p><p>\u4E0D\u9519\u5427\uFF1F</p><h3 id="console-table" tabindex="-1"><a class="header-anchor" href="#console-table" aria-hidden="true">#</a> <code>console.table</code></h3><p>\u7528\u4E8E\u6253\u5370\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:47*182370737-70aaa896-1ab8-4a54-995a-8428980df357*f.png" alt="img"></p><h3 id="console-time" tabindex="-1"><a class="header-anchor" href="#console-time" aria-hidden="true">#</a> <code>console.time</code></h3><p>\u6B64\u65B9\u6CD5\u7528\u4E8E\u6D4B\u91CF\u65F6\u95F4\u3002\u4F8B\u5982\uFF0C\u68C0\u67E5\u5B8C\u6210 x \u4EFB\u52A1\u82B1\u4E86\u591A\u5C11\u79D2\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="console-assert" tabindex="-1"><a class="header-anchor" href="#console-assert" aria-hidden="true">#</a> <code>console.assert</code></h3><p>\u6B64\u65B9\u6CD5\u7528\u4E8E\u68C0\u67E5\u6761\u4EF6\u662F\u5426\u4E3A\u771F\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5B83\u5C06\u5F15\u53D1\u9519\u8BEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token doc-comment comment">/** Condition **/</span><span class="token punctuation">,</span> <span class="token doc-comment comment">/** Error message **/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;1 is equal to 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// No error</span>
console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;0 is equal to []&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error in the console</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:47*182371841-3df01141-216a-4727-856b-5cccbc6eadba*6.png" alt="img"></p><h3 id="console-count" tabindex="-1"><a class="header-anchor" href="#console-count" aria-hidden="true">#</a> <code>console.count</code></h3><p>\u8BA1\u7B97\u67D0\u4EF6\u4E8B\u53D1\u751F\u7684\u6B21\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&quot;counter 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">?</span> console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&quot;counter 1&quot;</span><span class="token punctuation">)</span> <span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&quot;counter 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u7ED9\u4E86\u6211\u4EEC\u4EE5\u4E0B\u7ED3\u679C\uFF1A</p><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:47*182372290-97fa3235-5a8a-4320-965d-caaaf1afcf08*1.png" alt="img"></p><h3 id="console-trace" tabindex="-1"><a class="header-anchor" href="#console-trace" aria-hidden="true">#</a> <code>console.trace</code></h3><p>\u6B64\u65B9\u6CD5\u8DDF\u8E2A\u5B83\u88AB\u8C03\u7528\u7684\u4F4D\u7F6E\u3002\u6211\u6709\u4E00\u4E2A\u8FD9\u6837\u7684 HTML \u6587\u4EF6\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
            <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>

            console<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u4F60\u53EF\u4EE5\u770B\u5230\u5728\u54EA\u91CC<code>console.trace</code>\u88AB\u8C03\u7528\u4E86\u3002</p><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:47*182372829-db2ad062-8c3c-4596-91a4-3c87bf828414*4.png" alt="img"></p><h3 id="debugger\u5173\u952E\u8BCD" tabindex="-1"><a class="header-anchor" href="#debugger\u5173\u952E\u8BCD" aria-hidden="true">#</a> <code>debugger</code>\u5173\u952E\u8BCD</h3><p>\u60A8\u53EF\u80FD\u6CA1\u6709\u542C\u8BF4\u8FC7\u8BE5<code>debugger</code>\u5173\u952E\u5B57\u3002\u5B83\u662F\u4E00\u4E2A\u7528\u4E8E\u505C\u6B62\u4EE3\u7801\u6267\u884C\u7684\u5173\u952E\u5B57\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">buggyCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">debugger</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

<span class="token function">buggyCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u6682\u505C\u4EE3\u7801\u7684\u6267\u884C\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:49*182373219-422af3f1-ab37-4555-8459-ebe6e1aae2aa*5.png" alt="img"></p><p>\u5B83\u4F1A\u544A\u8BC9\u60A8\u8C03\u8BD5\u5668\u7684\u8C03\u7528\u4F4D\u7F6E\u3002</p><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/https/user-images.githubusercontent.com/76736580/2022-08-07-16:45:52*182373345-a98e989b-545c-41a7-ae4a-c0ba55f6ea4c*6.png" alt="img"></p>`,42);function u(i,r){const n=o("CountView");return a(),t("div",null,[p(n),l])}var m=s(c,[["render",u],["__file","you-dont-know-console.html.vue"]]);export{m as default};
