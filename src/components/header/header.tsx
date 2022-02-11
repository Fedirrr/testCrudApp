import React from "react";
import "./header.css"
import {Link} from "react-router-dom";
import {Button} from "antd";

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerLogo">
                <p>
                    Crud Application
                </p>
            </div>
            <div className="headerBtn">
                <Button>
                    <Link to="/">
                        Home
                    </Link>
                </Button>

                <Button>
                    <Link to={"/add"}>
                        Add new user
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Header;