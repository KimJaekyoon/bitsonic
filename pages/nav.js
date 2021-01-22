import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav_logo">
                <Link href="/">
                    <a>
                        <Image src="/bitsonic_logo.jpg" width={204} height={60} className="img_logo" />
                    </a>
                </Link>
            </div>
            <ul className="nav_container">
                <li className="nav_item">
                    <Link href="/">
                        <a>
                            <Image src="/bridge.jpg" width={30} height={30} className="img_bridge" />
                            <p>Bridge</p>
                        </a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/swap">
                        <a>
                            <Image src="/swap.jpg" width={30} height={30} className="img_swap" />
                            <p>Swap</p>
                        </a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/pool">
                        <a>
                            <Image src="/pool.jpg" width={30} height={30} className="img_pool" />
                            <p>Pool</p>
                        </a>
                    </Link>
                </li>
                <li>
                    <a href="">
                        <button className="nav_walletConnect">
                            <p>Wallet Connect</p>
                        </button>
                    </a>
                </li>
            </ul>
            <a href="#" id="pull">Menu</a>
            <style jsx>{`
            @media (min-width:1024px) {
                .nav {
                    display: flex;
                    align-items: center;
                    padding: 20px 20px 0px;
                    border-bottom: solid 2px #ededed;
                }
                .nav_container {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    width: 100%;
                    margin: 0; 
                    padding: 0; 
                    list-style-type: none;
                }
                .nav_item {
                    height: max;
                    padding: 10px;
                    cursor: pointer;
                    border-bottom: solid 2px white;
                }
                .nav_item a {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    text-decoration: none;
                    color: black;
                }
                .nav_item:hover {
                    border-bottom-color: #30465c;
                }
                .nav_item p {
                    margin: 7px;
                    font-family: NotoSansCJKkr;
                    font-size: 15px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    letter-spacing: normal;
                }
                .nav_walletConnect {
                    border-radius: 8px;
                    background-color: #30465c;
                    border: none;
                }
                .nav_walletConnect p {
                    text-align: center;
                    color: white;
                }
                button:focus { 
                    outline: none; 
                }
            }
            
            @media (max-width: 1024px) {
              .nav {
                border-bottom: 0;
              }
              .nav ul {
                display: none;
                height: auto;
              }
              .nav a#pull {
                display: block;
                background-color: #283744;
                width: 100%;
                position: relative;
              }
              .nav a#pull:after {
                content:"";
                background: url('nav-icon.png') no-repeat;
                width: 30px;
                height: 30px;
                display: inline-block;
                position: absolute;
                right: 15px;
                top: 10px;
              }
            }
        `}</style>
        </nav>
    );
}
