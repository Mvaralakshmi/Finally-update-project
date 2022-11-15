import {Component} from "react";
import {BsFilter} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import FilterDataItems from "../FilterDataItems";
import "./index.css";

class Filter extends Component{
    state={isFilter:false,selectValue:"",sub:"",searchResults:[]}
    getModal=()=>{
        this.setState({isFilter:true})
    }
    closeModal=()=>{
        this.setState({isFilter:false})
    }
    getSbscription=(event)=>{
        this.setState({sub:event.target.value})
    }
    getBurner=(event)=>{
        this.setState({sub:event.target.value})
    }
    getSelectValue=(event)=>{
        this.setState({selectValue:event.target.value})
    }
    filterApply=()=>{
        const {carddata}=this.props
        const {sub,selectValue}=this.state
        const searchFilters = carddata.filter(element => {
            return element.card_type === sub && element.user_name === selectValue;
        });
        this.setState({searchResults:searchFilters,isFilter:false})
    }
    filterCancel=()=>{
        this.setState({searchResults:[],isFilter:false})
    }
    render(){
        const{isFilter,selectValue,searchResults}=this.state
        return (
            <>
            


            <div className='filter-list'>
                <AiOutlineSearch className='filter-logo'/>
                <button className='filter-btn' onClick={this.getModal}><BsFilter className='filter-logo1'/> Filter</button>
            </div>
            {isFilter && (
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn">
                            <button onClick={this.closeModal}>X</button>
                        </div>
                        <div className="title">
                            <p>Filters</p>
                            <hr/>
                        </div>
                        <div className="inputs">
                            <input className="checkbox-sub" type="checkbox" value="subscription" onChange={this.getSbscription}/> Subscription
                            <input className="checkbox-sub" type="checkbox" value="burner" onChange={this.getBurner}/> Burner
                        </div>
                            <p className="cardholder">Card Holder</p>
                            <select className="select-option" value={selectValue} onChange={this.getSelectValue}>
                                <option value="select card holder">Select card holder</option>
                                <option value="Vishal">Vishal</option>
                                <option value="Rajesh">Rajesh</option>
                                <option value="Rajith">Rajith</option>
                                <option value="Mayank">Mayank</option>
                            </select>
                        <div className="footer">
                            <button id="apply-button" onClick={this.filterApply}>Apply</button>
                            <button id="cancelBtn" onClick={this.filterCancel}>Clear</button>
                        </div>
                    </div>
                </div>
            )}
            <FilterDataItems filterItemDetails={searchResults}/>
        </>
       )
    }
}

export default Filter