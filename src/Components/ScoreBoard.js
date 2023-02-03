import './CSS/scoreboard.css'
function ScoreBoard(){
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
    
    players.sort((a,b)=>{
         return b.runs - a.runs; 
        }
        );
    return (
        <div class="content-ctn">
             <h1>Scoreboard</h1>

            <table>
                <tr class="table-heading">
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>{players[0].playername}</td>
                    <td>{players[0].team}</td>
                    <td>{players[0].runs}</td>
                </tr>
                <tr>
                    <td>{players[1].playername}</td>
                    <td>{players[1].team}</td>
                    <td>{players[1].runs}</td>   
                </tr>
                <tr>
                    <td>{players[2].playername}</td>
                    <td>{players[2].team}</td>
                    <td>{players[2].runs}</td>   
                </tr>
                <tr>
                    <td>{players[3].playername}</td>
                    <td>{players[3].team}</td>
                    <td>{players[3].runs}</td>   
                </tr>
                <tr>
                    <td>{players[4].playername}</td>
                    <td>{players[4].team}</td>
                    <td>{players[4].runs}</td>   
                </tr>
                <tr>
                    <td>{players[5].playername}</td>
                    <td>{players[5].team}</td>
                    <td>{players[5].runs}</td>   
                </tr>
                <tr>
                    <td>{players[6].playername}</td>
                    <td>{players[6].team}</td>
                    <td>{players[6].runs}</td>   
                </tr>
            </table>
        </div>

    )
}export default ScoreBoard;