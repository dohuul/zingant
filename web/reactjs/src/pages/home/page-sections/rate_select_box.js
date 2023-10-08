
import React from 'react';
import { Table } from 'react-bootstrap'; 
import Stack from 'react-bootstrap/Stack';

import './rate_select_box.css';

import img_vendor_box from '../../../images/rate_select-vendor-img-box.png';
import img_vendor_soft_envelope from '../../../images/rate_select-vendor-img-soft-envelope.png';
import img_vendor_flat_rate_envelope from '../../../images/rate_select-vendor-img-flat-rate-envelope.png';
import img_vendor_ups_express_box from '../../../images/rate_select-vendor-img-ups-express-box.png';
import img_vendor_ups_express_tube from '../../../images/rate_select-vendor-img-ups-express-tube.png';


var rate_select_data = [
   {
       'image' : img_vendor_box,
       'text' : 'Box or Rigid Packing',
       'text_unimportant' : 'Any custom box or thick panel'
   },
   {
        'image' : img_vendor_soft_envelope,
        'text' : 'Soft Pack, Padded or Flat Envelope, or Box in a Bag',
        'text_unimportant' : 'Measure & use the Length Width of the Envelope before putting anything in it'
    },
    {
        'image' : img_vendor_flat_rate_envelope,
        'text' : 'USPS Flat Rate Packaging',
        'text_unimportant' : 'Flat Rate boxes and envelope options'
    },
    {
        'image' : img_vendor_ups_express_box,
        'text' : 'UPS Packaging',
        'text_unimportant' : 'UPS-branded boxes and envelopes'
    }
]

var rate_select_data_ups = [
    {
         'image' : img_vendor_ups_express_box,
         'text' : 'UPS Express Box Small',
         'text_unimportant' : 'Small Express Box'
    },
    {
        'image' : img_vendor_ups_express_box,
        'text' : 'UPS Express Box Medium',
        'text_unimportant' : 'Medium Express Box'
   },
   {
    'image' : img_vendor_ups_express_box,
    'text' : 'UPS Express Box Large',
    'text_unimportant' : 'Large Express Box'
   },
    {
         'image' : img_vendor_ups_express_tube,
         'text' : 'UPS Express Tube',
         'text_unimportant' : 'Totally Tubular'
    }

]

class RateSelectBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'is_expand' : false,
            'selected_index': 0,
            'is_expand_ups' : false,
            'selected_index_ups' :0

        };

        this.expand = this.expand.bind(this);
        this.onSelectHandler = this.onSelectHandler.bind(this);
        this.closeUPSSelect = this.closeUPSSelect.bind(this);
    }

    expand() {
        let next_state = !this.state.is_expand;
        this.setState( {'is_expand' : next_state});
    }

    closeUPSSelect(){
        this.setState( {'is_expand' : true,
            'is_expand_ups' : false});
    }

    onSelectHandler(index){

        if(index == rate_select_data.length - 1){
            this.setState( {'selected_index' : 0,
                            'is_expand' : false,
                            'is_expand_ups' : true,
                            'selected_index_ups' : 0

            });
        }
        else{
            this.setState( {'selected_index' : index,
            'is_expand' : false
});
        }
    }

    render(){

        let button_collapsed = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="rate-select-box-button-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path> </svg></div>;
        let button_expanded = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" className="rate-select-box-button-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg></div>
        let button_collapsed_or_expanded = this.state.is_expand === true ? button_expanded : button_collapsed;
        
        let button_collapsed_ups = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" class="rate-select-box-button-triangle-right-or-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg></div>;
        let button_expanded_ups = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" class="rate-select-box-button-triangle-right-or-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></div>;
         
        return (       

            <Stack>
                <Stack id='rate-select-header' className='rate-select-box-container' direction="horizontal" gap={3} onClick={this.expand}>
                    <div className="p-2">            
                        <img className='rate-select-box-vendor-img' src={rate_select_data[this.state.selected_index].image} /> 
                    
                    </div>
                    <div className="p-2 w-80">
                        <div className='rate-select-box-text'>
                            {rate_select_data[this.state.selected_index].text}
                        </div>
                        <small className='rate-select-box-text-unimportant'>
                            {rate_select_data[this.state.selected_index].text_unimportant}
                        </small>
                    </div>
                    <div className="p-2 w-10">
                        {button_collapsed_or_expanded}
                    </div>
                </Stack>

                {
                    this.state.is_expand && rate_select_data.map((e, index) => {
                    let content_id = 'rate-select-content-' + (index + 1);                       
                    return (
                        <Stack id={content_id}  className='rate-select-box-container' direction="horizontal" gap={3} key={index} onClick={ () => (this.onSelectHandler(index))}>
                            <div className="p-2">            
                                <img className='rate-select-box-vendor-img' src={e.image} /> 
                            
                            </div>
                            <div className="p-2 w-80">
                                <div className='rate-select-box-text'>
                                    {e.text}
                                </div>
                                <small className='rate-select-box-text-unimportant'>
                                    {e.text_unimportant}
                                </small>
                            </div>
                            <div className="p-2 w-10">
                             {index == rate_select_data.length - 1 ? button_expanded_ups : null}  
                            </div>
                        </Stack>);})
                }


                {
                    this.state.is_expand_ups && 
                        <Stack id='rate-select-header-ups'  className='rate-select-box-container' direction="horizontal" gap={3}  onClick={this.closeUPSSelect}>
                        <div className="p-2">            
                            {button_collapsed_ups}
                        
                        </div>
                        <div className="p-2 w-80">
                            <div className='rate-select-box-text'>
                                Back to other package type
                            </div>
                            <small className='rate-select-box-text-unimportant'>
                                 
                            </small>
                        </div>
                        <div className="p-2 w-10">
                       
                        </div>
                    </Stack>
                   
                }

                {
                    this.state.is_expand_ups && rate_select_data_ups.map((e, index) => {
                    let content_id = 'rate-select-content-ups-' + (index + 1);                       
                    return (
                        <Stack id={content_id}  className='rate-select-box-container' direction="horizontal" gap={3} key={index} onClick={ () => (this.onSelectHandler(index))}>
                            <div className="p-2">            
                                <img className='rate-select-box-vendor-img' src={e.image} /> 
                            
                            </div>
                            <div className="p-2 w-80">
                                <div className='rate-select-box-text'>
                                    {e.text}
                                </div>
                                <small className='rate-select-box-text-unimportant'>
                                    {e.text_unimportant}
                                </small>
                            </div>
                            <div className="p-2 w-10">  
                                                           
                            </div>
                        </Stack>);})
                }



            </Stack>


        );
    }
}

export default RateSelectBox;