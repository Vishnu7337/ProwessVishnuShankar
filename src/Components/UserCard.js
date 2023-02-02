import './CSS/UserCard.css'
const UserCard=(props)=>{
    let players=[
        {
            playername:"Somu",
            team:"JAVA",
            runs:900
        },
        {
            playername:"Gopal",
            team:"Python",
            runs:1000
        },
        {
            playername:"Sunil",
            team:"GoLang",
            runs:500
        },
        {
            playername:"Pawan",
            team:"Java Full Stack",
            runs:700

        },
        {
            playername:" Rahul",
            team:"Python Spark",
            runs:800
        },{
            playername:"Sundar",
            team:"Python",
            runs:1200
        },
        {
            playername:"Satya Sundar",
            team:"Java",
            runs:100
        }
    ]
    return(<>
     <div class="content-ctn">

            
            <table>
                <tr class="table-heading">
                    <th>Name</th>
                    
                </tr>
               
                <tr>
                    <td>{players[1].playername}</td>
                  
                </tr>
                <tr>
                    <td>{players[2].playername}</td>
                    
                </tr>
                <tr>
                    <td>{players[3].playername}</td>
                    
                </tr>
                <tr>
                    <td>{players[4].playername}</td>
                    
                </tr>
                <tr>
                    <td>{players[5].playername}</td>
                     
                </tr>
                <tr>
                    <td>{players[6].playername}</td>
                  
                </tr>
            </table>
        </div>

    
    </>)

}
export default UserCard;