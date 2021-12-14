// 小型網址標籤
export function MffA(props) {
    return <a
        style={{
            textDecoration: "none",
            fontWeight: "1000",
            color: "white",
            fontFamily: "Microsoft JhengHei",
            fontSize: "28px",
            margin: props.margin,
            boxShadow:"0 0 0 0.5 black"
        }}
        href={props.href} >
        {props.text}
    </a>
}