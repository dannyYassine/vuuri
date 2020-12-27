<template>
  <section class="grid-demo">
    <h2 class="section-title"><span>Grid Demo</span></h2>
    <div class="demo">
      <div class="grid-controls">
        <div class="grid-control search">
          <input class="grid-control-field search-field form-control" type="text" name="search" placeholder="Search...">
          <div class="grid-control-icon">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </div>
        </div>
        <div class="grid-control filter">
          <select class="grid-control-field filter-field form-control">
            <option value="" selected="">All</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
          <div class="grid-control-icon">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M463.952 0H48.057C5.419 0-16.094 51.731 14.116 81.941L176 243.882V416c0 15.108 7.113 29.335 19.2 40l64 47.066c31.273 21.855 76.8 1.538 76.8-38.4V243.882L497.893 81.941C528.042 51.792 506.675 0 463.952 0zM288 224v240l-64-48V224L48 48h416L288 224z"></path>
            </svg>
          </div>
          <div class="grid-select-arrow">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>
            </svg>
          </div>
        </div>
        <div class="grid-control sort">
          <select class="grid-control-field sort-field form-control">
            <option value="order" selected="">Drag</option>
            <option value="title">Title (drag disabled)</option>
            <option value="color">Color (drag disabled)</option>
          </select>
          <div class="grid-control-icon">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M244 192h184a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20H244a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20zm28-112h128v64H272zm212 176H252a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h232a28 28 0 0 0 28-28V284a28 28 0 0 0-28-28zm-20 176H272V304h192zm-300-48h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384z"></path>
            </svg>
          </div>
          <div class="grid-select-arrow">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>
            </svg>
          </div>
        </div>
        <div class="grid-control layout">
          <select class="grid-control-field layout-field form-control">
            <option value="left-top" selected="">Left Top</option>
            <option value="left-top-fillgaps">Left Top (fill gaps)</option>
            <option value="right-top">Right Top</option>
            <option value="right-top-fillgaps">Right Top (fill gaps)</option>
            <option value="left-bottom">Left Bottom</option>
            <option value="left-bottom-fillgaps">Left Bottom (fill gaps)</option>
            <option value="right-bottom">Right Bottom</option>
            <option value="right-bottom-fillgaps">Right Bottom (fill gaps)</option>
          </select>
          <div class="grid-control-icon">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm-16 464H48V48h416zm-48-48V256H256v160zM256 96H96v160h160z"></path>
            </svg>
          </div>
          <div class="grid-select-arrow">
            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path fill="currentColor" d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="grid muuri drag-enabled" style="height: 960px;"><div class="grid-item h1 w2 red muuri-item muuri-item-shown" data-color="red" data-title="xa" style="left: 0px; top: 0px; transform: translateX(240px) translateY(0px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">xa</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
        <div class="grid-item h1 w2 blue muuri-item muuri-item-shown" data-color="blue" data-title="sr" style="left: 0px; top: 0px; transform: translateX(480px) translateY(0px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">sr</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w2 blue muuri-item muuri-item-shown" data-color="blue" data-title="td" style="left: 0px; top: 0px; transform: translateX(240px) translateY(120px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">td</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w1 blue muuri-item muuri-item-shown" data-color="blue" data-title="nw" style="left: 0px; top: 0px; transform: translateX(480px) translateY(120px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">nw</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w1 blue muuri-item muuri-item-shown" data-color="blue" data-title="wy" style="left: 0px; top: 0px; transform: translateX(600px) translateY(120px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">wy</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w1 blue muuri-item muuri-item-shown" data-color="blue" data-title="vn" style="left: 0px; top: 0px; transform: translateX(0px) translateY(240px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">vn</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w1 blue muuri-item muuri-item-shown" data-color="blue" data-title="ge" style="left: 0px; top: 0px; transform: translateX(120px) translateY(240px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">ge</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w1 red muuri-item muuri-item-shown" data-color="red" data-title="ff" style="left: 0px; top: 0px; transform: translateX(240px) translateY(240px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">ff</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w1 blue muuri-item muuri-item-shown" data-color="blue" data-title="qb" style="left: 0px; top: 0px; transform: translateX(360px) translateY(240px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">qb</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w2 red muuri-item muuri-item-shown" data-color="red" data-title="xa" style="left: 0px; top: 0px; transform: translateX(120px) translateY(360px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">xa</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w2 blue muuri-item muuri-item-shown" data-color="blue" data-title="mi" style="left: 0px; top: 0px; transform: translateX(360px) translateY(360px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">mi</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w2 red muuri-item muuri-item-shown" data-color="red" data-title="ku" style="left: 0px; top: 0px; transform: translateX(0px) translateY(480px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">ku</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w1 red muuri-item muuri-item-shown" data-color="red" data-title="eh" style="left: 0px; top: 0px; transform: translateX(240px) translateY(480px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">eh</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w2 blue muuri-item muuri-item-shown" data-color="blue" data-title="vx" style="left: 0px; top: 0px; transform: translateX(360px) translateY(480px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">vx</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w1 red muuri-item muuri-item-shown" data-color="red" data-title="ev" style="left: 0px; top: 0px; transform: translateX(600px) translateY(480px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">ev</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w2 blue muuri-item muuri-item-shown" data-color="blue" data-title="iw" style="left: 0px; top: 0px; transform: translateX(0px) translateY(720px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">iw</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w1 red muuri-item muuri-item-shown" data-color="red" data-title="sw" style="left: 0px; top: 0px; transform: translateX(240px) translateY(720px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">sw</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h1 w1 green muuri-item muuri-item-shown" data-color="green" data-title="xc" style="left: 0px; top: 0px; transform: translateX(360px) translateY(720px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">xc</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w1 blue muuri-item muuri-item-shown" data-color="blue" data-title="gt" style="left: 0px; top: 0px; transform: translateX(480px) translateY(720px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">gt</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div><div class="grid-item h2 w2 green muuri-item muuri-item-shown" data-color="green" data-title="ld" style="left: 0px; top: 0px; transform: translateX(0px) translateY(0px);">
        <div class="grid-item-content" style="opacity: 1; transform: scale(1);">
          <div class="grid-card">
            <div class="grid-card-title">ld</div>
            <div class="grid-card-handle" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>
            <div class="grid-card-remove">
              <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div></div>

      <template class="grid-item-template">
        <div class="grid-item">
          <div class="grid-item-content">
            <div class="grid-card">
              <div class="grid-card-title"></div>
              <div class="grid-card-handle"></div>
              <div class="grid-card-remove">
                <svg class="board-item-action-icon icon-delete" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div class="grid-footer">
        <button class="grid-button add-more-items">
          <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GridDemo"
}
</script>

<style scoped>

.demo {
  transform: scale(0.6);
  position: relative;
  top: -200px;
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

/* Grid */

.grid {
  position: relative;
  max-width: 96rem;
  padding-bottom: 3rem;
  box-sizing: content-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.grid-item {
  position: absolute;
  width: 104px;
  height: 104px;
  line-height: 1rem;
  margin: 1rem;
  z-index: 1;
}
.grid-item.muuri-item-positioning {
  z-index: 2;
}
.grid-item.muuri-item-placeholder {
  z-index: 2;
  margin: 0;
  opacity: 0.5;
}
.grid-item.muuri-item-dragging,
.grid-item.muuri-item-releasing {
  z-index: 9999;
}
.grid-item.muuri-item-dragging {
  cursor: move;
}
.grid-item.muuri-item-hidden {
  z-index: 0;
}
.grid-item.h2 {
  height: 230px;
}
.grid-item.w2 {
  width: 230px;
}
.grid-item-content {
  position: relative;
  width: 100%;
  height: 100%;
}
.grid-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 700;
  border: 0.5rem solid #fff;
  border-radius: 2rem;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
.grid-item.red .grid-card {
  color: #ffe67a;
  background: #ff69ea;
}
.grid-item.green .grid-card {
  color: #5455ff;
  background: #aaffdc;
}
.grid-item.blue .grid-card {
  color: #aaffdc;
  background-color: rgb(139, 152, 255);
}
.grid-card-handle {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  cursor: move;
}
.grid.drag-enabled .grid-card-handle {
  display: block;
}
.grid-card-title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
}
.grid-card-remove {
  display: flex;
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  background: #ff6262;
  color: #ffe67a;
  pointer-events: none;
  opacity: 0;
  transform: scale(0, 0);
  transition: transform 0.3s 0s ease-out, opacity 0.3s 0s linear;
}
.grid-card:hover > .grid-card-remove,
.grid-card:focus > .grid-card-remove,
.grid-item.muuri-item-dragging .grid-card-remove,
.grid-item.muuri-item-releasing .grid-card-remove {
  opacity: 1;
  transform: scale(1, 1);
  pointer-events: auto;
  transition: transform 0.15s 0.1s ease, opacity 0.15s 0.1s linear;
}
.grid-card-remove svg {
  flex-grow: 1;
  pointer-events: none;
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