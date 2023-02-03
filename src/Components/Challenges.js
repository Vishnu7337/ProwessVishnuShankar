import Card from "./Card";

import './CSS/Challenges.css'

const Challenges=()=>{
  const Title="Challenges"
  const data=[
  { title:"Java",Score:20

  },{
    title:"Python",Score:20

  },{
    title:"Problem Solving",Score:50

  },{
    title:"Conditional Statements",Score:20

  },{
    title:"Basics of Programming",Score:20

  },{
    title:"Spring",Score:200

  },{
    title:"React JS",Score:100

  },{
    title:"Git",Score:10

  },{
    title:"HTML ",Score:10

  },
  {
    title:"CSS Styling ",Score:20

  }
];
  return(<>


<div className="main-card-container">
    
    <Card Title={data[1].title} Score={data[1].Score}></Card>
    <Card Title={data[2].title} Score={data[2].Score}></Card>
    <Card Title={data[3].title} Score={data[3].Score}></Card>
    <Card Title={data[4].title} Score={data[4].Score}></Card> 
    <Card Title={data[5].title} Score={data[5].Score}></Card>
    <Card Title={data[6].title} Score={data[6].Score}></Card>
    <Card Title={data[7].title} Score={data[7].Score}></Card>
    <Card Title={data[8].title} Score={data[8].Score}></Card>
    <Card Title={data[9].title} Score={data[9].Score}></Card>
    

    </div>
  
  
  
  </>);
}
export default Challenges