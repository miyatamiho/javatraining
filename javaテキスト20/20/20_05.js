// Vueコンポーネントの定義
Vue.component(
    'msg-comp',                   // タグ名
    {
      template: '<div>おはよう</div>' // タグの内容divで囲む
    }
  )
  
  let app = new Vue({
    el: '#app',                   // 関連付けるDOM要素
  });