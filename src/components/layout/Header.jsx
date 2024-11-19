import NavDesktop from "./NavDesktop.jsx";

function Header(){
    return (
        <header>
            <div className="navigation">
                <div className="logo">
                    <h1>Poszukajmy Jesieni</h1>
                </div>
                <NavDesktop/>
            </div>
        </header>

    )
}

export default Header;