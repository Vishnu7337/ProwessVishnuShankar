import './CSS/header.css'
function Header(){
    return(
        <div class='header-right '>
            <div class="right-nav">
                
                <a href="/login" className="anchor">Login</a>
                <a href="/register" className="anchor">Register</a>
            </div>
            <div className='left-nav'>
               
                <a href="/challenges" className="anchor"><strong>Challenges</strong></a>
                <a href="scoreboard" className="anchor"><strong>Scoreboard</strong></a>
                <a href="/users" className="anchor"><strong>Users</strong></a>
                <a href="#" className="anchor"><strong>HeroVired DevOps</strong></a>

            </div>
            
            
           
        </div>

    )
}
export default Header;