import React from "react";
import './historyStyle.css'
import globalConf from "../../globalConfig";
import DataBinder from '@icedesign/data-binder';


@DataBinder({
  ajaxMessage: {
    url: globalConf.genUrl('notify'),
    method:'get',
    param:{},
    defaultBindingData:{
      "context": [],
    },
    responseFormatter:(rspHandler, res, orgRsp)=>{
      res = globalConf.formatResponseComm(res);
      rspHandler(res, orgRsp);
    },
    success:(res, defaultCallBack, orgResponse)=>{
      console.log("success res", res, "orgResponse", orgResponse);
    },
    error:(res, defaultCallBack, orgResponse)=>{
      defaultCallBack();
    },
  }
})
export default class Notify extends React.Component {
  static displayName = 'Notify';


  componentDidMount() {
   this.props.updateBindingData('ajaxMessage');
  }

  render() {
    const {ajaxMessage} = this.props.bindingData;
    console.log("ajaxMessage", ajaxMessage);

    return (
      <div className={'info-paragraph-history'}>
        <h1>
         竞赛通知
        </h1>
        {
          ajaxMessage.context.map(function(msg){
            return (
              <p>
                {msg}
              </p>
            );
          })
		 
        }
        <p>
          <br/>
        </p>
      </div>
    );
  };
}
