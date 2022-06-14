import { Description } from "@mui/icons-material";

function Table({tableData}){
    return(
        <table className="table">
            <thead>
                <tr>
                   
                    <th>Plant Name</th>
                  
                    <th>Plant Description</th>
                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                          
                            <td>{data.name}</td>
                            
                            <td>{data.description}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
export default Table;