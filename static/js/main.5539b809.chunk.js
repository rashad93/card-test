(window["webpackJsonpreact-card"]=window["webpackJsonpreact-card"]||[]).push([[0],{19:function(t,e,a){t.exports=a(43)},24:function(t,e,a){},25:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),l=a(17),u=a.n(l),i=(a(24),a(25),a(2)),o=a(3),s=a(6),c=a(5),p=a(4),d=a(7),h=a(18),m=a.n(h),v=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(c.a)(e).call(this))).state={data:[],error:!1},t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;m()({method:"post",url:"".concat("/api/index.php"),headers:{"content-type":"application/json"},data:{player:this.props.numberOfPlayer}}).then(function(e){console.log(e),t.setState({data:e.data}),!0===t.state.error&&t.setState({error:!1})}).catch(function(e){console.log(e),console.log(e.status),t.setState({error:!0})})}},{key:"render",value:function(){var t=n.a.createElement("div",null," ",this.state.data.map(function(t){return n.a.createElement("div",{key:t.id,className:"card"},n.a.createElement("p",null,t.data)," ")})," ");return n.a.createElement("div",null,this.state.error?null:t)}}]),e}(n.a.Component),b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(c.a)(e).call(this))).state={input:"",validInput:!1,error:!1,errorData:""},t.getPlayer=t.getPlayer.bind(Object(p.a)(t)),t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"getPlayer",value:function(){/^[1-9]/.test(this.playerInput.value)?(this.state.error&&this.setState({error:!1,errorData:""}),this.setState({input:this.playerInput.value,validInput:!0})):this.setState({error:!0,errorData:"Input value does not exist or value is invalid"})}},{key:"render",value:function(){var t=this,e=n.a.createElement("h5",null,"Number of players : ",this.state.input),a=n.a.createElement("h5",{style:{color:"red"}},this.state.errorData);return n.a.createElement("div",null,n.a.createElement("h3",null,"Enter Number of Players"),n.a.createElement("input",{className:"input-name",type:"number",ref:function(e){return t.playerInput=e},required:!0}),(this.state.error,a),n.a.createElement("br",null),n.a.createElement("button",{type:"button",onClick:this.getPlayer,value:"submit"},"Submit"),this.state.validInput?e:null,this.state.validInput?n.a.createElement(v,{numberOfPlayer:this.state.input}):null)}}]),e}(n.a.Component);var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null))};u.a.render(n.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5539b809.chunk.js.map