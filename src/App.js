
import './App.css';
 
function App() {
  
  
   function handleChange(e)
   {
       if(e.target.id=="white")
       { 
        
       
        e.target.setAttribute('id','gray');
        e.target.style.backgroundColor="gray";
        e.target.children[0].innerHTML="Mckinsey & Company";
       e.target.children[1].innerHTML="MCMY";
       }
       else{
        
        
        e.target.setAttribute('id','white');
        e.target.style.backgroundColor="white";
        e.target.children[0].innerHTML="Company Name";
        e.target.children[1].innerHTML="code";
       }
      
   }
  return (
    <div className="App">
      <div className='left'>
      
      <img src='data:image/jpeg;base64,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'/>
      <p></p>
      <p></p>
      <p></p>
     </div>


      <div className='middle'>
        <div className='middle-head'>
          <h3>Clients <span>+</span></h3>
          <input disabled type="search" placeholder="Company,Entity,User,Domain,Service,Location                                      &#x1F50D;" />
        </div> 
        <div className='monthoption'>
          <select disabled>
            <option>April 2021</option>
          </select>
        </div>
         
           <div className='company-detail1' onClick={handleChange} id="white">
             <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div> 
           <div className='company-detail2' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail3' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div> 
           <div className='company-detail4' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail5' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail6' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail7' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail8' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail9' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail10'onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail11' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
           <div className='company-detail12' onClick={handleChange} id="white">
           <p id="comp-name">Company Name</p>
              <p id="comp-code">Code</p>
             <p id="comp-entity">8 Entities</p>
             <p id="comp-user">64 Users</p> 
           </div>
          
     
     </div>  

     <div className='right'>
          <div className='right-head'>
           <div className='sub-right-head'>  
               <span>Hi Abhishek,</span> 
               <img src="data:image/jpeg;base64,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"/>
           </div>
          </div>
          <div className='right-pdfpart'>
              <img src="data:image/png;base64,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"/>
              <p>Lucas Films Private Limited</p>
              <button>Edit</button>
              <p id="company-code"><span className="code">Company Code</span> LUCF</p>
              <p id="company-logo"><span className="code">Company Logo</span> Unavailable</p>
              <p id="domain"><span className="code">Domains</span> @lucasfirms.com @lucasstarwars.com @starwars.com +5 Others</p>
          </div>
          <div className='entry'>
            <p id='entity'>ENTITIES</p>
            <p id='invoice-code'>INVOICE CODES</p>
            <p id='user'>USERS</p>
          </div>
          <div className='last-part'>
              <p>4 Entities</p>
              <p id="plus">+</p>
              <p id="billing" className="code">Billing Location</p>
              <p id="entity-name" className="code">Entity Name</p>
              <p id="entity-code" className="code">Entity Code</p>
              <p id="msla-validation" className="code">MSLA Valid through</p>
              <p id="file-share" className="code">File Sharing</p>
              <p id="up">	&#9650;</p>
             
              <div className='sub-last-part'>
                   <div className='sub-sub-lastpart'>
                      <p id='kingdom-city'>Riyadh, Kingdom of Saudi Arabia</p>
                      <p id="fcompany-name">Lucas Films Private Limited</p>
                      <p id="item-code">LUCF01</p>
                      <p id="date-validate">3June2022-5June2030</p>
                      <p id="ext">External</p>
                      

                      <p id="address"><span className="code">Address</span> Line 1 Line 2 City,Country ZIP Code </p>
                      <p id="reg-number"><span className="code">Companany Registration Number</span> UICE87F2T749WEY</p>
                      <p id="treg-number"><span className="code">TAX Registration Number</span> AHR37T983Q7TRG8FG</p>
                      <p id="edit">&#9998;</p>
                      <p id="reg-validity"><span className="code">Company Registration Validity</span>   5 june 2025</p>
                      <p id="trx-validity"><span className="code">TRN Validity</span> 5 june 2025</p>
                      <p id="po-number"><span className="code">Charge Code/PO Number</span> Required</p>
                      <p id="dur-file-store"><span className="code">Duration of File Storage</span> 90 Days </p>
                      <p id="currency"><span className="code">Currency</span> US Dolar(s)</p>
                      <p id="msla-pdf"><span className="code">MSLA</span><br/> 20200916 EZoLucasFilmsMOU_signed by George.pdf</p>


                      <p id="vat-wht"><span className="code">VAT + WHT</span> 5% 5%</p> 
                      <p id="cor-price" className="code">Corporate Price as per MSLA</p>
                      <div className='sub-sub-lastpart1'>
                        <p id="service" className="code">Service</p>
                        <p id="units" className="code">Units</p>
                        <p id="list-price" className="code">List Price</p>
                        <p id="offered-price" className="code">Offered Price</p>
                        <p id="discount" className="code">Discount</p>
                        <div id='service1'>
                          <p id="serlable1">Arabic Language Transition: EZ Assured</p>
                          <p id="unit1">Words</p>
                          <p id="list-price1">0.1AED</p>
                          <p id="offered-price1">0.09AED</p>
                         <p id="discount1">10%(19%)</p> 
                        </div>
                        <div id='service2'>
                          <p id="serlable2">Arabic Language Transition: EZ Assured</p>
                          <p id="unit2">Words</p>
                          <p id="list-price2">0.1AED</p>
                          <p id="offered-price2">0.09AED</p>
                         <p id="discount2">10%(19%)</p> 
                        </div>
                        <div id='service3'>
                          <p id="serlable3">Arabic Language Transition: EZ Assured</p>
                          <p id="unit3">Words</p>
                          <p id="list-price3">0.1AED</p>
                          <p id="offered-price3">0.09AED</p>
                         <p id="discount3">10%(19%)</p> 
                        </div>
                      </div>
                   </div>
              </div>
              <div className='seclast-foot'>
               <p id="city-saudi">Riyadh, Kingdom of Saudi Arabia</p>
                <p id="lucas-animation">Lucas Animation</p>
                <p id="draft1">Draft</p>
                <p id="draft2">Draft</p>
               <p id="external">External</p> 
               <p id="down-arrow">&#128315;</p>
              </div>
                
              <div className='foot'>
              <p id="city-saudi">Riyadh, Kingdom of Saudi Arabia</p>
                <p id="lucas-animation">Star Wars Production</p>
                <p id="draft1">LUCF02</p>
                <p id="draft2">3 June 2022 - 5 June 2030</p>
               <p id="external">None</p>
               <p id="down-arrow">&#128315;</p>
              </div>
          </div>
     </div>  
    </div>
  );
}

export default App;
