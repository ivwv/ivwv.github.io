import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as p,a as t,e,r as o}from"./app.aabddfa6.js";const c={},l=e(`<blockquote><p><code>forEach</code> <code>some</code> <code>every</code> <code>reduce</code> \u6570\u7EC4\u8FC7\u6EE4\u7684\u56DB\u79CD\u65B9\u6CD5</p></blockquote><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h2><blockquote><p>forEach\u5FAA\u73AF\u4E00\u65E6\u88AB\u6267\u884C\uFF0C\u4F1A\u4ECE\u5934\u6267\u884C\u5230\u5C3E\uFF0C\u4E0D\u4F1A\u4E2D\u95F4\u88AB\u505C\u6B62</p><p>\u5BB9\u6613\u6D6A\u8D39\u6027\u80FD</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u9ED1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">&quot;\u5C0F\u660E&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*04*8.jpg" alt="04"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">&quot;\u5C0F\u767D&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*05*8.jpg" alt="05"></p><blockquote><p>forEach \u4F1A\u5C06\u6570\u7EC4\u5185\u7684\u6240\u6709\u9879\u90FD\u626B\u63CF\u4E00\u904D</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u6570\u7EC4\u5BF9\u8C61</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token comment">// const arr = [&#39;\u5C0F\u7EA2&#39;, &#39;\u5C0F\u660E&#39;, &#39;\u5C0F\u767D&#39;, &#39;\u5C0F\u9ED1&#39;, &#39;\u5C0F\u767D&#39;];</span>
        <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;\u5C0F\u767D&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*06*7.jpg" alt="06"></p><h2 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some</h2><blockquote><p>\u5728\u627E\u5230\u5BF9\u5E94\u7684\u9879\u4E4B\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7return true \u56FA\u5B9A\u7684\u8BED\u6CD5\u6765\u7EC8\u6B62\u5FAA\u73AF</p><p>\u5E94\u7528\u573A\u666F\uFF1A\u53EA\u9700\u8981\u5728\u6570\u7EC4\u4E2D\u627E\u5230\u4E00\u9879\u81EA\u5DF1\u9700\u8981\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u7528some</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u5728\u627E\u5230\u5BF9\u5E94\u7684\u9879\u4E4B\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7return true \u56FA\u5B9A\u7684\u8BED\u6CD5\u6765\u7EC8\u6B62\u5FAA\u73AF</span>
				<span class="token comment">//\u6EE1\u8DB3\u81EA\u5DF1\u7684\u9700\u6C42\u540E\uFF0C\u627E\u5230\u4E86\u81EA\u5DF1\u60F3\u8981\u7684\u90A3\u4E00\u9879\uFF0C\u5C31\u53EF\u4EE5\u9000\u51FA\u5FAA\u73AF</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*07*d.jpg" alt="07"></p><h2 id="every" tabindex="-1"><a class="header-anchor" href="#every" aria-hidden="true">#</a> every</h2><blockquote><p>every\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C</p><p>\u53EA\u8981\u6BCF\u4E00\u9879\u90FD\u6EE1\u8DB3\u5224\u65AD\u6761\u4EF6\u5C31\u8FD4\u56DEtrue</p><p>\u53EA\u8981\u6709\u4E00\u9879\u4E0D\u6EE1\u8DB3\u5C31\u8FD4\u56DEfalse</p><p>\u4F1A\u5C06\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u90FD\u626B\u63CF\u4E00\u904D</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u7EA2&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u9ED1&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u767D&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
<span class="token comment">//\u4EE5\u4E0B\u4E24\u79CD\u5199\u6CD5\u90FD\u4E00\u6837</span>
<span class="token comment">//const result = obj.every(item =&gt; item.state === true)</span>
<span class="token comment">/*
const result = obj.every(item =&gt; {
            if (item.state === true) {
                newArr.push(item);
                return true;
            }
        })
*/</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h2><blockquote><p>\u628A\u6BCF\u4E00\u9879\u90FD\u7D2F\u52A0\u8D77\u6765</p></blockquote><p><strong>reduce\u4F2A\u4EE3\u7801</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">\u7D2F\u52A0\u7684\u7ED3\u679C<span class="token punctuation">,</span>\u5F53\u524D\u5FAA\u73AF\u9879</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> \u521D\u59CB\u503C<span class="token punctuation">)</span>
<span class="token number">1.</span>\u7B2C\u4E00\u9879\u7684\u7ED3\u679C\u7B49\u4E8E\u521D\u59CB\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u897F\u74DC&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u82F9\u679C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9999\u8549&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token comment">//\u9700\u6C42:\u628A\u8D2D\u7269\u8F66\u6570\u7EC4\u4E2D\uFF0C\u5DF2\u52FE\u9009\u7684\u6C34\u679C\uFF0C\u603B\u4EF7\u7D2F\u52A0\u8D77\u6765</span>
<span class="token comment">//\u666E\u901A\u65B9\u6CD5\uFF0C\u4F7F\u7528filter+forEach</span>
<span class="token keyword">let</span> amt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//\u603B\u4EF7</span>
arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    amt <span class="token operator">+=</span> item<span class="token punctuation">.</span>price <span class="token operator">*</span> item<span class="token punctuation">.</span>count
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>amt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//70</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u9AD8\u7EA7\u65B9\u6CD5\uFF0C\u4F7F\u7528filter+reduce</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u897F\u74DC&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u82F9\u679C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u9999\u8549&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8461\u8404&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">4</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8354\u679D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">5</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token comment">//\u628A\u8D2D\u7269\u8F66\u6570\u7EC4\u4E2D\uFF0C\u5DF2\u52FE\u9009\u7684\u6C34\u679C\uFF0C\u603B\u4EF7\u7D2F\u52A0\u8D77\u6765</span>
        <span class="token comment">// arr.filter(item =&gt; item.state).reduce((\u7D2F\u52A0\u7684\u7ED3\u679C,\u5F53\u524D\u5FAA\u73AF\u9879) =&gt; { }, \u521D\u59CB\u503C)</span>
        <span class="token comment">//filter\u8FC7\u6EE4state\u88AB\u9009\u4E2D\u7684\u6C34\u679C\uFF0C\u518D\u4F7F\u7528reduce\u7D2F\u52A0</span>
        <span class="token keyword">const</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">amt<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>amt<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> amt <span class="token operator">+=</span> item<span class="token punctuation">.</span>price <span class="token operator">*</span> item<span class="token punctuation">.</span>count
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;result&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://public-1310720021.cos.ap-shanghai.myqcloud.com/img/md/img/2022-07-03-15:02:47*08*d.jpg" alt="08"></p><p><strong>reduce \u7B80\u5199\u65B9\u6CD5</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">amt<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> amt <span class="token operator">+=</span> item<span class="token punctuation">.</span>price <span class="token operator">*</span> item<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26);function r(i,u){const n=o("CountView");return a(),p("div",null,[t(n),l])}var m=s(c,[["render",r],["__file","array-filter.html.vue"]]);export{m as default};
