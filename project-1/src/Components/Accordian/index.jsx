//Single selection 
//Multiple selection 

import { useState } from "react"
import { data as defaultData } from "./data"

export default function Accordian({ data: items = defaultData } = {}) {
     const [selected, setSelected] = useState(null);

     function handleSingleSelection(index) {
          setSelected(selected === index ? null : index);
     }

     return <div className="Wrapper">
          <div className="Accordian">
               {
                    items && items.length > 0 ? items.map((dataItem, index) => <div className="item" key={dataItem?.id ?? index} >
                         <div className="title" onClick={() => handleSingleSelection(index)}>
                              <h2>{dataItem.title}</h2>
                              <span>{selected === index ? "-" : "+"}</span>
                         </div>
                         {selected === index ? <div className="content">{dataItem?.content}</div> : null}
                    </div>) : <div>No data found</div>
               }
          </div>
     </div>
}