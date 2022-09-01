import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as s,b as n,e as l,r as t}from"./app.badc12a8.js";const i={},u=n("blockquote",null,[n("p",null,"\u57FA\u4E8ENodejs\u7684\u89C6\u9891\u6D41\u64AD\u653E,\u6309\u9700\u8BF7\u6C42\u89C6\u9891\u6D41\u7247\u6BB5\uFF0C\u505A\u5230\u7701\u6D41\u91CF\uFF0C\u7701\u5E26\u5BBD\u3002")],-1),r=n("p",null,[n("strong",null,"\u6E90\u7801")],-1),k={href:"https://github.com/ivwv/video-stream-demo",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"GitHub",-1),m={href:"https://gitee.com/isyv/video-stream-demo",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"Gitee",-1),b=l(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> stat <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>promises<span class="token punctuation">;</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> videoPath <span class="token operator">=</span> <span class="token string">&quot;./video.mp4&quot;</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// res.writeHead(200, { &quot;Content-Type&quot;: &quot;text/html&quot; });</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;video src=&quot;/video&quot;  width=800 controls&gt;&lt;/video&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/video&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(req.headers);</span>
  <span class="token comment">// \u63D0\u53D6 headers \u4E2D\u7684 range</span>
  <span class="token keyword">let</span> range <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>range<span class="token punctuation">;</span>
  <span class="token comment">// console.log(&quot;range&quot;, range);</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>range<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6 \u6587\u4EF6\u76F8\u5173\u4FE1\u606F\uFF0C\u4E3B\u8981\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F stat.size()</span>
    <span class="token keyword">let</span> stats <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">stat</span><span class="token punctuation">(</span>videoPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(&quot;stats&quot;, stats);</span>
    <span class="token comment">// \u5339\u914D range \u4E2D\u7684 \`bytes=24281089-\` \u6570\u503C</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> range<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">=(\\d+)-(\\d+)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(&quot;r&quot;, r);</span>
    <span class="token comment">// \u8F6C\u5316\u4E3A 10 \u8FDB\u5236</span>
    <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>r<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(&quot;start&quot;, start);</span>
    <span class="token comment">// \u8868\u793A \u5207\u7247\u5927\u5C0F \u8FD9\u91CC\u662F 1M</span>
    <span class="token keyword">let</span> end <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(&quot;end&quot;, end);</span>
    <span class="token comment">// console.log(&quot;stats.size&quot;, stats.size);</span>
    <span class="token comment">// \u5224\u65AD end \u662F\u5426\u8D85\u51FA\u6587\u4EF6\u5927\u5C0F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">&gt;</span> stats<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> end <span class="token operator">=</span> stats<span class="token punctuation">.</span>size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8BBE\u7F6E headers \u91CD\u8981</span>
    <span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BBE\u7F6E content-type</span>
      <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;video/mp4&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8BBE\u7F6E\u5207\u7247\u8303\u56F4</span>
      <span class="token string-property property">&quot;Content-Range&quot;</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bytes </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>start<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>end<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stats<span class="token punctuation">.</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token comment">// \u8BBE\u7F6E\u5207\u7247\u957F\u5EA6</span>
      <span class="token string-property property">&quot;Content-Length&quot;</span><span class="token operator">:</span> end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8BBE\u7F6E\u652F\u6301\u5207\u7247</span>
      <span class="token string-property property">&quot;Accept-Ranges&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bytes&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// HTTP 206 Partial Content \u6210\u529F\u72B6\u6001\u54CD\u5E94\u4EE3\u7801\u8868\u793A\u8BF7\u6C42\u5DF2\u6210\u529F\uFF0C</span>
    <span class="token comment">// \u5E76\u4E14\u4E3B\u4F53\u5305\u542B\u6240\u8BF7\u6C42\u7684\u6570\u636E\u533A\u95F4\uFF0C\u8BE5\u6570\u636E\u533A\u95F4\u662F\u5728\u8BF7\u6C42\u7684 Range \u9996\u90E8\u6307\u5B9A\u7684\u3002</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">206</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7B2C\u4E8C\u4E2A\u53C2\u6570\u8BBE\u7F6E\u5207\u7247\u8303\u56F4</span>
    fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>videoPath<span class="token punctuation">,</span> <span class="token punctuation">{</span> start<span class="token punctuation">,</span> end <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>videoPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(q,f){const p=t("CountView"),a=t("ExternalLinkIcon");return o(),c("div",null,[s(p),u,n("blockquote",null,[r,n("p",null,[n("a",k,[d,s(a)])]),n("p",null,[n("a",m,[v,s(a)])])]),b])}var _=e(i,[["render",g],["__file","video-stream-demo.html.vue"]]);export{_ as default};
