import {createApp} from 'vue';
import App from '/@/App.vue';
import * as path from 'path';

const {fork} = require('child_process');
const p = path.join(__dirname, '../../../../../../../plugins/hello/dist/hello-plugin.js');
console.log('looking for plugin at ' + p);
const f = fork(p, ['args'], {
  stdio: 'pipe',
});

f.on('message', (m: string) => {
  console.log('renderer got message:', m);
});
f.send('getHtml');
createApp(App).mount('#app');
