import * as ThinkCluster from 'think-cluster';

function test(messenger: ThinkCluster.Messenger) {
  messenger.addListener('listener', ()=>{});
}