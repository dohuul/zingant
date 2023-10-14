
import React, { useState } from 'react';
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


/**Function example **/
function RateSelectBoxFunc() {

    let [is_expand, setIsExpand] = useState(false);
    let [selected_index, setSelectedIndex] = useState(0);
    let [is_expand_ups, setIsExpandUPS] = useState(0);
    let [selected_index_ups, setSelectedIndexUPS] = useState(0);

    const onSelectHandler = (index) =>{
        if(index == rate_select_data.length - 1){
            setIsExpand(false);
            setIsExpandUPS(true);
            setSelectedIndex(0);
            setSelectedIndexUPS(0);           
        }
        else{
            setIsExpand(false);
            setSelectedIndex(0);           
        }
    };

    
    const closeUPSSelect = () => {
        
        setIsExpand(true);  
        setIsExpandUPS(false);    
              
    }

    
    const expand= () => {
        setIsExpand(!is_expand); 
        setIsExpandUPS(false);  
    }

    let button_type = is_expand === true ? "up" : "down";
    return (      

        <Stack>                
            {/*header to show current selected item for main select*/}
            <Stack id='rate-select-header' className='rate-select-box-container' direction="horizontal" gap={3} onClick={expand}>
        
                <RateSelectItem image={rate_select_data[selected_index].image}
                                text = {rate_select_data[selected_index].text}
                                text_unimportant = {rate_select_data[selected_index].text_unimportant}
                                button_type = {button_type} /> 
            </Stack>

            {/*items for main select*/}
            {is_expand && rate_select_data.map((e, index) => {
                let content_id = 'rate-select-content-' + (index + 1);                       
                return (
                    <Stack id={content_id}  className='rate-select-box-container' direction="horizontal" gap={3} key={index} onClick={ () => (onSelectHandler(index))}>
                        <RateSelectItem image={e.image}
                                text = {e.text}
                                text_unimportant = {e.text_unimportant}
                                button_type = {e.text === 'UPS Packaging' ? 'right' : null}   /> 
                    </Stack>);})}

          
            {/*header to show current selected item for second select*/}
            {is_expand_ups && 
                    <Stack id='rate-select-header-ups'  className='rate-select-box-container' direction="horizontal" gap={3}  onClick={closeUPSSelect}>                
                        <RateSelectItem image={null}
                                    text = 'Back to other package type'
                                    text_unimportant = ''
                                    button_type = 'none' 
                                    is_ups_back_item={true}/> 
                    </Stack>}
            
             {/*items for second select*/}
            {is_expand_ups && rate_select_data_ups.map((e, index) => {
                let content_id = 'rate-select-content-ups-' + (index + 1);                       
                return (
                    <Stack id={content_id}  className='rate-select-box-container' direction="horizontal" gap={3} key={index} onClick={ () => (onSelectHandler(index))}>
                        <RateSelectItem image={e.image}
                                    text = {e.text}
                                    text_unimportant = {e.text_unimportant}
                                    button_type = 'none' 
                                   /> 
                    </Stack>);})}
        </Stack>
    );
}

/**Class example **/
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
        let button_type = this.state.is_expand === true ? "up" : "down";
        return (      

            <Stack>                
                {/*header to show current selected item for main select*/}
                <Stack id='rate-select-header' className='rate-select-box-container' direction="horizontal" gap={3} onClick={this.expand}>
            
                    <RateSelectItem image={rate_select_data[this.state.selected_index].image}
                                    text = {rate_select_data[this.state.selected_index].text}
                                    text_unimportant = {rate_select_data[this.state.selected_index].text_unimportant}
                                    button_type = {button_type} /> 
                </Stack>

                {/*items for main select*/}
                {this.state.is_expand && rate_select_data.map((e, index) => {
                    let content_id = 'rate-select-content-' + (index + 1);                       
                    return (
                        <Stack id={content_id}  className='rate-select-box-container' direction="horizontal" gap={3} key={index} onClick={ () => (this.onSelectHandler(index))}>
                            <RateSelectItem image={e.image}
                                    text = {e.text}
                                    text_unimportant = {e.text_unimportant}
                                    button_type = {e.text === 'UPS Packaging' ? 'right' : null}   /> 
                        </Stack>);})}

              
                {/*header to show current selected item for second select*/}
                {this.state.is_expand_ups && 
                        <Stack id='rate-select-header-ups'  className='rate-select-box-container' direction="horizontal" gap={3}  onClick={this.closeUPSSelect}>                
                            <RateSelectItem image={null}
                                        text = 'Back to other package type'
                                        text_unimportant = ''
                                        button_type = 'none' 
                                        is_ups_back_item={true}/> 
                        </Stack>}
                
                 {/*items for second select*/}
                {this.state.is_expand_ups && rate_select_data_ups.map((e, index) => {
                    let content_id = 'rate-select-content-ups-' + (index + 1);                       
                    return (
                        <Stack id={content_id}  className='rate-select-box-container' direction="horizontal" gap={3} key={index} onClick={ () => (this.onSelectHandler(index))}>
                            <RateSelectItem image={e.image}
                                        text = {e.text}
                                        text_unimportant = {e.text_unimportant}
                                        button_type = 'none' 
                                       /> 
                        </Stack>);})}
            </Stack>
        );
    }
}

function RateSelectItem({button_type, image, text, text_unimportant, is_ups_back_item=false}){

    let button_down = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="rate-select-box-button-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path> </svg></div>;
    let button_up = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" className="rate-select-box-button-triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg></div>        
    let button_left = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" class="rate-select-box-button-triangle-right-or-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"></path></svg></div>;
    let button_right = <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" class="rate-select-box-button-triangle-right-or-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></div>; 
    let button_to_shown = null;
    switch(button_type){
        case "up":
            button_to_shown = button_up;
            break;
        case "down":
            button_to_shown = button_down;
            break;
        case "left":
            button_to_shown = button_left;
            break;
        case "right":
            button_to_shown = button_right;
            break;
        default:
            break;
    }
    let img_to_show = is_ups_back_item ? button_left : <img className='rate-select-box-vendor-img' src={image} />
    return(
        <>
            <div className="p-2">            
               {img_to_show}
            </div>
            <div className="p-2 w-80">
                <div className='rate-select-box-text'>
                    {text}
                </div>
                <small className='rate-select-box-text-unimportant'>
                    {text_unimportant}
                </small>
            </div>
            <div className="p-2 w-10">
                {button_to_shown}
            </div>
        </>
    );
}



export default RateSelectBoxFunc;