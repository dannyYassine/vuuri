<template>
  <div>
    <div class="full-height">
      <h2>Usage</h2>
      <prism-editor
          class="my-editor"
          v-model="code"
          :highlight="highlighter"
          readonly
      ></prism-editor>
    </div>

    <div class="full-height">
      <h2>Automatic CRUD Detection</h2>
      <h2>You just worry about writing javascript</h2>
      <prism-editor
          class="my-editor"
          v-model="crudCode"
          :highlight="highlighter"
          readonly
      ></prism-editor>
    </div>
    <div class="full-height">
      <h2>Vuuri takes care of the rest</h2>
    </div>
  </div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from 'prismjs/components/prism-core';
import "prismjs/components/prism-clike";
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';
import { usageCode, crudCode } from './codefile';

export default {
  name: "CodeDemo",
  components: {
    PrismEditor
  },
  data() {
    return {
      code: usageCode,
      crudCode: crudCode
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
  }
}
</script>

<style scoped lang="scss">
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: white;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 18px;
  line-height: 1.5;
  padding: 5px;

  /* optional class for removing the outline */
  &::v-deep .prism-editor__textarea:focus {
    outline: none;
  }

  &::v-deep div.prism-editor__container {
    max-width: 50%;
    margin: auto;
  }
}
</style>