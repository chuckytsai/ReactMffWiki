// 圖片引入
import logo from "../images/jpg/logo121.jpg";
// 引入模組
import { MffA } from "../components/ReactElement"

export function Nav() {
    return <nav
        style={{
            position: "fixed",
            width: "100%",
            height: "70px",
            zIndex: "80",
            lineHeight: "70px",
            paddingTop: "10px",
            background: "linear-gradient(45deg, #a39abe,#0d2863,#a39abe, #0d2863, #a39abe)",
            top: "0",
            borderBottom: "3px inset rgb(238, 226, 226, 0.5)"
        }}>
        <a href='/'>
            <img style={{
                float: "left",
                marginLeft: "20px",
                height: "45px",
                cursor: "pointer",
            }} alt="" src={logo}></img>
        </a>
        <div style={{
            height: "40px",
            lineHeight: "40px",
            fontWeight: "800",
            fontStyle: "unset",
            float: "right",
        }}>
            <MffA text="遊戲角色" href='/Herolist' margin="0 10px" />
            <MffA text="遊戲攻略" href='/Challenge' margin="0 10px" />
        </div>
    </nav>
}

export function Flooter() {
    return <footer style={{
        position: "fixed",
        height: "40px",
        width: "100%",
        background: "linear-gradient(45deg, #a39abe,#0d2863,#a39abe, #0d2863, #a39abe)",
        zIndex: "80",
        bottom: "0",
        fontSize: "25px",
        lineHeight: "33px",
        fontWeight: "800",
        color: "white",
        textAlign: "center",
        borderTop: "3px inset rgb(238, 226, 226, 0.5)"
    }}
    // =======文字內容===================
    >Copyright ©{new Date().getFullYear()} Netmarble Games 
    </footer>
}