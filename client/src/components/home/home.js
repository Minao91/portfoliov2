import "../../style/home/home.scss";

function Home() {
    return (
        <>
            <nav>
                <div className="listNav">
                    <ul>
                        <li>
                            <div className="contentListNav">
                                <span className="titleContent">
                                    About
                                </span>
                                <div className="separatorContent"></div>
                                <span className="underTitleContent">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                        </li>
                        <li>
                            <div className="contentListNav">
                                <span className="titleContent">
                                    Projects
                                </span>
                                <div className="separatorContent"></div>
                                <span className="underTitleContent">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                        </li>
                        <li>
                            <div className="contentListNav">
                                <span className="titleContent">
                                    Skills
                                </span>
                                <div className="separatorContent"></div>
                                <span className="underTitleContent">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                        </li>
                        <li>
                            <div className="contentListNav">
                                <span className="titleContent">
                                    Contact
                                </span>
                                <div className="separatorContent"></div>
                                <span className="underTitleContent">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="inspiration"><span>inspiration :</span> <a href="http://www.impossible-bureau.com/" target="_blank" rel="noreferrer">Impossible Bureau</a></div>
            </nav>
        </>
    );
}

export default Home;