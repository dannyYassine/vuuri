import { describe, test, expect } from 'vitest';
import vuuri, { GridEvent } from '@/index.js';

describe('index.js', () => {
    test('should have all valid imports', async () => {
        expect(vuuri).toBeDefined();
        expect(GridEvent).toBeDefined();
    });

    test('should GridEvent have all events', async () => {
        expect(GridEvent).toMatchObject({
            synchronize: 'synchronize',
            layoutStart: 'layoutStart',
            layoutEnd: 'layoutEnd',
            layoutAbort: 'layoutAbort',
            add: 'add',
            remove: 'remove',
            showStart: 'showStart',
            showEnd: 'showEnd',
            hideStart: 'hideStart',
            hideEnd: 'hideEnd',
            filter: 'filter',
            sort: 'sort',
            move: 'move',
            send: 'send',
            beforeSend: 'beforeSend',
            receive: 'receive',
            beforeReceive: 'beforeReceive',
            dragInit: 'dragInit',
            dragStart: 'dragStart',
            dragMove: 'dragMove',
            dragScroll: 'dragScroll',
            dragEnd: 'dragEnd',
            dragReleaseStart: 'dragReleaseStart',
            dragReleaseEnd: 'dragReleaseEnd',
            destroy: 'destroy'
          });
      });
});