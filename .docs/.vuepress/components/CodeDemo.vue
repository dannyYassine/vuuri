<template>
  <div>
    <div class="full-height">
      <h2>Usage</h2>
      <div class="pre-code">
        <div class="language-vue extra-class">
          <pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vuuri</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ item }<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>YourComponent</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vuuri</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>
      </div>
    </div>

    <div class="crud-updates full-height max-width-800 margin-auto">
      <h2>Automatic CRUD Updates</h2>
      <h2>You just worry about writing javascript</h2>
      <div class="pre-code">
        <div class="language-js extra-class"><pre class="language-js"><code><span class="token comment">// adding</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newItem<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// removing</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token">1</span><span class="token punctuation">,</span> <span class="token">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>
      </div>
      <ClientOnly>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <AddDeleteDemo class="add-delete-demo" deletes="false"/>
      </ClientOnly>
    </div>
    <div class="groups full-height max-width-800 margin-auto">
      <h2>Create Groups</h2>
      <h4>Vuuri automatically handles the model updates for you</h4>
      <br>
      <br>
      <br>
      <ClientOnly>
        <AutoSort />
      </ClientOnly>
    </div>
    <div class="half-height">
      <h2>Vuuri takes care of the rest</h2>
      <div class="text-center mt-4">
        <router-link to="/guide/install">
          <b-button class="get-started" type="is-dark">Get Started &#10142;</b-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { usageCode, crudCode } from './codefile';
import AutoSort from "./AutoSort";

export default {
  name: "CodeDemo",
  components: {AutoSort},
  data() {
    return {
      code: usageCode,
      crudCode: crudCode
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.language-vue,
.language-js {
  background: unset;
}

h1, h2, h3, h4, h5, h6 {
  text-align: center;
  border: none;
}

.crud-updates {
}

.groups {
}

.pre-code {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.language-vue {
  .tag:not(body) {
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
  h1, h2, h3, h4, h5 , h6 {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>