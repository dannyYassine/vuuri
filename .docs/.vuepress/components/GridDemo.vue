<template>
  <section class="grid-demo">
    <h2 class="section-title"><span>Grid Demo</span></h2>
    <div class="demo">
<!--      <div class="grid-controls">-->
<!--        <div class="grid-control search">-->
<!--          <input @change="onSearchFilterChange" class="grid-control-field search-field form-control" type="text" name="search" placeholder="Search...">-->
<!--          <div class="grid-control-icon">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
<!--              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="grid-control filter">-->
<!--          <select class="grid-control-field filter-field form-control" @change="onColorFilterChange">-->
<!--            <option value="" selected="">All</option>-->
<!--            <option value="red">Red</option>-->
<!--            <option value="blue">Blue</option>-->
<!--            <option value="green">Green</option>-->
<!--          </select>-->
<!--          <div class="grid-control-icon">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
<!--              <path fill="currentColor" d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--          <div class="grid-select-arrow">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">-->
<!--              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="grid-control sort">-->
<!--          <select class="grid-control-field sort-field form-control" @change="onOrderFilterChange">-->
<!--            <option value="order" selected="">Drag</option>-->
<!--            <option value="title">Title (drag disabled)</option>-->
<!--            <option value="color">Color (drag disabled)</option>-->
<!--          </select>-->
<!--          <div class="grid-control-icon">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
<!--              <path fill="currentColor" d="M244 192h184a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20H244a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20zm28-112h128v64H272zm212 176H252a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h232a28 28 0 0 0 28-28V284a28 28 0 0 0-28-28zm-20 176H272V304h192zm-300-48h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--          <div class="grid-select-arrow">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">-->
<!--              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="grid-control layout">-->
<!--          <select class="grid-control-field layout-field form-control" @change="onLayoutFilterChange">-->
<!--            <option value="left-top" selected="">Left Top</option>-->
<!--            <option value="left-top-fillgaps">Left Top (fill gaps)</option>-->
<!--            <option value="right-top">Right Top</option>-->
<!--            <option value="right-top-fillgaps">Right Top (fill gaps)</option>-->
<!--            <option value="left-bottom">Left Bottom</option>-->
<!--            <option value="left-bottom-fillgaps">Left Bottom (fill gaps)</option>-->
<!--            <option value="right-bottom">Right Bottom</option>-->
<!--            <option value="right-bottom-fillgaps">Right Bottom (fill gaps)</option>-->
<!--          </select>-->
<!--          <div class="grid-control-icon">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">-->
<!--              <path fill="currentColor" d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-16 464H48V48h416zm-48-48V256H256v160zM256 96H96v160h160z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--          <div class="grid-select-arrow">-->
<!--            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">-->
<!--              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>-->
<!--            </svg>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <vuuri :items="items"
             item-key="id"
             :get-item-width="getItemWidth"
             :get-item-height="getItemHeight"
             :options="options">
        <template #item="{ item }">
          <GridDemoItem :item="item" @on-delete="onDeleteClicked"/>
        </template>
      </vuuri>

      <div class="grid-footer">
        <button class="grid-button add-more-items" @click="onAddClicked">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import vuuri from 'vuuri';
import GridDemoItem from "./GridDemoItem";

export default {
  name: "GridDemo",
  components: {
    GridDemoItem,
    vuuri
  },
  data() {
    return {
      items: [],
      options: {
        showDuration: 400,
        showEasing: "ease",
        hideDuration: 400,
        hideEasing: "ease",
        layoutDuration: 400,
        layoutEasing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
        sortData: {
          title(item, element) {
            return element.getAttribute("data-title") || "";
          },
          color(item, element) {
            return element.getAttribute("data-color") || "";
          },
        },
        dragEnabled: true,
        dragHandle: ".grid-card-handle",
        dragContainer: document.querySelector(".muuri-grid"),
        dragRelease: {
          duration: 400,
          easing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
          useDragContainer: true,
        },
        dragPlaceholder: {
          enabled: true,
          createElement(item) {
            return item.getElement().cloneNode(true);
          },
        },
        dragAutoScroll: {
          targets: [window],
          sortDuringScroll: false,
          syncAfterScroll: false,
        },
      },
    }
  },
  methods: {
    onSearchFilterChange() {

    },
    onOrderFilterChange() {

    },
    onColorFilterChange() {

    },
    onLayoutFilterChange() {

    },
    onAddClicked() {
      this._buildItems();
    },
    onDeleteClicked(item) {
      const index = this.items.findIndex((value) => value.id === item.id);
      this.items.splice(index, 1);
    },
    _buildItems(numberOfTimes = 4) {
      const numberOfItems = Math.max(
          1,
          Math.floor(Math.random() * numberOfTimes)
      );
      for (let i = 0; i < numberOfItems; i++) {
        this.items.push(this._generateItem());
      }
    },
    _generateItems(num = 10) {
      for (let i = 0; i < num; i++) {
        this.items.push(this._generateItem());
      }
    },
    _generateItem() {
      return {
        id: Math.random(),
        name: makeId(2),
        ...this._getColor(),
        width: this.getSize(),
        height: this.getSize(),
      };
    },
    getItemWidth(item) {
      return `${item.width}px`;
    },
    getItemHeight(item) {
      return `${item.height}px`;
    },
    getSize() {
      const number = Math.random();
      if (number < 0.5) {
        return 90;
      }

      return 210;
    },
    _getColor() {
      const number = Math.random();
      let color;
      let textColor;
      if (number < 0.333) {
        color = "#aaffdc";
      } else if (number < 0.666) {
        color = "#ff69ea";
      } else {
        color = "rgb(139, 152, 255)";
      }

      if (color === "#aaffdc") {
        textColor = "#5455ff";
      } else if (color === "#ff69ea") {
        textColor = "#ffe67a";
      } else if (color === "rgb(139, 152, 255)") {
        textColor = "#aaffdc";
      }

      return {
        color,
        textColor
      }
    },
  },
  created() {
    this._generateItems();
  }
}

function makeId(length) {
  var result = "";
  var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
</script>

<style scoped lang="scss">

.demo {
  /*transform: scale(0.6);*/
  /*position: relative;*/
  /*top: -200px;*/

  &::v-deep {
    .muuri-item {
      margin: 15px;
    }

    .muuri-item-placeholder {
      opacity: 0.5;
      margin: 0 !important;
    }
  }
}

.grid-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
@media (max-width: 767px) {
  .grid-controls {
    flex-direction: column;
  }
}
.grid-control {
  display: flex;
  position: relative;
  width: 25%;
}
.grid-control:before {
  content: '';
  display: block;
  position: absolute;
  left: 0.5rem;
  right: 0.5rem;
  bottom: 0;
  border-bottom: 0.4rem dotted #65ffc3;
}
.grid-control:focus-within:before {
  border-bottom: 0.7rem double #ff69ea;
}
.grid-control:after {
  content: '';
  display: block;
  position: absolute;
  left: -0.2rem;
  top: 1.5rem;
  bottom: 1.5rem;
  border-left: 0.4rem dotted #65ffc3;
}
.grid-control:first-child:after {
  display: none;
}
@media (max-width: 767px) {
  .grid-control {
    width: 100%;
  }
  .grid-control:after {
    display: none;
  }
}

.grid-control-field {
  display: block;
  position: relative;
  width: 100%;
  height: 6rem;
  padding: 1rem 1.5rem 1rem 5rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 4rem;
  color: #5455ff;
  background: transparent;
  border: 0;
  border-radius: 0;
  z-index: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}
@media (max-width: 767px) {
  .grid-control-field {
    height: 5rem;
    line-height: 3rem;
  }
}
.grid-control-field::placeholder {
  opacity: 1;
  color: #ff69ea;
  font-style: italic;
}
select.grid-control-field {
  padding-right: 5rem;
  cursor: pointer;
}
select.grid-control-field::-ms-expand {
  display: none;
}
.grid-control-field:focus {
  outline: 0;
}
.grid-control-icon,
.grid-select-arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 5rem;
  height: 6rem;
  padding: 1.5rem;
  z-index: 2;
  pointer-events: none;
  color: #ff69ea;
}
/*
.grid-control:focus-within .grid-control-icon,
.grid-control:focus-within .grid-select-arrow {
  color: rgb(101, 255, 195);
}
*/
@media (max-width: 767px) {
  .grid-control-icon,
  .grid-select-arrow {
    height: 5rem;
  }
}
.grid-control-icon {
  left: 0;
}
.grid-select-arrow {
  right: 0;
  padding: 1.7rem;
}
.grid-control-icon svg,
.grid-select-arrow svg {
  flex-grow: 1;
}


/* Grid Footer */

.grid-footer {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: -3.5rem;
  transform: translateX(-50%);
  z-index: 2;
}

/* Button */

@keyframes gridButton {
  0% {
    transform: scale(1, 1) rotateZ(0deg);
  }
  50% {
    transform: scale(1.1, 1.1) rotateZ(90deg);
  }
  100% {
    transform: scale(1, 1) rotateZ(180deg);
  }
}

.grid-button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0;
  border: 0;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-weight: 700;
  width: 6rem;
  height: 6rem;
  white-space: nowrap;
  background: #fff;
  border: 0.5rem solid #65ffc3;
  color: #ff4bd8;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 3rem;
}
.grid-button.processing {
  animation-name: gridButton;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-delay: 0s;
}
.grid-button:focus {
  outline: 0;
  border: 0.7rem double #ff4bd8;
  padding: 1rem;
}
.grid-button svg {
  flex-grow: 1;
}
</style>