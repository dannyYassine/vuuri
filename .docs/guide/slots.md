# Slots

<table>
    <thead>
        <tr>
            <th style="text-align: left;">
                Name
            </th>
            <th style="text-align: left;">
                Description
            </th>
            <th style="text-align: left;">
                Props
            </th>
            <th style="text-align: left;">
                Example
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: left;">
                item
            </td>
            <td style="text-align: left;">
                Custom item template for each item
            </td>
            <td style="text-align: left;">
                <code>item</code>: contained from the items array
            </td>
            <td style="text-align: left;">
                <div class="pre-code">
                        <div class="language-vue extra-class">
          <pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vuuri</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ item }<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YourComponent</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vuuri</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
                      </div>
            </td>
        </tr>
    </tbody>
</table>