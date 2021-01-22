import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

class MobileNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
    }

    toggleMenuOpen = () => {
        if (this.state.isMenuOpen) {
            this.setState({
                isMenuOpen: false
            });
        } else {
            this.setState({
                isMenuOpen: true
            });
        }
    }

    render() {
        return (
            <>
                <div className="header">
                    <div className="nav_logo">
                        <Link href="/">
                            <a>
                                <img src="/bitsonic_logo.jpg" className="img_logo"></img>
                            </a>
                        </Link>
                    </div>
                    <div className="nav_menuBar" onClick={this.toggleMenuOpen.bind(this)}>
                        <img src="../ham.jpg" alt="메뉴바" />
                    </div>
                </div>

                <div className={this.state.isMenuOpen ? "Header-wrap open" : "Header-wrap"}>
                    <ul className="nav_container">
                        <li className="nav_item">
                            <Link href="/">
                                <a>
                                    <Image src="/bridge.png" width={35} height={35} className="img_bridge" />
                                    <p>Bridge</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link href="/swap">
                                <a>
                                    <Image src="/swap.png" width={35} height={35} className="img_swap" />
                                    <p>Swap</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav_item">
                            <Link href="/pool">
                                <a>
                                    <Image src="/pool.png" width={35} height={35} className="img_pool" />
                                    <p>Pool</p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav_button">
                            <a href="">
                                <button className="nav_walletConnect">
                                    <p>Wallet Connect</p>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <style jsx>{`
                body {
                    margin: 0;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: solid 2px #ededed;
                }
                
                .Header-wrap.open .nav_container {
                    display: flex;
                    position: absolute;
                    top: 3.5rem;
                    left:0;
                    z-index: 150;
                }

                .nav_container{
                    display: none;
                    flex-direction: column;
                    position: fixed;
                    width:100vw;
                    height:200%;
                    left:0;
                    magin: 0 0;
                    padding: 0 0;
                    background-color: rgba(0,0,0,.7);
                    color: white;
                }

                .img_logo {
                    width: 170px;
                    height: 50px;
                }

                .nav_item a {
                    padding: 1rem 2.5rem;
                    display: flex;
                    align-items: center;
                    color: black;
                }

                .nav_item a:hover {
                    background-color: #30465c;
                }
          
                .nav_item p {
                    margin: 1rem;
                    font-family: NotoSansCJKkr;
                    font-size: 1.15rem;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    letter-spacing: normal;
                    color: white;
                }

                .nav_button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 50%;
                    top: 90vh;
                }

                .nav_walletConnect {
                    border-radius: 8px;
                    background-color: #30465c;
                    border: none;
                    padding: 0.5rem 5rem;
                }
                .nav_walletConnect p {
                    margin: 0;
                    font-size: 1.15rem;
                    text-align: center;
                    color: white;
                }
                button:focus {
                        outline: none;
                }
        `}</style>
            </>
        );
    }
}

export default MobileNav