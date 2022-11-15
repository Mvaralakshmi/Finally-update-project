import {Component} from "react"
import ButtonFilter  from "../ButtonFilter"
import CardItems from "../CardItems"
import {BsFilter} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import FilterDataItems from "../FilterDataItems";
import './index.css'

const buttonList = [
    {
        id:1,
        status:"active",
        text:"All"
    }
    ,
    {
        id:2,
        status:"your",
        text:"your"
    },
    {
        
        id:3,
        status:"block",
        text:"Blocked"
    }
]

class AllTab extends Component{
    state={activeId:buttonList[0].status,carddata:[],isFilter:false,selectValue:"",sub:"",searchResults:[]}

    onbuttonreply =(status)=>{
        const {details} = this.props;
        this.setState({carddata :details , activeId:status})
    }
    
    getFilterItem = ()=>{
        const {activeId , carddata} = this.state
        const filterdata = carddata.filter(eachCard=>eachCard.status===activeId)
        return filterdata
    }
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
        const {details}=this.props
        const {sub,selectValue}=this.state
        const searchFilters = details.filter(element => {
            return element.card_type === sub && element.user_name === selectValue;
        });
        this.setState({searchResults:searchFilters,isFilter:false})
    }
    filterCancel=()=>{
        this.setState({searchResults:[],isFilter:false})
    }

    render(){
        const filterCards=this.getFilterItem()
        console.log(filterCards)
        const {selectValue,isFilter,searchResults}=this.state
        return(
            <>
            <div className="All_tabs_section">
                <ul>
                    {buttonList.map(data=>(
                        <ButtonFilter  key={data.id} buttondetails={data} onbuttonreply={this.onbuttonreply}/>

                    ))}
                </ul>
                <div>
                    <img  style={{height:"25px" , paddingTop:"4px"}} src="https://i.ibb.co/4NT8CT9/menu-dot.jpg" alt="menudot"/>
                    <img  style={{height:"25px" , marginLeft:"6px"}} src="https://i.ibb.co/HD3L0db/menu-icon.png" alt='menubar'/>
                </div>
            </div>
            <hr style={{marginLeft:"40px" , marginRight:"50px"}}></hr>
            
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
                            <input className="checkbox-sub" type="checkbox" value="SUBSCRIPTION" onChange={this.getSbscription}/> Subscription
                            <input className="checkbox-sub" type="checkbox" value="BURNER" onChange={this.getBurner}/> Burner
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
            <ul>
                {filterCards.map(eachdata =>(
                    <CardItems key={eachdata.owner_id} details={eachdata} />
                ))}
            </ul>
            <FilterDataItems filterItemDetails={searchResults}/>
            <div>
            </div>
        </>
        )

    }
}

export default AllTab