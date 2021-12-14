// 小型網址標籤
export function MffA(props) {
    return <a
        style={{
            textDecoration: "none",
            fontWeight: "1000",
            color: "white",
            fontStyle: "unset",
            fontSize: "22px",
            margin: props.margin
        }}
        href={props.href} >
        {props.text}
    </a>
}