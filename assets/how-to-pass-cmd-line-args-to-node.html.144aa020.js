import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,a as e,b as n,d as s,e as p,r as o}from"./app.4e243588.js";const d={},r=n("blockquote",null,[n("p",null,[s("\u4E0E\u53EF\u4EE5\u4F7F\u7528\u8BED\u6CD5\u5C06\u53C2\u6570\u4F20\u9012\u7ED9\u811A\u672C\u7684 "),n("code",null,"Bash"),s(" \u811A\u672C\u7C7B\u4F3C\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u5C06\u53C2\u6570"),n("code",null,"$1"),s("\u4F20\u9012\u7ED9 "),n("code",null,"Node.js"),s(" \u5E94\u7528\u7A0B\u5E8F\u3002")])],-1),u=n("h3",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),v=s("\u5728\u672C\u5FEB\u901F\u6559\u7A0B\u4E2D\uFF0C\u60A8\u5C06\u5B66\u4E60\u5982\u4F55\u4F7F\u7528"),h={href:"https://nodejs.org/docs/latest/api/process.html#process_process_argv",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"process.argv",-1),b=s("\u6570\u7EC4"),k=s("\u5C06\u53C2\u6570\u4F20\u9012\u7ED9 "),_=n("code",null,"Node.js",-1),g=s(" \u5E94\u7528\u7A0B\u5E8F\u3002"),f=n("h3",{id:"\u6761\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6761\u4EF6","aria-hidden":"true"},"#"),s(" \u6761\u4EF6")],-1),x=n("p",null,[s("\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u60A8\u9700\u8981\u5B89\u88C5 "),n("code",null,"Node.js"),s("\uFF1A")],-1),j={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},N=s("\u4E0B\u8F7D Node.js"),w=p(`<h3 id="\u5C06\u53C2\u6570\u4F20\u9012\u7ED9-node-js-\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5C06\u53C2\u6570\u4F20\u9012\u7ED9-node-js-\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> \u5C06\u53C2\u6570\u4F20\u9012\u7ED9 <code>Node.js</code> \u5E94\u7528\u7A0B\u5E8F</h3><p>\u8BA9\u6211\u4EEC\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u7684\u65B0\u6587\u4EF6<code>script.js</code>\u5E76\u5411\u5176\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const process = require(&#39;process&#39;);

console.log(process.argv[2]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>process.argv</code>\u6570\u7EC4\u7684\u5FEB\u901F\u6982\u8FF0\uFF1A</p><ul><li><code>process.argv[0]</code>\u662F <code>Node.js</code> \u53EF\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84</li><li><code>process.argv[1]</code>\u662F\u811A\u672C\u6587\u4EF6\u7684\u8DEF\u5F84</li><li><code>process.argv[2]</code>\u662F\u4F20\u9012\u7ED9\u811A\u672C\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</li><li><code>process.argv[3]</code>\u662F\u4F20\u9012\u7ED9\u811A\u672C\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4F9D\u6B64\u7C7B\u63A8</li></ul><p>\u8BA9\u6211\u4EEC\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> script.js ivwv

<span class="token comment"># \u8F93\u51FA:</span>
ivwv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6253\u5370\u6240\u6709\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6253\u5370\u6240\u6709\u53C2\u6570" aria-hidden="true">#</a> \u6253\u5370\u6240\u6709\u53C2\u6570</h4><p>\u8981\u6253\u5370\u6240\u6709\u53C2\u6570\uFF0C\u60A8\u53EF\u4EE5\u50CF\u4F7F\u7528<code>forEach</code>\u6807\u51C6\u6570\u7EC4\u4E00\u6837\u4F7F\u7528\u5FAA\u73AF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> process <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA9\u6211\u4EEC\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C\u811A\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> script.js hi there devs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u73B0\u5728\u5C06 3 \u4E2A\u53C2\u6570\u4F20\u9012\u7ED9\u811A\u672C\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u811A\u672C\u7684\u8F93\u51FA\u5C06\u662F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">0</span>: /opt/homebrew/Cellar/node@16/16.16.0/bin/node
<span class="token number">1</span>: /Users/bobby/dev/script.js
<span class="token number">2</span>: hi
<span class="token number">3</span>: there
<span class="token number">4</span>: devs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function V(C,E){const t=o("CountView"),a=o("ExternalLinkIcon");return i(),l("div",null,[e(t),r,u,n("p",null,[v,n("a",h,[m,b,e(a)]),k,_,g]),f,x,n("ul",null,[n("li",null,[n("a",j,[N,e(a)])])]),w])}var L=c(d,[["render",V],["__file","how-to-pass-cmd-line-args-to-node.html.vue"]]);export{L as default};
